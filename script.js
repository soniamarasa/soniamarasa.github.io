let bodyBack = null;
let photo = null;

window.addEventListener('load', () => {
photo = document.querySelector('#foto');
photo.addEventListener('click', () => {
    console.log("oi");
})

  changeBackground();
});

function changeBackground() {
  let date = new Date();
  let hours = date.getHours();
  
  let x = 10;

  console.log(hours);

  bodyBack = document.querySelector('body');

  if (4 <= hours && hours < 13) {
    bodyBack.id = 'morning';
  } else if (13 <= hours && hours < 20) {
    bodyBack.id = 'afternoon';
  } else {
    bodyBack.id = 'night';
  }
}
