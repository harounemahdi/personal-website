import React, { Component } from "react";

import headshot from "../img/JKM_7013.jpg";
import ReactTypingEffect from "react-typing-effect";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <div class="pic-bg">
          <img
            src={headshot}
            className="profilepic"
            alt="Haroune's headshot"
          ></img>
        </div>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Haroune Mahdi",
            "Software Engineer, Tech Enthusiast, Tinkerer",
          ]}
          speed={100}
          eraseDelay={700}
        />

        <Social />
      </div>
    );
  }
}

export default Home;
