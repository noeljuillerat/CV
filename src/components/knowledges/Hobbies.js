import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-pizza-slice"></i>
          <span>Cuisine</span>
        </li>

        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Randonnées</span>
        </li>

        <li className="hobby">
          <i className="fas fa-seedling"></i>
          <span>Jardinage</span>
        </li>

        <li className="hobby">
        <i className="fas fa-book-reader"></i>
          <span>Lecture</span>
        </li>

        <li className="hobby">
          <i className="fas fa-gamepad"></i>
          <span>Jeux</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
