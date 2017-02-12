import React, { PropTypes } from 'react';
import { Link } from 'react-router';


// Named export for separate access (e.g. for unit tests)
export const NavEntry = props => {
  /**
   * A single navigation entry component.
   * Renders a list item containing a react-router Link.
   *
   * @function NavEntry
   * @param {Object} props - React props
   * @param {String} props.url -  Url to link to
   * @param {String} props.children -  Link text
   * @returns Component
    */

  return (
     <li>
        <Link to={props.url} activeClassName="is-active">
            {props.children}
        </Link>
     </li>
  );
};

NavEntry.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default NavEntry;
