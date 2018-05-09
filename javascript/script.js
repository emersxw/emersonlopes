console.log('hello world!');

const toogleMenu = document.querySelector('.navbar--menu');
const navbarLeft = document.querySelector('.navbar--left');


toogleMenu.onclick = () => {
  if (navbarLeft.style.display === 'flex') {
    navbarLeft.style.display = 'none';
  } else {
    navbarLeft.style.display = 'flex';
  }
};
