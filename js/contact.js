window.addEventListener('submit', event => {
  event.preventDefault();
  const loader = document.querySelector('#loader'); 
  loader.style.zIndex = 1;
  loader.animate({
    opacity: [0, 1]
  }, {
    duration: 400,
    fill: 'forwards'
  });

  setTimeout(() => {
    loader.style.display = 'none';
    document.forms[0].style.display = 'none';
    document.querySelector('#message').style.display = 'block';
  }, 2000);
});
