import './styles.scss'

import React from 'react';

import TodoBoxContainer from '../../containers/TodoBoxContainer';
import TodoForm from '../../components/TodoForm';
import Loading from '../../components/Loading';

function Layout(){
  return (
    <div class="layout">
      <Loading />
      <TodoForm />
      <div class="layout-container">
      <TodoBoxContainer />
      </div>
    </div>
  );
}

export default Layout;
