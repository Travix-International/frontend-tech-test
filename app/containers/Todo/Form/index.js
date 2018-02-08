import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { isInvalid } from 'utils/form';
import injectReducer from 'utils/injectReducer';
import injectEpic from 'utils/injectEpic';
import Input from 'components/Input/Form';
import SubmitButton from './SubmitButton';
import Form from './Form';
import messages from '../messages';
import { key } from './constants';
import { change, save } from './actions';
import { selectTitle, selectDescription, selectLoading } from './selectors';
import reducer from './reducer';
import epic from './epic';

export class TodoForm extends PureComponent {
  render() {
    const { title, description, loading, onChange, onSubmit } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <label htmlFor="title">
          <FormattedMessage {...messages.placeholderTitle}>
            {placeholder => (
              <Input
                name="title"
                type="text"
                placeholder={placeholder}
                value={title}
                onChange={onChange}
              />
            )}
          </FormattedMessage>
        </label>
        <label htmlFor="description">
          <FormattedMessage {...messages.placeholderDescription}>
            {placeholder => (
              <Input
                name="description"
                type="text"
                placeholder={placeholder}
                value={description}
                onChange={onChange}
              />
            )}
          </FormattedMessage>
        </label>
        <SubmitButton loading={loading} disabled={isInvalid(this.props, ['title', 'description'])}>
          <FormattedMessage {...messages.save} />
        </SubmitButton>
      </Form>
    );
  }
}

TodoForm.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  onChange: (value, name) => dispatch(change({ value, name })),
  onSubmit: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(save());
  }
});

const mapStateToProps = createStructuredSelector({
  title: selectTitle(),
  description: selectDescription(),
  loading: selectLoading()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key, reducer });
const withEpic = injectEpic({ key, epic });

export default compose(
  withReducer,
  withConnect,
  withEpic
)(TodoForm);
