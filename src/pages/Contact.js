import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li className="fas fa-map-marker-alt"></li>
            <span>Montpellier</span>
            <li className="fas fa-mobile-alt">
              <CopyToClipboard text="0611388241">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Numéro de téléphone copié !");
                  }}
                >
                  06.11.38.82.41
                </span>
              </CopyToClipboard>
            </li>
            <li className="far fa-envelope">
              <CopyToClipboard text="noel.juillerat@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Adresse mail copié !");
                  }}
                >
                  noel.juillerat@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/noel-juillerat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/noeljuillerat?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>

            {/* <a
              href="http://www.google.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>lorem</h4>
              <i className="fab fa-google"></i>
            </a>

            <a
              href="http://www.google.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>lorem</h4>
              <i className="fab fa-google"></i>
            </a> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
