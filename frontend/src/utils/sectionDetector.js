// Función para detectar la sección activa y actualizar la navbar
function initSectionDetector() {
  // Usar un timeout para asegurar que el DOM esté completamente renderizado
  setTimeout(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.dock a[href^="#"]');
    
    if (sections.length === 0 || navLinks.length === 0) {
      console.log('Esperando que las secciones se carguen...');
      // Reintentar en 500ms si no hay secciones disponibles
      setTimeout(initSectionDetector, 500);
      return;
    }
    
    console.log('Secciones encontradas:', Array.from(sections).map(s => s.id));
    
    // Función para obtener el ID de la sección visible
    function getCurrentSection() {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Activar cuando la sección esté en el tercio superior
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          return section.id;
        }
      }
      
      // Si estamos al inicio de la página, retornar 'home'
      if (window.scrollY < 200) {
        return 'home';
      }
      
      return sections[0]?.id || 'home';
    }
    
    // Función para actualizar el estado activo de la navbar
    function updateActiveNavItem() {
      const currentSection = getCurrentSection();
      
      // Remover clase activa de todos los enlaces
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      // Agregar clase activa al enlace correspondiente
      if (currentSection) {
        const activeLink = document.querySelector(`.dock a[href="#${currentSection}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
          console.log('Sección activa:', currentSection);
        }
      }
    }
    
    // Throttle para optimizar el rendimiento del scroll
    let ticking = false;
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateActiveNavItem);
        ticking = true;
        setTimeout(() => { ticking = false; }, 16); // ~60fps
      }
    }
    
    // Escuchar el evento de scroll
    window.addEventListener('scroll', requestTick);
    
    // Llamar una vez al cargar para establecer el estado inicial
    updateActiveNavItem();
    
    // También escuchar clicks en los enlaces para navegación suave
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80; // Offset para la navbar fija
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Actualizar inmediatamente el estado activo
          setTimeout(updateActiveNavItem, 100);
        }
      });
    });
    
    console.log('Detector de secciones inicializado correctamente');
  }, 100);
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSectionDetector);
} else {
  initSectionDetector();
}

// También inicializar cuando la página esté completamente cargada
window.addEventListener('load', initSectionDetector);