import React, { Component, PropTypes } from 'react';

import Navigation from '../navigation';


export default class App extends Component {
  /**
   * Main App component
   * Wraps children
   *
   * @class App
   * @props children {Nodes}
    */

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};
