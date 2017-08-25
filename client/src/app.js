import * as React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import PromiseMiddleware from 'redux-promise-middleware';
import reducers from './modules/reducers';
import ShowTasks from './modules/tasks/components/ShowTasks';
import createStore from './store';

const store = createStore({ reducers, middlewares: [new PromiseMiddleware(), logger] });
const tasks = [
  { id: 1, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
  { id: 2, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
  { id: 3, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
  { id: 4, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
  { id: 5, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
  { id: 6, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
  { id: 7, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
  { id: 8, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
  { id: 9, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
  { id: 10, title: 'Todo', description: 'adasdasdasdasdasdasdasdasdsadasdasdasdasdasdasad' },
];

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <ShowTasks fetchTasks={() => {}} tasks={tasks} />
        </Provider>
      </div>
    );
  }
}
