import React from "react";


export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src="./src/assets/spotify-logo.png" alt="Spotify Logo" className="logo" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="search-bar"
          />
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li className="divider">|</li>
            <li>Install App</li>
            <li className="signup">Sign up</li>
            <li className="login-btn">Log in</li>
          </ul>
        </div>
      </nav>
    );
  }
}