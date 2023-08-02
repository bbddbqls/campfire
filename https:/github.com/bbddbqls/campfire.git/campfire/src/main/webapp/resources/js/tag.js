const div2Elements = document.querySelectorAll('.div2');
div2Elements.forEach(div2 => {
    const span = div2.querySelector('span');

    span.addEventListener('click', function () {
        div2.classList.toggle('selected'); // 클래스를 토글하여 테두리 보이기/숨기기
        const checkbox = div2.querySelector('input[type="checkbox"]');

    });
});
function toggleCheckbox(divElement) {
    divElement.classList.toggle('selected');
    const checkbox = divElement.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
}
const tagBoxElement = document.getElementById('tag');

function showSelectedTag() {
    const checkboxes = document.getElementsByName("tagItem");
    const selected = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }

    const selectedTagParagraph = document.getElementById("selectedTag");
    selectedTagParagraph.textContent = selected.join(" ");
    selectedTagParagraph.style,display='block';

    if (selectedTagParagraph.style,display === 'none') {
        selectedTagParagraph.style,display='block';
    }else{
        selectedTagParagraph.style,display= 'none';
    }

    if (tagBoxElement.style.display === 'none') {
        tagBoxElement.style.display = 'block';
    }else{
        tagBoxElement.style.display = 'none';
    }
}



function showTag(){
    if (tagBoxElement.style.display === 'block') {
        tagBoxElement.style.display = 'none';
    }else{
        tagBoxElement.style.display = 'block';
    }
}
function closeSelectedTag(){
    if (tagBoxElement.style.display === 'block') {
        tagBoxElement.style.display = 'none';
    }else{
        tagBoxElement.style.display = 'block';
    }
}
