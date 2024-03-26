function mostrarImagen(idImagen) {
  var imagen = document.getElementById("imagenMostrada");

  if (idImagen === "imagen1") {
    imagen.src = "../images/imagen1-grande.jpg";
  } else if (idImagen === "imagen2") {
    imagen.src = "../images/imagen2-grande.jpg";
  } else if (idImagen === "imagen3") {
    imagen.src = "../images/imagen3-grande.jpg";
  } else if (idImagen === "imagen4") {
    imagen.src = "../images/imagen4-chica.jpg";
  }
}
