import React from 'react'
import { Switch, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import List from './List'
import AddTask from './AddTask'
import EditTask from './EditTask'

class App extends React.Component {
  render() {
    return (
      <section>
        <AppBar className="header" position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Test Travix
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/add" component={AddTask} />
          <Route path="/edit/:id" component={EditTask} />
        </Switch>
      </section>
    )
  }
}

export default App
