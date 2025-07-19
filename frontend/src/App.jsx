import './CSS/navbar.css'


function App() {
  return (

    <div id="contenedor_main">
      
      {/* top_navbar */}
      <div class='wrapper'>
        <div class='liquidglass-wrapper dock'>

          <div class='liquidglass-effect'></div>
          <div class='liquidglass-tint'></div>
          <div class='liquidglass-shine'></div>
          <div class='liquidglass-text'>
            <div class='dock'>
              <a href="#home">
                <img src="./src/assets/icons8-home-50.svg" alt="Inicio" className="nav-icon" />
              </a>
              <a href="#about">
                <img src="./src/assets/icons8-contacts-50.svg" alt="Sobre mí" className="nav-icon" />
              </a>
              <a href="#abilities">
                <img src="./src/assets/icons8-folder-50.svg" alt="Proyectos" className="nav-icon" />
              </a>
              <a href="#contact">
                <img src="./src/assets/icons8-info-50.svg" alt="Contacto" className="nav-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Filter para efectos de vidrio */}
      <svg style={{display: "none"}}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />

          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>

          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>

          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

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
