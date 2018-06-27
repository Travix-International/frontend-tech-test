import React, { Component } from "react";

const todoImage = require("../images/todo.png")

class Header extends Component {

  render() {
    return (
      <header>
        <div className="logo">
          <img className="" alt="To Do logo" src={todoImage} />
        </div>
        <div className="appTitle marginTop_10">
          <h1>To Do App</h1>
        </div>
      </header>
    );
  }
}

export default Header;