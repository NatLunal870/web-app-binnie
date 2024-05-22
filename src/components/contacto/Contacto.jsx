import React from 'react';
import './contacto_estilo.css';
import face from '../imagenes/face.png'
import x from '../imagenes/x.png'
import insta from '../imagenes/insta.png'

const Contacto = () => {
  return (
    <div className="contacto-layout">
      <div className="contacto-info">
        <h1>Contáctanos</h1>
        <p>
          Si tienes preguntas, inquietudes o necesitas ayuda emocional, estamos aquí para escucharte.
          Usa el formulario a la derecha para contactarnos o consulta nuestros recursos para obtener ayuda adicional.
        </p>
        <div className="contacto-social">
          <h2>Encuéntranos en Redes Sociales</h2>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={face} alt="Facebook" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="Twitter" />
                X
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="contacto-recursos">
          <h2>Recursos para Ayuda en Salud Mental</h2>
          <ul>
            <li><a href="https://www.telefonodelaesperanza.org/" target="_blank" rel="noopener noreferrer">Teléfono de la Esperanza</a></li>
            <li><a href="https://suicidepreventionlifeline.org/" target="_blank" rel="noopener noreferrer">Línea Nacional de Prevención del Suicidio (EE.UU.)</a></li>
            <li><a href="https://www.samaritans.org/" target="_blank" rel="noopener noreferrer">Samaritans (en inglés)</a></li>
          </ul>
        </div>
      </div>

      <div className="contacto-form">
        <h2>Formulario de Contacto</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
