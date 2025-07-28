import React from "react";

export default class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <h3>Your Library</h3>
        <div className="playlist-box">
          <h4>Create your first playlist</h4>
          <p>It’s easy, we’ll help you</p>
          <button className="sidebar-btn">Create playlist</button>
        </div>
        <div className="playlist-box">
          <h4>Let’s find some podcasts to follow</h4>
          <p>We’ll keep you updated</p>
          <button className="sidebar-btn">Browse Podcasts</button>
        </div>
      </aside>
    );
  }
}