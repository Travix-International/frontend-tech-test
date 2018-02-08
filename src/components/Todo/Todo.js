import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Row, Col } from 'react-flexbox-grid';
import CircleIcon from 'react-icons/lib/fa/circle-o';
import CheckIcon from 'react-icons/lib/fa/check-circle';

import CheckButton from '../CheckButton';
import TodoActions from '../../containers/TodoActions/';
import UpdateTodo from '../../containers/UpdateTodo/';

export default function Todo(props) {
  const {
    completed,
    description,
    editing,
    id,
    onClick,
    title
  } = props;
  
  return (
    <Row className={"todoItemContainer"} middle={"xs"}>
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <div
          className={
            classnames(
              'todoItem',
              {
                'completed': completed
              }
            )
          }
        >
          <Row
            center={"xs"}
            middle={"xs"}
          >
            <Col
              lg={2}
              md={2}
              sm={2}
              xs={3}
            >
              <CheckButton
                onClick={onClick}
              >
                {
                  completed
                    ? <CheckIcon size={36} />
                    : <CircleIcon size={36} />
                }
              </CheckButton>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={6}
              xs={6}
            >
              <Row start={"xs"}>
                <Col xs={12}>
                  <h4 className={classnames('todoTitle')}>{title}</h4>
                  {
                    description &&
                    <h6 className={classnames('todoDescription')}>{description}</h6>
                  }
                </Col>
              </Row>
            </Col>
            <Col
              lg={4}
              md={4}
              sm={4}
              xs={3}
            >
              <TodoActions
                id={id}
              />
            </Col>
          </Row>
          {
            editing
            && <UpdateTodo id={id} />
          }
        </div>
      </Col>
    </Row>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool,
  description: PropTypes.string.isRequired,
  editing: PropTypes.bool,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};
Todo.defaultProps = {
  completed: false,
  editing: false
};
