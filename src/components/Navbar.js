import React, { Component } from "react";
import NavItem from "./NavItem";
import {
  faHome,
  faAddressCard,
  faGraduationCap,
  faToolbox,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NavItemActive: "",
    };
  }

  activeItem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }

    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };

  render() {
    return (
      <nav>
        <ul>
          <NavItem
            icon={faHome}
            item="Home"
            tolink="/"
            activec={this.activeItem}
          ></NavItem>
          <NavItem
            icon={faAddressCard}
            item="About"
            tolink="/about"
            activec={this.activeItem}
          ></NavItem>
          <NavItem
            icon={faGraduationCap}
            item="Education"
            tolink="/education"
            activec={this.activeItem}
          ></NavItem>
          <NavItem
            icon={faToolbox}
            item="Skills"
            tolink="/skills"
            activec={this.activeItem}
          ></NavItem>
          <NavItem
            icon={faEnvelope}
            item="Contact"
            tolink="/contact"
            activec={this.activeItem}
          ></NavItem>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
