import { Link } from "react-router-dom";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavItem extends Component {
  render() {
    if (this.props.icon) {
      return (
        <li id={this.props.item}>
          <Link
            to={this.props.tolink}
            onClick={this.props.activec.bind(this, this.props.item)}
            class="navitem"
          >
            <FontAwesomeIcon class="icon" icon={this.props.icon} />
          </Link>
        </li>
      );
    } else {
      return (
        <li id={this.props.item}>
          <Link
            to={this.props.tolink}
            onClick={this.props.activec.bind(this, this.props.item)}
            class="navitem"
          >
            {this.props.item}
          </Link>
        </li>
      );
    }
  }
}

export default NavItem;
