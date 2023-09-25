import "./App.scss";
import React from "react";
import { Header } from "./Components/Header";
import { Experience } from "./Components/Experience";
import { Technologies } from "./Components/Technologies";
import { Hobbies } from "./Components/Hobbies";
import { jobs, language, education, hobbies } from "./Data";
import "./Theme.scss";

export class CV extends React.Component {
  render() {
    return (
      <div className="CV">
        <Header />
        <div className="content">
          <div className="left-content">
            <h1 className="workexp">WORK EXPERIENCE</h1>
            {jobs.map((x) => (
              <Experience jobInfo={x} />
            ))}
          </div>
          <div className="right-content">
            <h1 className="workexp">TECHNICAL SKILLS</h1>
            {language.map((x) => (
              <Technologies language={x} />
            ))}
            <br></br>
            <h1 className="workexp">EDUCATION</h1>

            {education.map((x) => (
              <Experience jobInfo={x} />
            ))}

            <h1 className="workexp">HOBBIES</h1>
            {hobbies.map((x) => (
              <Hobbies title={x} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
