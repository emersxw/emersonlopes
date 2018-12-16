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


fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lupuselit')
   .then((res) => res.json())
   .then((data) => {
      //Do things
      console.log(data);
      
    }
   )

