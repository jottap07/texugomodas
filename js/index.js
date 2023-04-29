const menu = document.querySelector('.menu nav');
const menuBtn = document.querySelector('.menu-btn');
const menuCloser = document.querySelector('#menuCloser');
const iframe = document.querySelector('iframe');
let menuShown = false;

iframe.addEventListener('load', () => {
  if (iframe.contentDocument) {
    document.title = `${iframe.contentDocument.title} | Texugo Modas`;
  }
});

document.querySelectorAll('.menu a').forEach(a => {
  a.addEventListener('click', closeMenu);
});

function toggleMenu() {
  if (menuShown) {
    menuBtn.style.background = '';
    menuBtn.style.color = '';
    menu.style.display = 'none';
    menuCloser.style.display = 'none';
  } else {
    menuBtn.style.background = 'gold';
    menuBtn.style.color = 'white';
    menu.style.display = 'flex';
    menuCloser.style.display = 'block';
  }

  menu.animate({
    opacity: menuShown ? [1, 0] : [0, 1]
  }, {
    duration: 250,
    fill: 'forwards',
    easing: 'ease'
  });

  menuShown = !menuShown;
}

function closeMenu() {
  if (menuShown) {
    menuCloser.style.display = 'none';
    toggleMenu();
  }
}
