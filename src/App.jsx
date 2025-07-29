import React from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./components/DashboardPage";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <DashboardPage />
      
      </div>
    );
  }
}