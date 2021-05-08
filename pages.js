const header = document.querySelector('#header');
const buttonMenu = document.querySelector('.dropdown-trigger');
const dropdownMenu = document.querySelector('#menudropdown');
const theme = document.querySelector('.themeSelect');
const body = document.querySelector('body');
const ano = document.querySelector('#ano');
const ageSpan = document.querySelector('#age');
let menuIsOpened = false;

if (localStorage.getItem('currentTheme')) {
  body.className = localStorage.getItem('currentTheme');
} else {
  localStorage.setItem('currentTheme', 'light');
  body.className = localStorage.getItem('currentTheme');
}

icon();

function icon() {
  if (body.className === 'dark') {
    theme.textContent = 'brightness_5';
  } else {
    theme.textContent = 'brightness_2';
  }
}

header.addEventListener('click', () => {
  window.location.href = '/home.html';
  console.log('oi');
});

window.addEventListener('load', () => {
  theme.addEventListener('click', () => {
    if (body.className === 'dark') {
      localStorage.setItem('currentTheme', 'light');
    } else {
      localStorage.setItem('currentTheme', 'dark');
    }
    body.className = localStorage.getItem('currentTheme');
    icon();
  });

  buttonMenu.addEventListener('click', () => {
    const dropdownContent = document.createElement('ul');
    dropdownContent.className = 'dropdown-links';
    if (!menuIsOpened) {
      dropdownContent.innerHTML =
        '<li><a href="/home.html" aria-selected="true">INÍCIO</a></li>' +
        '<li><a href="/information.html">INFORMAÇÕES</a></li>' +
        '<li><a href="/contact.html">CONTATO</a></li>' +
        '<li><a href="/achievements.html">CONQUISTAS</a></li>' +
        '<li><a href="/projects.html">PROJETOS</a></li>'
       ' <li><a href="/aboutme.html">SOBRE MIM</a></li>';
      dropdownMenu.appendChild(dropdownContent);
      menuIsOpened = true;
    } else {
      const elementrem = document.querySelector('.dropdown-links');
      dropdownMenu.removeChild(elementrem);
      menuIsOpened = false;
    }
  });

  let birth = new Date(1994, 07, 18);
  let data = new Date();
  let year = data.getFullYear();
  ano.textContent = year;

  let dif = data.getTime() - birth.getTime();
  let age = Math.trunc(dif / 31556900000);

  if (!!ageSpan) {
    ageSpan.textContent = age;
  }
});
