import React from "react";
import "./Link.scss";

export class Link extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.link} className="link">
          <span className="material-icons icon">{this.props.icon}</span>
          {this.props.text}
        </a>
      </div>
    );
  }
}
