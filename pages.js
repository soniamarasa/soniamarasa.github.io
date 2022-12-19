const theme = document.querySelector('.themeSelect');
const body = document.querySelector('body');
const header = document.querySelector('#header');
const buttonMenu = document.querySelector('.dropdown-trigger');
const dropdownMenu = document.querySelector('#menudropdown');
const ano = document.querySelector('#ano');
const ageSpan = document.querySelector('.age');
const aboutme = document.querySelector('#aboutme-menu');

let menuIsOpened = false;

$(document).ready(function () {
  $('.tooltipped').tooltip();
});

$(document).ready(function () {
  $('.materialboxed').materialbox();
});

$('.dropdown-trigger').dropdown();

if (localStorage.getItem('currentTheme')) {
  body.className = localStorage.getItem('currentTheme');
} else {
  localStorage.setItem('currentTheme', 'light');
  body.className = localStorage.getItem('currentTheme');
}

header.addEventListener('click', () => {
  window.location.href = '/home';
});

window.addEventListener('load', () => {
  function icon() {
    if (body.className === 'dark') {
      theme.textContent = 'brightness_5';
    } else {
      theme.textContent = 'brightness_2';
    }
  }

  icon();

  theme.addEventListener('click', () => {
    if (body.className === 'dark') {
      localStorage.setItem('currentTheme', 'light');
    } else {
      localStorage.setItem('currentTheme', 'dark');
    }
    body.className = localStorage.getItem('currentTheme');
    icon();
  });

  for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
      document.links[i].className = 'active';
    }
  }

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
  });

  let data = new Date();
  const birth = new Date(1994, 07, 18);
  const year = data.getFullYear();

  ano.textContent = year;

  const dif = data.getTime() - birth.getTime();
  const age = Math.trunc(dif / 31556900000);

  if (!!ageSpan) {
    ageSpan.textContent = age;
  }

  aboutme.textContent =
    'Sou formada em engenharia civil e atualmente estudo programação web. Decidi me especializar em uma nova área por interesse e busca de conhecimento, contribuindo cada vez mais para o meu desenvolvimento profissional.';
});
