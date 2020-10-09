const divContCasosFelices = document.querySelector('#divContCasosFelices');

window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
  let heightOriginal = window.innerHeight;
  divContCasosFelices.setAttribute('style', 'height:' + heightOriginal + 'px');
}

const eventResize = new Event('resize');
window.dispatchEvent(eventResize);