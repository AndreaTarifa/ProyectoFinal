// Valor inicial del índice
var slideIndex = 1;

/* Evento añadido al cargar la página para ejecutar el método de pasar la imagenes del carrousel 
y hacer que se ejecute cada tres segundos la función de pasar la imagen */
window.addEventListener("load", () => {
  showSlides(slideIndex);

  setInterval(function () {
    plusSlides(1);
  }, 3000);
});

// Función para sumar o restar un índice al carrousel y así ir hacia delante o hacia atrás
function plusSlides(n) {
  showSlides((slideIndex += n));
}

/* Función que dado un índice va pasando de manera automática los slides del carrousel 
mostrando el siguiente y ocultando el anterior */
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
