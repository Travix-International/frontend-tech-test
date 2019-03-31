import React from "react";
import {Route, Switch} from "react-router-dom";
import ManageItems from "./ItemsList/ManageItems.js";
import TodoForm from "./TodoForm.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){
    return (
        <div className="container">
        <Switch>
         <Route exact path="/" component={ManageItems} />
         <Route path="/managetodo" component={TodoForm} />
        </Switch>
        <ToastContainer autoClose={2000}  />
        </div>
      );
}

export default App;