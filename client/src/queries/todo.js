import { gql } from "react-apollo";

export const fragments = {
  TodoComplete: gql`
    fragment TodoComplete on Todo {
      id,
      title,
      description
    }
  `,
  TodoPartial: gql`
    fragment TodoPartial on Todo {
      title,
      description
    }
  `,
};

export const todos = gql`
  query {
    todos {
      ...TodoComplete
    }
  }
  ${fragments.TodoComplete}
`;

export const updateTodo = gql`
  mutation ($id: String! $title: String! $description: String!){
    updateTodo(
      id: $id
      title: $title
      description: $description
    ) {
      ...TodoComplete
    }
  }
  ${fragments.TodoComplete}
`;

export const deleteTodo = gql`
  mutation ($id: String){
    deleteTodo(
      id: $id
    ) {
      id
    }
  }
`;

export const newTodo = gql`
  mutation ($title: String! $description: String!) {
    createTodo(
      title: $title
      description: $description
    ) {
      ...TodoComplete
    }
  }
  ${fragments.TodoComplete}
`;
