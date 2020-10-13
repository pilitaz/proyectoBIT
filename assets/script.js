
const buscaTuMascota = document.querySelector('#buscaTuMascota');
const reportaUnaMascota = document.querySelector('#reportaUnaMascota');
const casosFelices = document.querySelector('#casosFelices');
const logoPrincipal = document.querySelector('#logoPrincipal');
const contenidoIframe = document.querySelector('#contenidoIframe');
const btnIngreso = document.querySelector('#btnIngreso');
const btnRegistro = document.querySelector('#btnRegistro');
const divLogin = document.querySelector('#divLogin');;
const divRegistrate = document.querySelector('#divRegistrate');;
const divLogout = document.querySelector('#divLogout');;
const divUsuario = document.querySelector('#divUsuario');;

window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
  let heightOriginal = window.innerHeight;
  let heightIframe = heightOriginal - 229;
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

btnIngreso.addEventListener("click", function (event) {
  cambiarIconos("ingreso")
}, true);

btnRegistro.addEventListener("click", function (event) {
  cambiarIconos("ingreso")
}, true);

divLogout.addEventListener("click", function (event) {
  cambiarIconos("salir")
}, true);

divUsuario.addEventListener("click", function (event) {
  cambiarIconos("salir")
}, true);

function cambiarSRCIframe(src) {
  document.getElementById("contenidoIframe").src = "html/" + src + ".html";
}

function cambiarIconos(origen) {
  if (origen == "ingreso") {
    $('#basicExampleModal').modal('hide');
    $('#basicExampleModal2').modal('hide');
    divLogin.setAttribute('class', 'd-flex flex-column divIconosSup oculto');
    divRegistrate.setAttribute('class', 'd-flex flex-column divIconosSup oculto');
    divLogout.setAttribute('class', 'd-flex flex-column divIconosSup');
    divUsuario.setAttribute('class', 'd-flex flex-column divIconosSup');
  } else {
    divLogout.setAttribute('class', 'd-flex flex-column divIconosSup oculto');
    divUsuario.setAttribute('class', 'd-flex flex-column divIconosSup oculto');
    divLogin.setAttribute('class', 'd-flex flex-column divIconosSup');
    divRegistrate.setAttribute('class', 'd-flex flex-column divIconosSup');
  }
}

const eventResize = new Event('resize');
window.dispatchEvent(eventResize);