// FUNCIONAMIENTO CURSOR

import $ from 'jquery';

$(document).ready(function() {
  const cursor = $("#cursor");

  // Hacer visible el cursor cuando se mueve el mouse
  $(document).mousemove(function(e) {
    // Agregar clase visible para que aparezca
    cursor.addClass('visible');
    
    // Actualizar posición del cursor
    cursor.css({
      top: (e.pageY - cursor.height() / 2) + "px",
      left: (e.pageX - cursor.width() / 2) + "px"
    });
  });

  // Ocultar cursor cuando el mouse sale de la ventana
  $(document).mouseleave(function() {
    cursor.removeClass('visible');
  });

  // Efectos hover para elementos interactivos
  $('a, button, .nav-icon, texto_main').hover(
    function() {
      cursor.addClass('cursor-hover-effect');
    },
    function() {
      cursor.removeClass('cursor-hover-effect');
    }
  );

  // Ocultar cursor nativo del navegador
  $('*').css('cursor', 'none');
});
