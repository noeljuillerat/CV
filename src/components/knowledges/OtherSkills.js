import React from "react";

const OtherSkills = () => {
  return (
    <div className="otherSkills">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          <li>
            <i className="fas fa-check-square"></i> Allemand
          </li>
          <li>
            <i className="fas fa-check-square"></i> Méthodes Agiles (SCRUM)
          </li>
          {/* <li>
            <i className="fas fa-check-square">Méthodes Agiles</i>
          </li> */}
        </ul>
        <ul>
          <li>
            <i className="fas fa-check-square"></i> Anglais
          </li>
          <li>
            <i className="fas fa-check-square"></i> Windev
          </li>
          {/* <li>
            <i className="fas fa-check-square"></i>lorem
          </li>
          <li>
            <i className="fas fa-check-square"></i>lorem
          </li> */}
          {/* <li>
            <i className="fas fa-check-square">lorem</i>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
