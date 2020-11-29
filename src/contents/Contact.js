import React, { Component } from "react";

import Social from "../components/Social";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me!</h1>
        <h3>Email: mahdiharoune@gmail.com</h3>
        <div className="contact-social">
          <Social />
        </div>
      </div>
    );
  }
}

export default Contact;
