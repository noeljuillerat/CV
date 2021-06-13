import React from "react";
import Navigation from "../components/Navigation";

const home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Noël Juillerat</h1>
          <h2>Développeur Web</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
