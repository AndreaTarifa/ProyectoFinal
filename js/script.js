/* Evento añadido al cargar la página para ejecutar el método de añadir el año del 
copyright al footer y la función encargada del menú de navegación en versión mobile */
window.addEventListener("load", () => {
  getYearCopy();
  initMobileMenu();
});

// Función que coge el año actual de la fecha y lo pone dentro del elemento con el id "currentYear"
function getYearCopy() {
  const year = new Date().getFullYear();
  document.getElementById("currentYear").textContent = year;
}

/* Función que se encarga de coger todos los elementos del menú mobile y añadir 
un evento de click al botón del menú para ejecutar el método "toggleMenu" */
function initMobileMenu() {
  // Elementos del menú para añadir o quitar clases CSS
  const menu = document.querySelector(".menu-mobile");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  /* Funcion que comprueba si el menú tiene la clase CSS "showMenu", en caso de tenerla 
  se la quita y oculta el icono de cerrado y en caso de no tenerla se la pone */
  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  // Añade el evento de click al botón del menú mobile
  hamburger.addEventListener("click", toggleMenu);
}
