import React from 'react'
import './footer_estilos.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Binnie. Todos los derechos reservados.</p>
      <p>Desarrollado por Ximena Fernanda Ceballos Islas</p>
    </div>
  </footer>
  )
}

export default Footer
