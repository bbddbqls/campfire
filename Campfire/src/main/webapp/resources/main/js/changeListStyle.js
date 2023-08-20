const menuLogo1 = document.getElementById('menu-logo1');
const menuLogo2 = document.getElementById('menu-logo2');

const listStyle1 = document.getElementById('ls1');
const listStyle2 = document.getElementById('ls2');

menuLogo1.addEventListener('click', function() {
    menuLogo1.src = '/resources/images/icon2-select.png';
    menuLogo2.src = '/resources/images/icon1.png';
    listStyle1.style.display = 'block'
    listStyle2.style.display = 'none'

});

menuLogo2.addEventListener('click', function() {
    menuLogo1.src = '/resources/images/icon2.png';
    menuLogo2.src = '/resources/images/icon1-select.png';
    listStyle1.style.display = 'none'
    listStyle2.style.display = 'block'
});