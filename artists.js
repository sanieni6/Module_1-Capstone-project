const title = document.createElement('h2');
title.classList.add('artist-title');
const separator = document.createElement('hr');
separator.classList.add('divider-title');
const mainDiv = document.createElement('div');
mainDiv.classList.add('main-div');
const list = document.createElement('ul');
list.classList.add('artist-list');
const mainContainer = document.querySelector('.artists');
mainContainer.appendChild(title);
mainContainer.appendChild(separator);
mainContainer.appendChild(mainDiv);
mainDiv.appendChild(list);

// javascript object

const artists = [

  {
    item: 0,
    portrait: 'images/linnux.jpg',
    namee: 'Linnux',
    litleDescription: 'Dj/Producer',
    longDescription: 'Linnux is one of the artists with the most impact in Ecuador: DJ, producer who has performed at the best festivals in the country. His shows are characterized by the connection with the public.',
  },

  {
    item: 1,
    portrait: 'images/imperialite.jpg',
    namee: 'Imperialite',
    litleDescription: 'Hardstyle Dj/Producer',
    longDescription: 'Sebastian Reyes, is an Ecuadorian DJ/Producer born in Quito who has started to love the genre at an early age and later started to produce it.',
  },

  {
    item: 2,
    portrait: 'images/feiiVega.jpg',
    namee: 'Feii Vega',
    litleDescription: 'Mexican Dj / Music Producer / Internationalist ',
    longDescription: 'Feii Vega with a solid career, she’s one of the best Djanes in Mexico, impeccable technique, good musical taste, extensive experience in managing the public.',
  },

  {
    item: 3,
    portrait: 'images/d-stroyer.jpg',
    namee: 'D-Stroyer',
    litleDescription: 'Brazilian Hardstyle/Psytrance',
    longDescription: 'D-Stroyer is the musical project of Delano Salviano, the number one hardstyle DJ from Brazil and founder of Hardfall. He started his career in 2013 playing EDM then changed to hardstyle in 2016.',
  },

  {
    item: 4,
    portrait: 'images/xelas.jpg',
    namee: 'Xelas Eduardo',
    litleDescription: 'Dj/Producer',
    longDescription: 'Mexican Dj. In 2018 he signed his first song "In Our Memories" on UpHigh Records label (Greece) which got 6,500,423 Million views on YouTube (Hud2z) and 25,000 on SoundCloud.',
  },

  {
    item: 5,
    portrait: 'images/jeiko.jpg',
    namee: 'Jeiko',
    litleDescription: 'Dj/Artist',
    longDescription: 'From Manta, Ec. Hey I do reggaeton like electronics so just trip or perrea!!!',
  },
];

artists.forEach((Element, id) => {
  const liElement = document.createElement('li');
  liElement.classList.add('element');
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('image-div');
  const backImage = document.createElement('img');
  backImage.classList.add('back-image');
  const images = document.createElement('img');
  images.classList.add('artist-img');
  const artistDiv = document.createElement('div');
  artistDiv.classList.add('artist-div');
  const artistName = document.createElement('h3');
  artistName.classList.add('artist-name');
  const mainDescription = document.createElement('p');
  mainDescription.classList.add('m-description');
  const litleHr = document.createElement('hr');
  litleHr.classList.add('divider-title');
  litleHr.classList.add('divider-artists');
  const secDescription = document.createElement('p');
  secDescription.classList.add('sec-des');
  list.appendChild(liElement);
  liElement.appendChild(imageDiv);
  imageDiv.appendChild(backImage);
  imageDiv.appendChild(images);
  liElement.appendChild(artistDiv);
  artistDiv.appendChild(artistName);
  artistDiv.appendChild(mainDescription);
  artistDiv.appendChild(litleHr);
  artistDiv.appendChild(secDescription);
  artistName.textContent = artists[id].namee;
  backImage.src = 'images/chest1.png';
  images.src = artists[id].portrait;
  mainDescription.textContent = artists[id].litleDescription;
  secDescription.textContent = artists[id].longDescription;
});

title.textContent = 'Artists';
