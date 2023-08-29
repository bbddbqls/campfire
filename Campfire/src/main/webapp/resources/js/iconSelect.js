const image1 = document.getElementById('menu-logo1');
const image2 = document.getElementById('menu-logo2');

image1.addEventListener('mouseover', function() {
  this.src = './images/icon2-select.png';
});

image1.addEventListener('mouseout', function() {
  this.src = './images/icon2.png';
});
image2.addEventListener('mouseover', function() {
  this.src = './images/icon1-select.png';
});

image2.addEventListener('mouseout', function() {
  this.src = './images/icon1.png';
});