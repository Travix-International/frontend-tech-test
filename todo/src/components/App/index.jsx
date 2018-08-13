import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { Snackbar } from 'react-toolbox/lib/snackbar';
import { editItem, createItem, deleteItem, getItem } from './../../store/actions/actions';
import Main from './../Main';
import Header from './../Header';
import Footer from './../Footer';
import Detail from './../Detail';
import styles from './App.css';

const DELETE_TEXT = "Item successfully deleted"
const EDIT_TEXT = "Item successfully edited"
const CREATE_TEXT = "TODO created"

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
    if (!prevProps.item
      && this.props.item
      && prevProps.location.pathname === '/new') {
        this.props.history.push(`/item/${this.props.item.id}`);
        this.setState({
          ...this.state,
          snackbar: {
            active: true,
            text: CREATE_TEXT
          }
        });
    }
    if (prevProps.item
      && !this.props.item
      && prevProps.location.pathname.startsWith("/item/")) {
        this.props.history.push('/');
        this.setState({
          ...this.state,
          snackbar: {
            active: true,
            text: DELETE_TEXT
          }
        })
    }

    if (prevProps.item
      && this.props.item
      && (prevProps.item.done !== this.props.item.done
      || prevProps.item.title !== this.props.item.title
      || prevProps.item.description !== this.props.item.description)) {
        this.setState({
          ...this.state,
          snackbar: {
            active: true,
            text: EDIT_TEXT
          }
        })
      }
  }
  render() {
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.currentItem
});
const mapDispatchToProps = dispatch => ({
  editItem: data => dispatch(editItem(data)),
  createItem: data => dispatch(createItem(data)),
  deleteItem: id => dispatch(deleteItem(id)),
  getItem: id => dispatch(getItem(id))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
