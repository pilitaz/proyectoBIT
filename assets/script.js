
const buscaTuMascota = document.querySelector('#buscaTuMascota');
const reportaUnaMascota = document.querySelector('#reportaUnaMascota');
const casosFelices = document.querySelector('#casosFelices');
const logoPrincipal = document.querySelector('#logoPrincipal');
const contenidoIframe = document.querySelector('#contenidoIframe');
const btnIngreso = document.querySelector('#btnIngreso');
const btnRegistro = document.querySelector('#btnRegistro');
const iconlogin = document.querySelector('#iconlogin');
const iconRegistro = document.querySelector('#iconRegistro');
const txtRegistrate = document.querySelector('#txtRegistrate');
const txtlogin = document.querySelector('#txtlogin');

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

btnIngreso.addEventListener("click", function (event) {
  cambiarIconos("ingreso")
}, true);

btnRegistro.addEventListener("click", function (event) {
  cambiarIconos("ingreso")
}, true);

function cambiarSRCIframe(src) {
  document.getElementById("contenidoIframe").src = "html/" + src + ".html";
}

function cambiarIconos(origen) {
  if (origen == "ingreso") {
    $('#basicExampleModal').modal('hide');
    $('#basicExampleModal2').modal('hide');
    iconlogin.setAttribute('class', 'fas fa-sign-out-alt icono-usuario text-color-3 text-decoration-none');
    iconRegistro.setAttribute('class', 'fas fa-user icono-usuario text-color-3 text-decoration-none');
    txtlogin.innerHTML = "Salir";
    txtRegistrate.innerHTML = "Usuario";
  } else {
    $('#basicExampleModal').modal('hide');
    $('#basicExampleModal2').modal('hide');
    iconlogin.setAttribute('class', 'fas fa-sign-in-alt icono-usuario text-color-3 text-decoration-none');
    iconRegistro.setAttribute('class', 'fas fa-user-plus icono-usuario text-color-3 text-decoration-none');
    txtRegistrate.innerHTML = "Ingresa";
    txtlogin.innerHTML = "Registrate";
  }
}

const eventResize = new Event('resize');
window.dispatchEvent(eventResize);