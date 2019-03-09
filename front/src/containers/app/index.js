import React from 'react'
import { Route, withRouter, Switch} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import styled from 'styled-components'
import ToDo from '../todo/todo.container'
import Art from './art'

const MainApp = styled.main`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
  }
  body {
    background: linear-gradient(135deg, #fb83fa 0%,#9261bb 100%);
    height: 100%;
  }
  #root {
    height: 100%;
  }
`
Art()

const App = () => (
  <MainApp>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={withRouter(ToDo)} />
      <Route component={withRouter(ToDo)} />
    </Switch>
  </MainApp>
)

export default App
