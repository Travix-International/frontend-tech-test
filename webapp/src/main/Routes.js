import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import TodosView from '../modules/Todos/TodosView';
import '../styles/App.scss';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Route exact path='/' component={TodosView} />
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default Routes;
