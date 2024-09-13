import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, 
    };
  }


  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="navbar">
        <Link className="logoName" to="/">
          Playlist <br /> My List
        </Link>

        <div className="links-right">
          {isLoggedIn ? (
            <>
              {/* Links shown when logged in */}
              <Link to="/Profile">Profile</Link>
              <Link to="/Settings">Settings</Link>
              <Link to="/Logout" onClick={this.handleLogout}>Logout</Link>
            </>
          ) : (
            <>
              {/* Links shown when not logged in */}
              <Link to="/FAQ">FAQs</Link>
              <Link to="/Help">Help</Link>
              <Link to="/Login" onClick={this.handleLogin}>Login</Link>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
