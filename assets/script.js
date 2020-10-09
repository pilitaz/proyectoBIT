
const buscaTuMascota = document.querySelector('#buscaTuMascota');
const reportaUnaMascota = document.querySelector('#reportaUnaMascota');
const casosFelices = document.querySelector('#casosFelices');
const logoPrincipal = document.querySelector('#logoPrincipal');
const contenidoIframe = document.querySelector('#contenidoIframe');
const iconIngresar = document.querySelector('#iconIngresar');
const iconUsuario = document.querySelector('#iconUsuario');

window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
  let heightOriginal = window.innerHeight;
  let heightIframe = heightOriginal - 275;
  contenidoIframe.setAttribute('style', 'height:' + heightIframe + 'px');
}

logoPrincipal.addEventListener("click", function (event) {
  cambiarSRCIframe("contenidoInicial")
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

iconIngresar.addEventListener("click", function (event) {
  debugger
  cambiarSRCIframe("ingresoUsuario");
}, true);

iconUsuario.addEventListener("click", function (event) {
  debugger
  cambiarSRCIframe("ingresoUsuario")
}, true);

function cambiarSRCIframe(src) {
  document.getElementById("contenidoIframe").src = "html/" + src + ".html";
}

const eventResize = new Event('resize');
window.dispatchEvent(eventResize);