import './CSS/navbar.css'


function App() {
  return (

    <div id="contenedor_main">
      
      {/* Header */}
      <header id="header">
        <nav className="nav-links">
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#abilities">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>


      <section id='home' className='titulos_secciones'>
        Seccion Inicio
      </section>

      <section id='about' className='titulos_secciones'>
        Seccion Sobre mi
      </section>
      
      <section id='abilities' className='titulos_secciones'>
        Seccion Habilidades
      </section>

      <section id='contact' className='titulos_secciones'>
        Seccion Contacto
      </section>
    </div>


  )
}

export default App
