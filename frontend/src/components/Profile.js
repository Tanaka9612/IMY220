import React from 'react';
import {Link} from 'react-router-dom'

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="profile-page">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="profile-pic"></div>
          <nav>
            <ul>
              <li><Link to=''>Settings</Link></li>
              <li><Link to=''>Friends</Link></li>
              <li><Link to='/playlistpreview'>My playlists</Link></li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="playlists-section">
            <h2>My playlists</h2>
            <div className="grid">
              <div className="playlist-item"></div>
              <div className="playlist-item"></div>
              <div className="playlist-item"></div>
            </div>
          </div>
          
          <div className="favorites-section">
            <h2>Favourites</h2>
            <div className="grid">
              <div className="playlist-item"></div>
              <div className="playlist-item"></div>
              <div className="playlist-item"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;

