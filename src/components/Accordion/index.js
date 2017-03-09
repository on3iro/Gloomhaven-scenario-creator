/**
 * Accordion which consists of multiple entries that can be expanded via a
 * toggle function.
  */

import React, { Component, PropTypes } from 'react';

import Entry from './Entry';
import Wrapper from './Wrapper';


class Accordion extends Component {
  propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      entries: props.entries.map((entry, i) => {
        return {
          id: i,
          question: entry.question,
          answer: entry.answer,
          active: false,
        };
      }),
    };
  }

  toggleEntry = (id) => {
    /**
     * Sets the active state of a specific accordion entry to true and every
     * other entry.active to false.
     *
     * @method toggleEntry
     * @param {Number} id -- Reference to the specific entry inside the state
     * @return {undefined}
      */

    this.setState({
      entries: [...this.state.entries.slice(0)].map(entry => {
        return Object.assign(entry, {
          active: entry.id === id ? true : false,
        });
      })
    });

    return undefined;
  }

  renderEntries = () => {
    return this.state.entries.map((entry, i) => {
      return (
        <Entry
          question={entry.question}
          answer={entry.answer}
          expanded={entry.active}
          key={i}
          id={entry.id}
          handleExpand={() => this.toggleEntry(entry.id)}
        />
      );
    });
  }

  render() {
    return (
      <Wrapper>
        {this.renderEntries()}
      </Wrapper>
    );
  }
}


export default Accordion;
