const comoFunciona = document.querySelector('#comoFunciona');
const buscaTuMascota = document.querySelector('#buscaTuMascota');
const reportaUnaMascota = document.querySelector('#reportaUnaMascota');
const casosFelices = document.querySelector('#casosFelices');
const sobreNosotros = document.querySelector('#sobreNosotros');
const contenidoIframe = document.querySelector('#contenidoIframe');

window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
  let heightOriginal = window.innerHeight;
  let heightIframe = heightOriginal - 265;
  contenidoIframe.setAttribute('style', 'height:' + heightIframe + 'px');
}

comoFunciona.addEventListener("click", function (event) {
  cambiarSRCIframe("comoFunciona");
}, true);

buscaTuMascota.addEventListener("click", function (event) {
  cambiarSRCIframe("lista")
}, true);

reportaUnaMascota.addEventListener("click", function (event) {
  cambiarSRCIframe("formularioReporte");
}, true);

casosFelices.addEventListener("click", function (event) {
  cambiarSRCIframe("casosFelices")
}, true);

sobreNosotros.addEventListener("click", function (event) {
  cambiarSRCIframe("sobreNosotros");
}, true);

function cambiarSRCIframe(src) {
  document.getElementById("contenidoIframe").src = "html/" + src + ".html";
}

reportWindowSize();