import React from "react";

class SoalTiga extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

let chat = (
  <div>
    <SoalTiga content="Ardian Arya Putra" />
  </div>
);

export default SoalTiga;
