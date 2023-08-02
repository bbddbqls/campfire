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
    let formData = new FormData(document.getElementById('myForm'));

    for (let i = 0; i < photos.length; i++) {
        formData.append("photoList" + i + "", photos[i]);
    }
    let photoListLength = photos.length;
    formData.append("photoListLength", photoListLength);

    console.log(selectedPhotos.length);
    // FormData에 선택한 사진들을 추가
    // for (let i = 0; i < selectedPhotos.length; i++) {
    //     const dataURL = selectedPhotos[i].src;
    //     const base64 = dataURL.split(',')[1]; // "data:image/png;base64," 부분 제거
    //     const byteCharacters = atob(base64);
    //     const byteNumbers = new Array(byteCharacters.length);
    //     for (let j = 0; j < byteCharacters.length; j++) {
    //         byteNumbers[j] = byteCharacters.charCodeAt(j);
    //     }
    //     const byteArray = new Uint8Array(byteNumbers);
    //     const blob = new Blob([byteArray], { type: "image/png" }); // 이미지 타입에 맞게 변경

    //     formData.append("photos", blob);

    // }
    for (const [key, value] of formData.entries()) {
        console.log(key, value);
    }
    // for (const [photos, value] of formData.entries()) {
    //     console.log(photos, value);
    // }
    // 여기에서 formData를 서버로 전송하면 됩니다.
    // AJAX를 사용하거나 form을 제출하는 방법 등을 이용할 수 있습니다.
    // 예시: 
    // fetch("/upload", {
    //     method: "POST",
    //     body: formData
    // }).then(response => {
    //     // 서버 응답 처리
    // }).catch(error => {
    //     // 에러 처리
    // });


    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'your_server_url'); // 서버 URL 입력
    xhr.onload = function () {
        if (xhr.status === 200) {
            // 서버 응답 처리
            console.log(xhr.responseText);
        } else {
            // 에러 처리
            console.error('Error:', xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error('Request failed');
    };
    xhr.send(formData);
}


