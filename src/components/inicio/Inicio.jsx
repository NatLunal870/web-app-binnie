import React from 'react';
import './ini_estilos.css';
import imagen1 from '../imagenes/BINNIE2.png'
import { useNavigate } from 'react-router-dom';


const Inicio = () => {
  const navigate = useNavigate();
    return (
      <div className="welcome-fullscreen">
        <div className="welcome-content">
          <img
            src={imagen1}
            alt="Placeholder"
            className="welcome-image"/>
          <div className="welcome-text">
            <h1>BIENVENIDO A BINNIE</h1>
            <p>
            Bienvenido a Binnie, tu guía hacia una mente más feliz y saludable. 
            Aquí puedes crear tu perfil y compartir tus momentos más significativos. 
            Descubre actividades y ejercicios que te ayudarán a mantener el equilibrio emocional, 
            desde prácticas de respiración hasta ejercicios creativos. Binnie te acompaña en tu 
            viaje hacia el bienestar mental. Únete a nuestra comunidad y encuentra apoyo, inspiración 
            y herramientas para vivir una vida más plena. Estamos emocionados de tenerte con nosotros.
            </p>
            <button className="boton_comenzar" onClick={() => navigate('/sesion')}
            >COMENZAR</button>
          </div>
        </div>
    </div>
  );
};

export default Inicio;



