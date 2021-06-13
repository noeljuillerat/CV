import React, { Component } from "react";
import ProgressBar from "./ProgressBar";
class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.5 },
      { id: 2, value: "SQL", xp: 1 },
      { id: 3, value: "PHP", xp: 0.3 },
      { id: 4, value: "Wlangage", xp: 1 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.5 },
      { id: 2, value: "Bootstrap", xp: 0.2 },
      { id: 3, value: "Sass", xp: 0.1 },
      { id: 4, value: "Symfony", xp: 0.5 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworkDisplay"
          title="frameworks & librairies"
        />
      </div>
    );
  }
}

export default Languages;
