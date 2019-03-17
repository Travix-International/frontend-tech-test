import React, { Component } from "react";
import PropTypes from "prop-types";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

class ToDoScreen extends Component {
  render() {
    return (
      <div>
        <Header headerTitle={"To Do App"} />
        <AddToDo />
        <ToDoList />
        <Footer footerText={"© 2019 Copyright: Serhat Ozturk"} />
      </div>
    );
  }
}

export default ToDoScreen;
