import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';
import { Button } from 'react-toolbox/lib/button';
import Checkbox from 'react-toolbox/lib/checkbox';
import { getItems, editItem, deleteItem } from './../../store/actions/actions';
import Input from './../ui/Input';
import Tags from './../Tags';
import styles from './Main.css';


const truncateDesctiption = description => {
  if (window.innerWidth < 1170) {
    return description.length > 25 ? `${description.substr(0, 25)}...` : description;
  }
  return description.length > 100 ? `${description.substr(0, 100)}...` : description;
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.onChangeTodoState = this.onChangeTodoState.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getItemsByTag = this.getItemsByTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  
  onChangeTodoState(done, data) {
    const body = {
      ...data,
      done
    };
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
      const itemClass = item.done
        ? styles.crossed
        : styles.link;
      const doneBox = [
        <Checkbox checked={item.done} onChange={evt => this.onChangeTodoState(evt, item)} key={item.id}/>
      ];
      const btnDelete = [
        <Button primary icon="delete" onClick={evt => this.deleteItem(evt, item.id)} floating mini key={item.id} type="button" />
      ];
      return (
        <div key={`${item.title}--${item.id}`}>
          <ListItem
            caption={item.title}
            legend={truncateDesctiption(item.description)}
            leftActions={doneBox}
            rightActions={btnDelete}
            className={itemClass}
            to={`/item/${item.id}`}
          />
          <div className={styles.tags}>
            <Tags items={item.tags} onClick={this.getItemsByTag} />
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