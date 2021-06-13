import React, { Component } from "react";
import { portefolioData } from "../../data/portefolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: portefolioData,
    radios: [
      { id: 1, value: "javascript" },
      { id: 2, value: "symfony" },
      { id: 3, value: "react" },
      { id: 4, value: "php" },
    ],
    selectedRadio: "javascript",
  };

  handleRadio = (e) => {
    let radio = e.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;

    return (
      <div className="portefolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>
        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
