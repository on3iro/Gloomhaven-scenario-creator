import React from 'react';

import NavEntry from './navEntry';


// Named export for separate access (e.g. for unit tests)
export const Navigation = () => {
/**
  * This is the main navigation component of the application.
  *
  * @function Navigation
  * @returns {Nodes}
  */

  return (
    <div>
      <nav>
        <ul>
          <NavEntry url="/">Home</NavEntry>
          <NavEntry url="/impressum">Impressum</NavEntry>
        </ul>
      </nav>
    </div>
  );
};


export default Navigation;
