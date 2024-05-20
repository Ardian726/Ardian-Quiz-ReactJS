import React from "react"

class Header extends React.Component {
    constructor() {
      super();
      // membuat objek state
      this.state = {
        title: "Belajar Reactjs",
        subTitle: "Panduan step-by-step Reactjs untuk pemula"
      };
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.title}</h1>
          <h2>{this.state.subTitle}</h2>
        </div>
      );
    }
  }

  export default Header;
  
  // render komponen ke RealDOM
//   ReactDOM.render(<Header />, document.getElementById("root"));