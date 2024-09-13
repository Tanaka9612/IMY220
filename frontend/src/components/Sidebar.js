import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h2>Playlist <br/> My List</h2>
        <nav>
          <ul>
            <li><Link to="/friends">Friends</Link></li>
            <li><Link to="/private-list">Private List</Link></li>
            <li><Link to="/public-lists">Public Lists</Link></li>
            <li><Link to="/shared-lists">Shared Lists</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
