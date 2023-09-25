import React from "react";
import "./Hobbies.scss";

export class Hobbies extends React.Component {
  render() {
    return <span className="hobbies">{this.props.title}</span>;
  }
}
