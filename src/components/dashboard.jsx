import React from "react";
import SideBar from "./sideBar";
import Hero from "./Hero";
import PopularArtists from "./PopularArtists";
import Footer from "./Footer";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <SideBar />
        <div className="main-content">
          <Hero />
          <PopularArtists />
          <hr />
          <Footer />
        </div>
      </div>
    );
  }
}