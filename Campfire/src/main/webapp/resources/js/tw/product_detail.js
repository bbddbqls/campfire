const overlay = document.getElementById('overlay')
const imageModal = document.getElementById('imageModal')
const smallImage = document.querySelector(".focusedImageImageListDivider #focusedImageContainer .zIndexDivider .zIndex0 img");
// const openModalButton = document.querySelector(".focusedImageImageListDivider #focusedImageContainer .zIndexDivider .zIndex0 img");
function openImageModal() {
    overlay.style.display = 'flex';
    imageModal.src = smallImage.src;
};
overlay.onclick = function () {
    overlay.style.display = 'none';
};

// #imageListContainer의 data-lotate_image_max_index
// .lotateImage.focused 또는 .lotateImage의 data-lotate_image_index
// #focusedImageContainer .zIndex0 img 의 src속성
// #focusedImageContainer .zIndex1 .imageBackwardButton -> 함수 추가 prevImgBtnClick() 현재 .focused인 .lotateImage의 data-lotate_image_index 가 0이면 data-lotate_image_max_index로 이동, 아니면 .focused를 선택된 걸로 이동 
// #focusedImageContainer .zIndex1 .imageForwardButton -> 함수 추가 nextImgBtnClick()

function prevImgBtnClick() {
    var focusedImage = document.querySelector('.lotateImage.focused');
    var imageListContainer = document.querySelector('#imageListContainer');
    var followingImage;
    var followingImageIndex;

    console.log("prevImgBtnClick() ---");
    console.log("focusedImage.dataset.lotate_image_index: " + `"${focusedImage.dataset.lotate_image_index}"`);
    console.log("imageListContainer.dataset.lotate_image_max_index: " + `"${imageListContainer.dataset.lotate_image_max_index}"`);
    if(focusedImage.dataset.lotate_image_index == 0) {
        followingImageIndex = imageListContainer.dataset.lotate_image_max_index;
    } else {
        followingImageIndex = parseInt(focusedImage.dataset.lotate_image_index) - 1;
    }
    console.log("followingImageIndex: " + `"${followingImageIndex}"`);
    followingImage = document.querySelector(`[data-lotate_image_index="${followingImageIndex}"]`);
    repositionFocusImage(followingImage);
}

function nextImgBtnClick() {
    var focusedImage = document.querySelector('.lotateImage.focused');
    var imageListContainer = document.querySelector('#imageListContainer');
    var followingImage;
    var followingImageIndex;

    console.log("nextImgBtnClick() ---");
    console.log("focusedImage.dataset.lotate_image_index: " + `"${focusedImage.dataset.lotate_image_index}"`);
    console.log("imageListContainer.dataset.lotate_image_max_index: " + `"${imageListContainer.dataset.lotate_image_max_index}"`);
    if(focusedImage.dataset.lotate_image_index == imageListContainer.dataset.lotate_image_max_index) {
        followingImageIndex = 0
    } else {
        followingImageIndex = parseInt(focusedImage.dataset.lotate_image_index) + 1;
    }
    console.log("followingImageIndex: " + `"${followingImageIndex}"`);
    followingImage = document.querySelector(`[data-lotate_image_index="${followingImageIndex}"]`);
    
    repositionFocusImage(followingImage);
}

//재료함수
function repositionFocusImage(imageObject) {
    var lotationImageList = document.querySelectorAll('.lotateImage');
    lotationImageList.forEach(function (item) {
		item.classList.remove('focused');
	});
	imageObject.classList.add('focused');

    var mainImage = document.querySelector('#focusedImageContainer .zIndex0 img');
    mainImage.src = imageObject.src;

    const imageModal = document.getElementById('imageModal');
    imageModal.src = mainImage.src;
}

function deleteSubmit(msg, tradingIdx) {
    // confirmFunction(msg)
    Swal.fire({
		title: msg,
		text: '',
		icon: 'question',
		
		showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		confirmButtonText: '삭제', // confirm 버튼 텍스트 지정
		cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		
		reverseButtons: true, // 버튼 순서 거꾸로
	})
    .then(result => {
        // 만약 Promise리턴을 받으면,
        if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면

            var formData = new FormData();
            formData.append("tradingIdx", tradingIdx);

            fetch('http://localhost/trading/delete.do', {
                method: 'POST',
                credentials: "same-origin", // 쿠키와 세션을 공유하기 위해 필요
                body: formData
            })
            .then(response => {
                return response.text();
            })
            .then(result => {
                console.log("result: " + result);

                if ((result !== null) && (result == "")) {

                    window.location.href = "/trading/list.do";

                } else {
                    alertFunction(result, '삭제 실패', 'warning');
                }
            })
            .catch(error => {
                alertFunction('통신 에러 발생', '삭제 실패', 'error');
            });
        }
    });
}

function soldToggleSubmit(msg, tradingIdx, status) {
    if(status == 1) {
        Swal.fire({
            title: msg,
            text: '',
            icon: 'question',
            
            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
    
            cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정
    
            confirmButtonColor: '#00571d', // confrim 버튼 색깔 지정
            confirmButtonText: '거래 완료', // confirm 버튼 텍스트 지정
    
            
            reverseButtons: true, // 버튼 순서 거꾸로
        })
        .then(result => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
    
                var formData = new FormData();
                formData.append("tradingIdx", tradingIdx);
                formData.append("toggleStatus", status);
                
                fetch('http://localhost/trading/soldToggle.do', {
                    method: 'POST',
                    credentials: "same-origin", // 쿠키와 세션을 공유하기 위해 필요
                    body: formData
                })
                .then(response => {
                    return response.text();
                })
                .then(result => {
                    console.log("result: " + result);
    
                    if ((result !== null) && (result == "")) {
    
                        window.location.href = "/trading/detail.do?tradingIdx=".concat(tradingIdx);
    
                    } else {
                        alertFunction(result, '거래 상태 수정 실패', 'warning');
                    }
                })
                .catch(error => {
                    alertFunction('통신 에러 발생', '거래 상태 수정 실패', 'error');
                });
            }
        });
    } else {
        Swal.fire({
            title: msg,
            text: '',
            icon: 'question',
            
            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
    
            cancelButtonColor: '#3085d6', // cancel 버튼 색깔 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정
    
            confirmButtonColor: '#d33', // confrim 버튼 색깔 지정
            confirmButtonText: '거래 완료 해제', // confirm 버튼 텍스트 지정
            
            reverseButtons: true, // 버튼 순서 거꾸로
        })
        .then(result => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
    
                var formData = new FormData();
                formData.append("tradingIdx", tradingIdx);
                formData.append("toggleStatus", status);
    
                fetch('http://localhost/trading/soldToggle.do', {
                    method: 'POST',
                    credentials: "same-origin", // 쿠키와 세션을 공유하기 위해 필요
                    body: formData
                })
                .then(response => {
                    return response.text();
                })
                .then(result => {
                    console.log("result: " + result);
    
                    if ((result !== null) && (result == "")) {
    
                        window.location.href = "/trading/detail.do?tradingIdx=".concat(tradingIdx);
    
                    } else {
                        alertFunction(result, '거래 상태 수정 실패', 'warning');
                    }
                })
                .catch(error => {
                    alertFunction('통신 에러 발생', '거래 상태 수정 실패', 'error');
                });
            }
        });
    }
    
}

function makeChatRoom(tradingIdx, sessionMemberIdx, sellerName) {
    if(sessionMemberIdx == '') {
        alertFunction(('로그인 후에 '.concat(sellerName) + '님과 채팅할 수 있어요.'), '로그인이 필요해요', 'info');
        return;
    }

	var formData = new FormData();
	formData.append("tradingIdx", tradingIdx);
	formData.append("sessionMemberIdx", sessionMemberIdx);

	// 데이터 보내기
	fetch('http://localhost/chat/makeChatRoom.do', {
		method: 'POST',
		body: formData,
		redirect: 'manual'
	})
	.then(response => {
		
		return response.text();
	})
	.then(result => {
		if (result === "") {
			window.location.href = "/trading/detail.do" + "?tradingIdx=" + tradingIdx + '&chatDrawerOn=true';
		} else {
			alertFunction(result, 'warning', 'warning');
		}
	})
	.catch(error => {
		alertFunction('서버가 응답하지 않습니다. 잠시 후 다시 시도해주세요.', 'error', 'error');
	});
}
