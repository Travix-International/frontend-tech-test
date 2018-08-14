import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getItems, editItem, deleteItem } from './../../store/actions/actions';
import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';
import { Snackbar } from 'react-toolbox/lib/snackbar';
import { Button } from 'react-toolbox/lib/button';
import Checkbox from 'react-toolbox/lib/checkbox';
import Input from './../ui/Input';
import styles from './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onChangeTodoState = this.onChangeTodoState.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getItemsByTag = this.getItemsByTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSnackbarTimeout = this.onSnackbarTimeout.bind(this);
  }

  state = {
    snackbar: {
      text: '',
      active: false
    },
    tag: ''
  }
  componentDidMount() {
    this.props.getItems();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items
      && this.props.items
      && prevProps.items.length > this.props.items.length) {
        this.setState({
          ...this.state,
          snackbar: {
            active: true,
            text: 'Todo have been deleted'
          }
        })
      }
  }
  onSnackbarTimeout() {
    this.setState({
      ...this.state,
      snackbar: {
        active: false,
        text: ''
      }
    })
  }
  onChangeTodoState(done, data) {
    const body = {
      ...data,
      done
    }
    this.props.editItem(body);
  }

  deleteItem(evt,id) {
    evt.preventDefault();
    this.props.deleteItem(id);
  }

  getItemsByTag(tag) {
    this.props.getItems(tag.trim());
    this.setState({ ...this.state, tag: tag.trim() });
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    this.props.getItems(value.trim(value.trim()));
  }

  renderList() {
    return this.props.items && this.props.items.map((item, index) => {
      const itemClass = item.done ? styles.crossed : styles.link;
      const doneBox = [<Checkbox checked={item.done} onChange={evt => this.onChangeTodoState(evt, item)} key={item.id}/>];
      const btnDelete = [
        <Button primary icon="delete" onClick={evt => this.deleteItem(evt, item.id)} floating mini key={item.id} type="button" />
      ];
      let description = '';
      if (window.innerWidth > 1169) {
        description = item.description.length > 150 ? `${item.description.substr(0, 150)}...` : item.description;
      } else {
        description = item.description.length > 40 ? `${item.description.substr(0, 40)}...` : item.description;
      }
      const tags = item.tags
        ? item.tags.split(',').map(tag => <Button label={`#${tag}`} flat primary key={tag} onClick={_ => this.getItemsByTag(tag)}/>)
        : [];
      return (
        <div key={`${item.title}--${item.id}`}>
          <ListItem
            caption={item.title}
            legend={description}
            leftActions={doneBox}
            rightActions={btnDelete}
            className={itemClass}
            to={`/item/${item.id}`}
          />
          <div className={styles.tags}>
            { tags }
          </div>
          <ListDivider />
        </div>);
    });
  }
  render() {
    return (
      <Fragment>
        <Input type='text' name='tag' value={this.state.tag} change={this.handleChange} bgText="Tags"/>
        <List ripple selectable>
          {this.renderList()}
        </List>
        <Snackbar
          timeout={2000}
          label={this.state.snackbar.text}
          active={this.state.snackbar.active}
          onTimeout={this.onSnackbarTimeout}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  getItems: tag => dispatch(getItems(tag)),
  editItem: data => dispatch(editItem(data)),
  deleteItem: data => dispatch(deleteItem(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);