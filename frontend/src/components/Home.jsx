import '../CSS/Home/index.css'

function Home() {
  return (
    <section id='home' className='titulos_secciones'>
      <div id='contenedor_pantalla_home'>
        
        <div id='contenedor_texto_nombre'>
          <texto_main>Leonardo Gallegos</texto_main>
        </div>

        <div id='contenedor_linea_divisora'>
          <div className='linea_divisora'></div>
        </div>

        <div id='contenedor_texto_subtitulo'>
          
          <div id='texto_subtitulo'>
            
            <p className='subtitulo-desktop'>Ingeniero en Datos | Desarrollador Web | Desarrollador de Software</p>
            
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