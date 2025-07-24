import '../CSS/Home/index.css'
import '../CSS/cursor.css'

function Home() {
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
          
          <div id='texto_subtitulo'>
            
            <p className='subtitulo-desktop'>
              <span className='animacion-datos'>Ingeniero en Datos</span> | 
              <span className='animacion-web'>Desarrollador Web</span> | 
              <span className='animacion-software'>Desarrollador de Software</span>
            </p>  
                      
            <div className='subtitulo-mobile'>
              <p>Ingeniero en Datos</p>
              <p>Desarrollador Web</p>
              <p>Desarrollador de Software</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;