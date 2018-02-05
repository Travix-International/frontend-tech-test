import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const App = () => (
  <div>
    <AppBar className="header" position="static">
      <Toolbar>
        <Typography type="title" color="inherit">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App