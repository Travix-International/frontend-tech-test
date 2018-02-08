import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { isInvalid } from 'utils/form';
import Input from 'components/Input/List';
import Button from 'components/Button/List';
import IconAdd from 'components/Icon/Add';
import IconRemove from 'components/Icon/Remove';
import Form from './Form';
import InputWrapper from './InputWrapper';
import ButtonsWrapper from './ButtonsWrapper';

class TodoItem extends PureComponent {
  state = {
    title: this.props.title,
    description: this.props.description
  };

  componentWillReciveProps({ title, description }) {
    if (title !== this.props.title) {
      this.setState({ title });
    }

    if (description !== this.props.description) {
      this.setState({ description });
    }
  }

  handleChange = (value, name) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    if (e !== undefined && e.preventDefault) e.preventDefault();

    const { title, description } = this.state;
    const { id, index, onUpdate } = this.props;

    onUpdate({ id, title, description, index });
  }

  handleDelete = () => {
    const { id, index, onDelete } = this.props;

    onDelete({ id, index });
  }

  render() {
    const { style, removed, loading } = this.props;
    const { title, description } = this.state;
    const invalid = isInvalid(this.state, ['title', 'description']);

    return (
      <Form style={style} removed={removed} loading={loading} onSubmit={this.handleSubmit}>
        <InputWrapper>
          <Input
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="description"
            type="text"
            value={description}
            onChange={this.handleChange}
          />
        </InputWrapper>
        <ButtonsWrapper>
          <Button type="submit" disabled={invalid || removed}>
            <IconAdd scale={0.48} />
          </Button>
          <Button type="button" disabled={removed} secondary onClick={this.handleDelete}>
            <IconRemove scale={0.3} />
          </Button>
        </ButtonsWrapper>
      </Form>
    );
  }
}

TodoItem.propTypes = {
  style: PropTypes.object,
  id: PropTypes.number,
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  removed: PropTypes.bool,
  loading: PropTypes.bool,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
};

export default TodoItem;
