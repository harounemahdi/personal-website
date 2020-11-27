import React, { Component } from "react";

import headshot from "../img/JKM_7013.jpg";

class Home extends Component {
  render() {
    return (
      <img src={headshot} className="profilepic" alt="Haroune's headshot"></img>
    );
  }
}

export default Home;
