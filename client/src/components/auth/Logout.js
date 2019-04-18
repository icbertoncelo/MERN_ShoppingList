import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import { NavLink } from "reactstrap";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };
  render() {
    return (
      <Fragment>
        <NavLink onClick={this.props.logout} href="#">
          Logout
        </NavLink>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
