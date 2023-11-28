$(document).ready(function () {
    let numeroMagico;

    $("#comenzarBtn").click(function () {
      numeroMagico = Math.floor(Math.random() * 100) + 1;
      
      $("#comenzarBtn").hide();
      $("#juego").show();
    });

    $("#enviarBtn").click(function () {
      let numeroUsuario = $("#numeroInput").val();
      
      if (numeroUsuario == numeroMagico) {
        alert("¡Felicidades! Adivinaste el número.");
        reiniciarJuego();
      } else if (numeroUsuario < numeroMagico) {
        alert("Intenta con un número mayor.");
      } else {
        alert("Intenta con un número menor.");
      }
    });

    function reiniciarJuego() {
      $("#comenzarBtn").show();
      $("#juego").hide();
      $("#numeroInput").val("");
    }
  });