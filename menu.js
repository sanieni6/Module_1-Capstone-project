const openBtn = document.querySelector('#open-button');
const closeBtn = document.querySelector('#close-button');
const bar = document.querySelector('.nav-bar');
const barElements = document.querySelectorAll('.nav-links');
const imageClose = document.querySelector('#close');
const aboutButton = document.querySelector('.display-about');
const programSection = document.querySelector('#program');
const artistSection = document.querySelector('#artists');
const aboutSection = document.querySelector('#about');
const home = document.querySelector('.home-page');
const partners = document.querySelector('#partners');
const footer = document.querySelector('#footer');
const titleFooter = document.querySelector('.title-footer');
const descriptionFooter = document.querySelector('.description-footer');

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
  bar.classList.remove('bar-styles');
}

function displayAbout() {
  home.style.display = 'none';
  programSection.style.display = 'none';
  artistSection.style.display = 'none';
  aboutSection.classList.add('state-show');
  bar.classList.add('margin-header');
  footer.classList.add('footer-color');
  partners.classList.add('partner-state');
  titleFooter.classList.add('footer-color-text');
  descriptionFooter.classList.add('footer-color-text');
}

barElements.forEach((element) => element.addEventListener('click', close));
openBtn.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', close);
aboutButton.addEventListener('click', displayAbout);
