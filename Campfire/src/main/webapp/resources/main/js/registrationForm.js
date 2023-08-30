const fileInput = document.getElementById("fileInput");
const previewContainer = document.getElementById("previewContainer");
const previewMainContainer = document.getElementsByClassName("camp-img-box");
const textBox = document.getElementById('text-box');
const btnA = document.getElementsByClassName('btn-a');
const btnB = document.getElementsByClassName('btn-b');
const explanation = document.getElementById('explanation');

let formData = new FormData();
let selectedPhotos = []; // Array to store selected photo elements
let selectedPhotosIndex = [];
let photos = [];
let photosIndex = [];



fileInput.addEventListener("change", function () {
    displayPreview();
});

function addMorePhotos() {
    fileInput.click();
}

let photoNum = 0;
function displayPreview() {
    console.log("photos[] 길이 : " + photoNum);
    let num = 0;
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        // 파일 읽기가 완료되었을 때 미리보기 생성
        reader.onload = function () {
            const image = new Image();
            console.log("photoNum - num : " + (photoNum - num + i))
            image.src = reader.result;
            image.setAttribute("data-title", (photoNum - num + i));
            // image.id = "photo" + (photoNum - num + i);
            console.log("data-title : " + (photoNum - num + i));

            image.classList.add("previewImage");
            image.addEventListener("click", function () {
                toggleCheckbox1(this);
            });
            previewContainer.appendChild(image);
        }
        photos.push(file);
        // photosIndex.push(photoNum);
        console.log("photoNum : " + photoNum);
        photoNum++;
        num++;
        reader.readAsDataURL(file); // 파일을 데이터 URL로 읽기

    }
    applyPhotos();
}

function toggleCheckbox1(photo) {
    const index = selectedPhotos.indexOf(photo);
    const selectedPhotosNum = photo.getAttribute("data-title");
    if (index === -1) {
        photo.style.border = '3px solid #f67878ff';
        selectedPhotos.push(photo);
        selectedPhotosIndex.push(selectedPhotosNum);
    } else {
        photo.style.border = "none";
        selectedPhotos.splice(index, 1);
        selectedPhotosIndex.splice(index, 1);
    }
    console.log("넘어온 진짜 data-title : " + selectedPhotosNum);
}

function deleteSelectedPhotos() {
    let photosDataTitle = [];

    const imageContainer = document.getElementById("previewContainer");
    const images = imageContainer.getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
        const dataTitle = images[i].getAttribute("data-title");
        photosDataTitle.push(dataTitle);
        console.log(photosDataTitle);
    }

    for (let i = selectedPhotos.length - 1; i >= 0; i--) {
        previewContainer.removeChild(selectedPhotos[i]);
        let selectPhotoNum = selectedPhotos[i].getAttribute("data-title");
        console.log("삭제된 selectPhotoNum:" + selectPhotoNum);
        const index = photosDataTitle.indexOf(selectPhotoNum);
        console.log("삭제된 index:" + index);
        photosDataTitle.splice(index, 1);
        // photosIndex.splice(index, 1);
        photos.splice(index, 1);
    }
    selectedPhotos = [];
    selectedPhotosIndex = [];

    applyPhotos();
}
function applyPhotos() {
    const mainImgBox = document.getElementById('main-img-box');
    const mainImg = document.getElementById('main-img');
    // console.log(mainImg);
    explanation.style.display = 'none';
    if (mainImg && mainImgBox.contains(mainImg)) {
        mainImgBox.removeChild(mainImg);
    }

    if (photos.length > 0) {
        console.log(photos[0]);
        const file = photos[0]; // 첫 번째 이미지 파일 가져오기
        const reader = new FileReader();

        // 파일 읽기가 완료되었을 때 미리보기 생성
        reader.onload = function () {
            const image = new Image();
            image.src = reader.result;
            image.id = "main-img";
            // 원하는 스타일을 설정하세요.

            // 이미지를 추가하고 싶은 div를 선택해서 해당 div에 이미지 추가
            mainImgBox.appendChild(image);
        };

        reader.readAsDataURL(file); // 파일을 데이터 URL로 읽기

    }
    for (let i = 0; i < photos.length; i++) {
        console.log("photos[" + i + "] : " + photos[i].name);
    }
    // for (let i = 0; i < photos.length; i++) {
    //     formData.append("photoList" + i + "", photos[i]);
    // }
    // for (const [key, value] of formData.entries()) {
    //     console.log(key, value);
    // }
}
function resetPhotos() {
    const mainImgBox = document.getElementById('main-img-box');
    const previewImaBox = document.getElementById('previewContainer');
    const mainImg = document.getElementById('main-img');
    const previewIma = document.getElementsByClassName('previewImage');
    // console.log(mainImg);
    explanation.style.display = 'block';
    if (mainImg && mainImgBox.contains(mainImg)) {
        mainImgBox.removeChild(mainImg);
    }
    while (previewIma.length > 0) {
        previewImaBox.removeChild(previewIma[0]);
    }

    photos = [];
    photosIndex = [];
}

function submitForm() {
   var campOffsdPrice = document.getElementById("campOffsdPrice").value;
            var campOffswPrice = document.getElementById("campOffswPrice").value;
            var campSdPrice = document.getElementById("campSdPrice").value;
            var campSwPrice = document.getElementById("campSwPrice").value;
           var postcode = document.getElementById("postcode").value;

            // 유효성 검사
            if (campOffsdPrice === "") {
                document.getElementById("campOffsdPrice").value = -1; // 빈 값일 경우 -1로 설정
            }

            if (campOffswPrice === "") {
                document.getElementById("campOffswPrice").value = -1;
            }

            if (campSdPrice === "") {
                document.getElementById("campSdPrice").value = -1;
            }

            if (campSwPrice === "") {
                document.getElementById("campSwPrice").value = -1;
            }
            
            if(postcode ===""){
            	document.getElementById("postcode").value = -1;
            }

    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    for (let i = 0; i < photos.length; i++) {
        formData.append('files', photos[i]); // 'files'와 동일한 이름을 사용
    }

    fetch('/business/insertCampRegistration.do', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log(response);
        	window.location.href = "/business/showMyCampList.do";

    })
    .catch(error => {
       window.location.href = "/business/showCampRegistration.do";
    });
}


        function validateForm() {
            var campOffsdPrice = document.getElementById("campOffsdPrice").value;
            var campOffswPrice = document.getElementById("campOffswPrice").value;
            var campSdPrice = document.getElementById("campSdPrice").value;
            var campSwPrice = document.getElementById("campSwPrice").value;

            // 유효성 검사
            if (campOffsdPrice === "") {
                document.getElementById("campOffsdPrice").value = -1; // 빈 값일 경우 -1로 설정
            }

            if (campOffswPrice === "") {
                document.getElementById("campOffswPrice").value = -1;
            }

            if (campSdPrice === "") {
                document.getElementById("campSdPrice").value = -1;
            }

            if (campSwPrice === "") {
                document.getElementById("campSwPrice").value = -1;
            }

            return true; // 유효성 검사 후 폼 제출
        }


