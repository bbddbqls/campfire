const div1Elements = document.querySelectorAll('.div1');
div1Elements.forEach(div1 => {
    const img = div1.querySelector('img');

    img.addEventListener('click', function () {
        div1.classList.toggle('selected'); // 클래스를 토글하여 테두리 보이기/숨기기
        const checkbox = div1.querySelector('input[type="checkbox"]');

    });
});
function toggleCheckbox(divElement) {
    divElement.classList.toggle('selected');
    const checkbox = divElement.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
}
const amenityBoxElement = document.getElementById('amenity');
const tagBoxElement1 = document.getElementById('tag');
// const button = document.createElement("button");
// button.setAttribute("class", "button fit small amenity-btn");
// button.setAttribute("onclick", "showAmenity()")
function showSelectedAmenity() {
    const checkboxes = document.getElementsByName("amenityItem");
    const selected = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }

    const selectedAmenityParagraph = document.getElementById("selectedAmenity");
    selectedAmenityParagraph.textContent = selected.join(", ");
    // selectedAmenityParagraph.appendChild(button);
    selectedAmenityParagraph.style,display='block';

    if (selectedAmenityParagraph.style,display === 'none') {
        selectedAmenityParagraph.style,display='block';
    }else{
        selectedAmenityParagraph.style,display= 'none';
    }

    if (amenityBoxElement.style.display === 'none') {
        amenityBoxElement.style.display = 'block';
    }else{
        amenityBoxElement.style.display = 'none';
    }
}



function showAmenity(){
    if (amenityBoxElement.style.display === 'block') {
        amenityBoxElement.style.display = 'none';
    }else{
        amenityBoxElement.style.display = 'block';
    }

    if (tagBoxElement1.style.display === 'block') {
        tagBoxElement1.style.display = 'none';
    }
}
function closeSelectedAmenity(){
    if (amenityBoxElement.style.display === 'block') {
        amenityBoxElement.style.display = 'none';
    }else{
        amenityBoxElement.style.display = 'block';
    }
}