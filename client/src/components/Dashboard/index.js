import React, { Component } from "react";
import { graphql } from "react-apollo";
import { filter } from "graphql-anywhere";

import ApolloDisplay from "lib/components/ApolloDisplay";
import NewTodo from "./NewTodo";
import TodoSwitch from "./TodoSwitch";
import { TodosContainer } from "lib/components/Todo";
import { todos, fragments } from "../../queries/todo";

class Dashboard extends Component {

  render () {
    const {
      data
    } = this.props;

    return (
      <div>
        <ApolloDisplay
        isLoading={ data.loading }
        hasError={ data.error !== undefined }
        getLoadingComponent={() => (<span>Colorful loading indicators.</span>)}
        getErrorComponent={() => (
          <span>An error just happened! It's works on our machines!</span>
        )}
        getComponent={() => (
          <div>
          <TodosContainer>
            <NewTodo />
            { data.todos.map((todo, i) => (<TodoSwitch key={todo.id} data={filter(fragments.TodoComplete, todo)} />)) }
          </TodosContainer>
          </div>
        )}
      />
    </div>
    );
  }
}

export default graphql(todos)(Dashboard);
