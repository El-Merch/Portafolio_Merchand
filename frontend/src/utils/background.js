//FUNCIONAMIENTO BACKGROUND
import $ from 'jquery';

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
      duration: (Math.random() + 1) * 5000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
