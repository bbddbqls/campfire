const textarea = document.getElementById('editorTxt');

function resizeTextarea() {
    textarea.style.height = 'auto'; // 높이를 초기화
    textarea.style.height = textarea.scrollHeight + 'px'; // 내용에 맞게 높이 조절
}

textarea.addEventListener('input', resizeTextarea);
// 페이지가 로드되면 textarea의 높이를 조절하기 위해 한 번 호출
resizeTextarea();