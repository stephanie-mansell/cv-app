import React from "react";
import "./Technologies.scss";

export class Technologies extends React.Component {
  render() {
    const language = this.props.language;

    const innerStyle = { width: `${language.level}%`, height: "100%" };

    return (
      <div className="outer-style">
        <div className="inner-style" style={innerStyle}>
          <span className="language-text">{language.name}</span>
        </div>
      </div>
    );
  }
}
