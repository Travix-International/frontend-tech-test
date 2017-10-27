import React from "react";
import TodoList from "./common/TodoList";
import { PageHeader } from "react-bootstrap";

// Home page component
const Home = () => {
  return (
    <div className="page-home">
      <PageHeader>{'Todo List App'}</PageHeader>
      <TodoList/>
    </div>
  );
}

  export default Home;