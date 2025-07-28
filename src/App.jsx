import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/dashboard"; 

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