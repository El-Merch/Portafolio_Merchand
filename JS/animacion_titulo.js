document.addEventListener("DOMContentLoaded", function() {
  const logo = document.querySelector('.contenedor_logo img');
  const video = document.querySelector('.video_intro');
  const scrollThreshold = 50; // Cambia este valor según la cantidad de scroll deseada
  let isScrolled = false;

  window.addEventListener('scroll', function() {
      if (!isScrolled && window.scrollY > scrollThreshold) {
          isScrolled = true;
          video.style.transform = "rotate(-15deg)";
          logo.style.filter = "invert(100%)";
      } else if (isScrolled && window.scrollY <= scrollThreshold) {
          isScrolled = false;
          logo.style.filter = "invert(0%)";
          video.style.transform = "rotate(0deg)";
      }
  });
});
