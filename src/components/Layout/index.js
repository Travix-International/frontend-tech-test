import './styles.scss'

import React from 'react';

import TodoBoxContainer from '../../containers/TodoBoxContainer';
import TodoForm from '../../components/TodoForm';

function Layout(){
  return (
    <div class="layout">
      <TodoForm />
      <div class="layout-container">
      <TodoBoxContainer />
      </div>
    </div>
  );
}

export default Layout;
