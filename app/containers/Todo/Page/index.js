import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectEpic from 'utils/injectEpic';
import List from 'components/List';
import ButtonMorph from 'components/Button/Morph';
import LoadingIndicator from 'components/LoadingIndicator';
import TodoForm from 'containers/Todo/Form';
import messages from '../messages';
import { key } from '../constants';
import { fetch, update, remove } from '../actions';
import { selectData, selectLoading } from '../selectors';
import reducer from '../reducer';
import epic from '../epic';
import CenteredSection from './CenteredSection';
import TodoItem from './Item';
import Header from './Header';

export class TodoPage extends PureComponent {
  componentWillMount() {
    const { onInit } = this.props;

    onInit();
  }

  renderTodos() {
    const { loading, todos } = this.props;

    if (loading) {
      return (
        <LoadingIndicator />
      );
    }

    if (!loading && !todos.length) {
      return (
        <CenteredSection>
          <FormattedMessage {...messages.noResult} />
        </CenteredSection>
      );
    }

    return (
      <List
        data={todos}
        height={500}
        rowHeight={60}
        onRenderItem={this.renderItem}
      />
    );
  }

  renderItem = ({ data, index, style }) => {
    const { onUpdateItem, onDeleteItem } = this.props;

    return (
      <TodoItem
        key={data.id}
        {...data}
        style={style}
        index={index}
        onUpdate={onUpdateItem}
        onDelete={onDeleteItem}
      />
    );
  }

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header}>{
          header => (
            <Helmet>
              <title>{header}</title>
              <meta name="description" content="Todo Page" />
            </Helmet>
          )
        }
        </FormattedMessage>
        <ButtonMorph
          text={<FormattedMessage {...messages.add} />}
          collapsedText={<FormattedMessage {...messages.close} />}
        >
          <TodoForm />
        </ButtonMorph>
        <Header />
        {this.renderTodos()}
      </div>
    );
  }
}

TodoPage.propTypes = {
  loading: PropTypes.bool,
  todos: PropTypes.array,
  onInit: PropTypes.func,
  onUpdateItem: PropTypes.func,
  onDeleteItem: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  onInit: () => dispatch(fetch()),
  onUpdateItem: ({ id, title, description, index }) => dispatch(update({ id, title, description, index })),
  onDeleteItem: ({ id, index }) => dispatch(remove({ id, index }))
});

const mapStateToProps = createStructuredSelector({
  todos: selectData(),
  loading: selectLoading()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key, reducer });
const withEpic = injectEpic({ key, epic });

export default compose(
  withReducer,
  withConnect,
  withEpic
)(TodoPage);
