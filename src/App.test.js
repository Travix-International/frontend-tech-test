import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Websocket from 'react-websocket';
import {WebSocket} from 'mock-socket';
global.WebSocket= WebSocket;

configure({ adapter: new Adapter() });


const app = () => {
  return(
    <Provider store={configureStore()({todos:{toastMessage:{},tasks:[]}})}>
      <App />
    </Provider>
  );
};

describe('App', () =>{
  it('should render App without crashing', () => {
    const element = app();
    mount(element);
  });

  it('should render TodoList', () => {
    const element = app();
    const appElement = mount(element);;
    expect(appElement.find(".todo-list").length).toEqual(1);
  });

});
