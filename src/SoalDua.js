import React, { Component } from "react";

class SoalDua extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    handleClick = () => {
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click Me {this.state.count}
        </button>
      );
    }
  }

export default SoalDua;
