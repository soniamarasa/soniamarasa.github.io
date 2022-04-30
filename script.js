let bodyBack = null;
let photo = null;
let rodape = null;

window.addEventListener('load', () => {
photo = document.querySelector('#foto');
photo.addEventListener('click', () => {
  window.location.href = '';
})

  changeBackground();
});

function changeBackground() {
  let date = new Date();
  let hours = date.getHours();
  

  bodyBack = document.querySelector('body');
  rodape = document.querySelector('#rodape');

  // if (4 <= hours && hours < 13) {
  //   bodyBack.id = 'morning';
  //   rodape.textContent = 'Background by Pok Rie';
  // } else if (13 <= hours && hours < 20) {
  //   bodyBack.id = 'afternoon';
  //   rodape.textContent = 'Background by Visually Us';
  // } else {
  //   bodyBack.id = 'night';
  //   rodape.textContent = 'Background by Irina Iriser';
  // }
}
