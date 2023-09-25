import React from "react";
import "./Experience.scss";

export class Experience extends React.Component {
  render() {
    const responsibilities = this.props.jobInfo.responsibilities.map((x) => (
      <li>{x}</li>
    ));

    return (
      <div className="work-exp">
        <h2 className="job-title">{this.props.jobInfo.title}</h2>
        <p className="company">{this.props.jobInfo.company}</p>
        <div className="date-location">
          <span className="date">{this.props.jobInfo.date}</span>
          <span className="location">{this.props.jobInfo.location}</span>
        </div>
        <ul className="responsibilities">{responsibilities}</ul>
        <br></br>
      </div>
    );
  }
}
