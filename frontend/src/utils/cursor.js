// FUNCIONAMIENTO CURSOR DIRECTO

import $ from 'jquery';

$(document).ready(function() {
  const cursor = $("#cursor");

  // Hacer visible el cursor cuando se mueve el mouse
  $(document).mousemove(function(e) {
    // Agregar clase visible para que aparezca
    cursor.addClass('visible');
    
    // Actualizar posición del cursor directamente
    cursor.css({
      top: e.pageY + "px",
      left: e.pageX + "px"
    });
  });

  // Ocultar cursor cuando el mouse sale de la ventana
  $(document).mouseleave(function() {
    cursor.removeClass('visible');
  });

  // Efectos hover para elementos interactivos
  $('a, button, .nav-icon, texto_main, #select_csv').hover(
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