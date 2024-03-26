function mostrarImagen(idImagen) {
  var imagen = document.getElementById("imagenMostrada");

  if (idImagen === "imagen1") {
    imagen.src =
      "https://dcdn.mitiendanube.com/stores/001/205/102/products/remera-lisa-fr-rj-11-ef4b6ca4b08c3f434315906905869409-640-0.jpg";
  } else if (idImagen === "imagen2") {
    imagen.src =
      "https://ombudistribuidora.com.ar/wp-content/uploads/2016/03/remera.jpg";
  }
}
