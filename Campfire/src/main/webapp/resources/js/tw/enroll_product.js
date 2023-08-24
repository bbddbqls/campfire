// 파일 관련
var fileIndex = 0; // 파일 idx
var filesArr = new Array(); // 파일 컨테이너

/* 첨부파일 추가 */
function addFile(object) {
    var maxFileCount = 5; // 첨부파일 갯수 상한선
    var inputtedFileCount = document.querySelectorAll('.fileBox').length; // 이미 넣은 파일 갯수
    var remainingFileSlotCount = maxFileCount - inputtedFileCount; // 넣을 수 있는 파일 자리 갯수
    var selectedFileCount =  object.files.length; // 사용자가 지금 넣으려고 시도하는 첨부파일 갯수

    console.log("maxFileCount: " + maxFileCount);
    console.log("inputtedFileCount: " + inputtedFileCount);
    console.log("remainingFileSlotCount: " + remainingFileSlotCount);
    console.log("selectedFileCount: " + selectedFileCount);


    if(remainingFileSlotCount < selectedFileCount) {
        if(remainingFileSlotCount == 0) {
            alertFunction('최대 5장까지 첨부할 수 있어요', '사진 목록이 꽉 찼어요', 'warning');
        } else {
            var alertString = '최대 5장까지 첨부할 수 있어요. 마지막 ';
            alertString += (selectedFileCount - remainingFileSlotCount);
            alertString += "장의 사진을 건너뛰고 올렸어요."
            alertFunction(alertString, '사진 목록이 꽉 찼어요','warning');
        }
    }

    for(var i=0; i < Math.min(remainingFileSlotCount, selectedFileCount); i++) {
        const file = object.files[i];
        
        // 파일 목록에 담기
        var reader = new FileReader();
        reader.onload = function () { // 파일 읽기가 완료될 때 수행됨 (리스너)
            filesArr.push(file);
        };
        reader.readAsDataURL(file); // 파일 읽기 -> 완료되면 리스너 실행됨
        
        // 프론트에 표시
        let htmlData = '';
        htmlData += '<div id="file' + fileIndex + '" class="fileBox">';
        htmlData += '   <p class="name">' + file.name + '</p>';
        htmlData += '   <a class="delete" onclick="deleteFile(' + fileIndex + ');">';
        htmlData += '       <i class="far fa-minus-square"></i>';
        htmlData += '   </a>';
        htmlData += '</div>';
        document.querySelector('.fileList').innerHTML += htmlData;
        
        fileIndex++;
    }

    object.value = ''; // 초기화
}

/* 첨부파일 삭제 */
function deleteFile(num) {
    document.querySelector("#file" + num).remove();
    filesArr[num].is_delete = true;
}

/* 컨트롤러로 전송 */
function submitForm() {
    // 데이터 가져오기 (첨부파일 제외)
    var category1 = document.querySelector('#filterCategory1');
    var category2 = document.querySelector('#filterCategory2');
    var region1 = document.querySelector('#filterRegion1');
    var region2 = document.querySelector('#filterRegion2');
    var price = document.querySelector('#priceContainer input');
    var title = document.querySelector('#titleContainer input');
    var content = document.querySelector('#contentContainer textarea');
    
    // 데이터 담기
    var formData = new FormData();
    formData.append("category1", category1.options[category1.selectedIndex].value.toString());
    formData.append("category2", category2.options[category2.selectedIndex].value.toString());
    formData.append("region1", region1.options[region1.selectedIndex].value.toString());
    formData.append("region2", region2.options[region2.selectedIndex].value.toString());
    formData.append("price", price.value);
    formData.append("title", title.value);
    formData.append("content", content.value);
    for (var i = 0; i < filesArr.length; i++) {
        // 삭제되지 않은 파일만 폼데이터에 담기
        if (!filesArr[i].is_delete) {
            formData.append("filesArr", filesArr[i]);
        }
    }
    console.log("category1: " + category1.options[category1.selectedIndex].value.toString());
    console.log("category2: " + category2.options[category2.selectedIndex].value.toString());
    console.log("region1: " + region1.options[region1.selectedIndex].value.toString());
    console.log("region2: " + region2.options[region2.selectedIndex].value.toString());
    console.log("price: " + price.value.toString());
    console.log("title: " + title.value.toString());
    console.log("content: " + content.value.toString());
    for (var i = 0; i < filesArr.length; i++) {
        if (!filesArr[i].is_delete) {
            console.log('name of filesArr[' + i + ']: ' + filesArr[i].name);
        }
    }

    // 데이터 보내기
    fetch('http://localhost/trading/insert.do', {
        method: 'POST',
        body: formData,
        redirect: 'manual'
    })
    .then(response => {
        console.log("response.status 상태 코드:", response.status);
        console.log("response의 최종 URL:", response.url);
        console.log("response:", response);
        
        return response.text();
    })
    .then(result => {
        console.log("response.text()의 result: " + result);
        if (result === "") {
            window.location.href = "/trading/list.do";
        } else {
            alertFunction(result, '게시 불가', 'warning');
        }
    })
    .catch(error => {
        alertFunction('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.', 'error', 'error');
    });
}
