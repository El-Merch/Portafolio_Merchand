import { useState } from 'react'


const menuItems = [
  { id: 'home', label: 'Inicio'},
  { id: 'about', label: 'Sobre mí'},
  { id: 'abilities', label: 'Proyectos'},
  { id: 'contact', label: 'Contacto'},
]

function App() {
  const [open, setOpen] = useState(false)

  const handleSelect = (id) => {
    setOpen(false)
    
    // Scroll suave hacia la sección seleccionada
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }


  return (
    <div id='contenedor_main'>
      {/* Botón de menú en la parte superior izquierda */}
      <div id='boton_hamburguesa' onClick={() => setOpen(!open)} className={open ? 'active' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú desplegable */}
      {open && (
        <div id='contenedor_navbar'>
          {menuItems.map(item => (
            <div id='texto_navbar' key={item.id} onClick={() => handleSelect(item.id)}>
              {item.label}
            </div>
          ))}
        </div>
      )}

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
