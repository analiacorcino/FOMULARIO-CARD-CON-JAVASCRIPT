/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let form = document.getElementById("formulario");
  form.addEventListener("submit", envioFormulario);

  let numeroTarjeta = document.getElementById("tarjetacredito");

  let cvc = document.getElementById("numerocvc");
  let monto = document.getElementById("numerodemonto");
  let primerNombre = document.getElementById("nombre");
  let segundoNombre = document.getElementById("apellido");
  let city = document.getElementById("cuidad");
  let postal = document.getElementById("codigopostal");
  let mensaje = document.getElementById("mensajedetexto");

  let radios = document.getElementById("radios");
  let radio1 = document.getElementById("radio1");
  let radio2 = document.getElementById("radio2");
  let radio3 = document.getElementById("radio3");
  let radio4 = document.getElementById("radio4");

  function envioFormulario(event) {
    event.preventDefault();

    if (numeroTarjeta.value === "") {
      numeroTarjeta.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      numeroTarjeta.style.background = "white";
    }

    if (cvc.value === "") {
      cvc.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      cvc.style.background = "white";
    }

    if (monto.value === "") {
      monto.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      monto.style.background = "white";
    }

    if (primerNombre.value === "") {
      primerNombre.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      primerNombre.style.background = "white";
    }

    if (segundoNombre.value === "") {
      segundoNombre.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      segundoNombre.style.background = "white";
    }

    if (city.value === "") {
      city.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      city.style.background = "white";
    }

    if (postal.value === "") {
      postal.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      postal.style.background = "white";
    }

    if (mensaje.value === "") {
      mensaje.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      mensaje.style.background = "white";
    }

    if (radio1.checked || radio2.checked || radio3.checked || radio4.checked) {
      tarjeta.style.background = "gray";
    } else {
      radios.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    }
  }
};
