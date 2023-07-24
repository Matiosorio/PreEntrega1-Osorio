import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contacto</h3>
            <p>Email: distrimaxlimpieza@gmail.com</p>
            <p>Teléfono: 4521-8005</p>
            <p>Whatsapp: 11-3111-1298</p>
          </div>
          <div className="col-md-6">
            <h3>Seguinos</h3>
            <div className="redes-sociales">
              <a href="https://www.facebook.com/distrimaxvillaurquiza" target="_blank">
              <img src="../img/icono-facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/distrimaxlimpieza/?igshid=1njyyrohdoimc" target="_blank">
              <img src="../img/icono-instagram.png" alt="Instragram" />
              </a>
            </div>
          </div>
        </div>
        <div className="legales">
          <p>© 2023 | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

