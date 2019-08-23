import React from "react";
import { Provider } from "react-redux";
import TaskList from "./TaskList/TaskList";

import "./App.scss";
import { configureStore } from "../store/configureStore";
import { FetchTasks } from "../store/actions/actions";
import Sidebar from "../components/Sidebar/Sidebar";
import TaskControls from "../components/TaskControls/TaskControls";
import Info from "../components/Info/Info";

const App: React.FC = () => {
  const store = configureStore();
  store.dispatch(FetchTasks());

  return (
    <Provider store={store}>
      <div className="app">
        <Sidebar />
        <TaskList />
        <div className="right-sidebar">
          <Info />
          <TaskControls />
        </div>
      </div>
    </Provider>
  );
};

export default App;
