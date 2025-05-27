
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.contenido');
  secciones.forEach(seccion => {
    seccion.classList.remove('mostrar');
  });

  const activa = document.getElementById(id);
  activa.classList.add('mostrar');
}
