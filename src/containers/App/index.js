/**
  * Main Application component.
  *
  * @namespace App
  */

import React, { Component, PropTypes } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Wrapper from './Wrapper';
import Content from './Content';
import HomePage from 'containers/HomePage';
import Impressum from 'containers/ImpressumPage';
import Auth from 'containers/Auth';
import UserProfile from 'containers/ProfilePage';
import Register from 'containers/RegisterPage';

export default class App extends Component {
  /**
   * Main App component
   * Wraps children
   * @class App
   * @namespace App
   * @memberOf App
   * @param {Object} props - React props
   * @param {Object} props.children - Child Components
    */

  render() {
    console.log(this.props);
    return (
      <Wrapper>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Auth} />
          </Switch>
        </Content>
        <Footer />
      </Wrapper>
    );
  }
}
        // <Footer />
        // <Header />

App.propTypes = {
  children: PropTypes.element,
};
