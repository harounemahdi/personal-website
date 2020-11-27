import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          href="https://github.com/harounemahdi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon class="icon" icon={faGithub} />
        </a>
        <a
          href="https://www.facebook.com/haroune.mahdi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon class="icon" icon={faFacebookF} />
        </a>
        <a
          href="https://www.linkedin.com/in/haroune-mahdi-655740105/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon class="icon" icon={faLinkedinIn} />
        </a>
      </div>
    );
  }
}

export default Social;
