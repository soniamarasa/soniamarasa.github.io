const theme = document.querySelector('.themeSelect');
const body = document.querySelector('body');
const header = document.querySelector('#header');
const buttonMenu = document.querySelector('.dropdown-trigger');
const dropdownMenu = document.querySelector('#menudropdown');
const ano = document.querySelector('#ano');
const ageSpan = document.querySelector('.age');
const aboutme = document.querySelector('#aboutme-menu');

let menuIsOpened = false;

if (localStorage.getItem('currentTheme')) {
  body.className = localStorage.getItem('currentTheme');
  console.log(body.className);
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
  // buttonMenu.addEventListener('click', () => {
  //   const dropdownContent = document.createElement('ul');
  //   dropdownContent.className = 'dropdown-links';

  //   if (!menuIsOpened) {
  //     dropdownContent.innerHTML =
  //       '<li><a href="/home.html" aria-selected="true">INÍCIO</a></li>' +
  //       '<li><a href="/information.html">INFORMAÇÕES</a></li>' +
  //       '<li><a href="/contact.html">CONTATO</a></li>' +
  //       '<li><a href="/achievements.html">CONQUISTAS</a></li>' +
  //       '<li><a href="/projects.html">PROJETOS</a></li>';
  //     (' <li><a href="/aboutme.html">SOBRE MIM</a></li>');
  //     dropdownMenu.appendChild(dropdownContent);
  //     menuIsOpened = true;
  //   } else {
  //     const elementrem = document.querySelector('.dropdown-links');
  //     dropdownMenu.className = 'menuhide';
  //     dropdownMenu.removeChild(elementrem);
  //     menuIsOpened = false;
  //   }
  // });

  buttonMenu.addEventListener('click', () => {
    $('#menudropdown').slideToggle(500);
  });

  window.onresize = function () {
    $('#menudropdown').hide();
  };

  $(document).ready(function () {
    $('.materialboxed').materialbox();
  });

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
