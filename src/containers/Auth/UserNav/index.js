/**
  * The user navigation component for easy access of login/logout and profile-settings
  * @namespace UserNav
  */

import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../ducks/selectors';

import NavBar from './NavBar';
import NavLink from './NavLink';


const UserNav = props => {
  return (
    <NavBar>
      {
        props.isLoggedIn
          ? (
            <div>
              <NavLink to="/profile" >
                Profile
              </NavLink>
              <NavLink to="/logout" >
                Logout
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink to="/login" >
                Login
              </NavLink>
              <NavLink to="/register" >
                Register
              </NavLink>
            </div>
          )
      }
    </NavBar>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: selectors.getLoggedIn(state),
  };
};

export default connect(mapStateToProps, null)(UserNav);
