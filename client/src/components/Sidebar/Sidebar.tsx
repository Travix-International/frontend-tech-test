import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch, AnyAction, Action } from "redux";

import SidebarItem from "./SidebarItem/SidebarItem";
import { Task } from "../../models/Task";
import { FilterByCategory, FetchTasks } from "../../store/actions/actions";
import "./Sidebar.scss";

interface Props {
  tasks: Task[];
  actions: any;
}

const Sidebar: React.FC<Props> = ({ tasks, actions }) => {
  const mappedCategories = tasks.map((task: Task) => task.category);
  const categories: string[] = Array.from(new Set(mappedCategories));

  const handleCategory = (category: string) => {
    actions.FilterByCategory(category);
  };

  const clearTasks = () => {
    actions.FetchTasks();
  };

  return (
    <aside>
      <h2>Categories List</h2>
      <ul>
        {categories.map((category: string) => (
          <SidebarItem
            key={category}
            category={category}
            click={() => handleCategory(category)}
          />
        ))}
      </ul>
      <button onClick={clearTasks}>Clear</button>
    </aside>
  );
};

const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasks.tasks
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({ FilterByCategory, FetchTasks }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
