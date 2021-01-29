import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <h3>Nav</h3>
        <ul>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
