import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Dashboard />
      
      </div>
    );
  }
}