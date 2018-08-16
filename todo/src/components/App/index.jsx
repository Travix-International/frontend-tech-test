import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { Snackbar } from 'react-toolbox/lib/snackbar';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import { editItem, createItem, deleteItem, getItem } from './../../store/actions/actions';
import Main from './../Main';
import Header from './../Header';
import Footer from './../Footer';
import Detail from './../Detail';
import styles from './App.css';

const actionTriggered = {
  'ITEMS': 'Items downloaded',
  'ITEM': 'Item downloaded',
  'CREATE': 'Item successfully created',
  'EDIT': 'Item successfully edited',
  'DELETE': 'Item successfully deleted'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.onDeletePress = this.onDeletePress.bind(this);
    this.onDonePress = this.onDonePress.bind(this);
    this.onSavePress = this.onSavePress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSnackbarTimeout = this.onSnackbarTimeout.bind(this);
  }

  state = {
    id: null,
    title: '',
    description: '',
    done: false,
    snackbar: {
      active: false,
      text: ''
    }
  }

  handleChange(state) {
    this.setState({ ...state });
  }

  onSnackbarTimeout() {
    this.setState({
      ...this.state,
      snackbar: {
        active: false,
        text: ''
      }
    });
  }

  onSavePress() {
    if (this.props.location.pathname === '/new') {
      this.props.createItem(this.state);
    } else {
      this.props.editItem(this.state);
    }
  }

  onDonePress() {
    const { item } = this.props;
    this.props.editItem({
      ...item,
      done: !item.done
    });
  }

  onDeletePress() {
    this.props.deleteItem(this.state.id);
  }
  
  componentDidUpdate(prevProps) {
    // Show snackbar
    if (!prevProps.action
      && prevProps.action !== this.props.action) {
        this.setState({
          ...this.state,
          snackbar: {
            active: true,
            text: actionTriggered[this.props.action]
          }
        });
    }
    // Redirect from /new
    if (!prevProps.action && this.props.action === 'CREATE') {
        this.props.history.push(`/item/${this.props.item.id}`);
    }
    // Redirect from detail page to Main if deleted
    if (prevProps.item
      && !this.props.item
      && this.props.action === 'DELETE') {
        this.props.history.push('/');
    }
  }
  render() {
    const spinnerClass = this.props.isFetching ? styles.spinnerVisible : styles.spinnerInvis;
    return (
      <div className={styles.App}>
        <Header />
        <section className={styles.content}>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/new" exact render={_ => <Detail handleChange={this.handleChange} />} />
            <Route path="/item/:id" render={_ => <Detail handleChange={this.handleChange} getItem={this.props.getItem}/>} />
          </Switch>
        </section>
        <Footer 
          onDeletePress={this.onDeletePress}
          onDonePress={this.onDonePress}
          onSavePress={this.onSavePress}
          done={this.props.item ? this.props.item.done : false}
        />
        <Snackbar
          timeout={2000}
          label={this.state.snackbar.text}
          active={this.state.snackbar.active}
          onTimeout={this.onSnackbarTimeout}
        />
        <ProgressBar type='circular' className={spinnerClass}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.currentItem,
  isFetching: state.isFetching,
  action: state.currentAction
});
const mapDispatchToProps = dispatch => ({
  editItem: data => dispatch(editItem(data)),
  createItem: data => dispatch(createItem(data)),
  deleteItem: id => dispatch(deleteItem(id)),
  getItem: id => dispatch(getItem(id))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
