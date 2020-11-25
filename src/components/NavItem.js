import { Link } from "react-router-dom";
import React, { Component } from "react";

class NavItem extends Component {
  render() {
    return (
      <li>
        <Link
          to={this.props.toLink}
          onClick={this.props.activec.bind(this, this.props.item)}
        >
          {this.props.item}
        </Link>
      </li>
    );
  }
}

export default NavItem;
