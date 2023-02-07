const openBtn = document.querySelector('#open-button');
const closeBtn = document.querySelector('#close-button');
const bar = document.querySelector('.nav-bar');
const barElements = document.querySelectorAll('.nav-links');
const imageClose = document.querySelector('#close');

function displayMenu() {
  closeBtn.style.display = 'block';
  imageClose.style.display = 'block';
  openBtn.style.display = 'none';
  bar.classList.add('display-bar');
  bar.classList.remove('no-bar');
  bar.classList.add('bar-styles');
}

function close() {
  closeBtn.style.display = 'none';
  openBtn.style.display = 'block';
  imageClose.style.display = 'none';
  bar.classList.remove('display-bar');
  bar.classList.add('no-bar');
}

barElements.forEach((element) => element.addEventListener('click', close));
openBtn.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', close);
