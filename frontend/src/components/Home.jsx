import React, { useEffect } from 'react';

import '../CSS/Home/index.css'
import '../CSS/cursor.css'



function Home() {

    useEffect(() => {
    const texto = document.getElementById('texto_subtitulo');
    const total = texto.children.length;
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % total;
      texto.style.transform = `translateY(-${index * 2.5}rem)`;
    }, 5000); // 5 segundos por texto

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);


  return (
    <section id='home' className='titulos_secciones'>
      <div id='contenedor_pantalla_home'>
        
        <div id='contenedor_texto_nombre'>
          <texto_main id='resalte_titulo'>LEONARDO GALLEGOS</texto_main>
        </div>

        <div id='contenedor_linea_divisora'>
          <div className='linea_divisora'></div>
        </div>

        <div id='contenedor_texto_subtitulo'>
                                  
            <div class='carrusel_subtitulo'>
              <div class="texto_subtitulo" id="texto_subtitulo" >
                <div id='texto_datos'>Ingeniero en Datos</div>
                <div id='texto_software'>Desarrollador de Software</div>
                <div id='texto_web'>Desarrollador Web</div>
              </div>
            </div>

        </div>

      </div>
    </section>
  );
}

export default Home;