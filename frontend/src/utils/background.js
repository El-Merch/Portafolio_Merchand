//FUNCIONAMIENTO CURSOR
import $ from 'jquery';

const cursor = $("#cursor");

$(document).mousemove(function(e) {
  // update cursor position object
  var cursorPos = {
    x: e.pageX,
    y: e.pageY
  };

  // make cursor follow
  cursor.css({
    top: (e.pageY - cursor.height() / 2) + "px",
    left: (e.pageX - cursor.width() / 2) + "px"
  });
});



$('.responsive-image, .watermark, .contenedor_logo, #nav_futurista, #resalte').hover(
  function() {
    // Función que se ejecuta cuando el cursor entra en el elemento
    $('#cursor').addClass('cursor-hover-effect');
  }, 
  function() {
    // Función que se ejecuta cuando el cursor sale del elemento
    $('#cursor').removeClass('cursor-hover-effect');
  }
);

$('.watermark').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000, 'easeInOutQuint');  // Usando 'easeInOutQuint' para una transición más suave
});



/*SCRIPT BOLITAS*/

// Some random colors
const colors = ["#630400", "#002E63", "#0052B0", "#006335", "#633500", "#B05E00"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

//FUNCION PARA LA NAV BAR

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const currentActive = document.querySelector('.nav-link.active');
    if (currentActive) {
      currentActive.classList.remove('active');
    }
    this.classList.add('active');

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// NAV BAR CON TITULO

$(window).on('scroll', function() {
  var scrollPosition = $(window).scrollTop();
  $('.nav-link').each(function() {
    var refElement = $($(this).attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
      $('#nav_text').text($(this).attr("id").replace('link_inicio', 'Inicio').replace('link_sobre_mi', 'Sobre Mi').replace('link_aptitudes', 'Aptitudes').replace('link_proyectos', 'Proyectos').replace('link_redes','Redes'));  // Cambia el texto basado en el id del enlace
    }
  });
});