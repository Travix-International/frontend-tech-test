import React from 'react';
import PropTypes from 'prop-types';

import { Button, ToggleButton } from 'travix-ui-kit';
import FaCaretSquareOLeft from 'react-icons/lib/fa/caret-square-o-left';
import FaCaretSquareORight from 'react-icons/lib/fa/caret-square-o-right';
import { Row, Col } from 'react-flexbox-grid';
import Todo from "../Todo/";

export default function TodoList(props) {
  const { changePage, onTodoClick, pageNumber, pageSize, todos, togglePagination, totalPages } = props;
  
  return (
    <div className={"todoListContainer"}>
      <Row style={{ marginBottom: '15px' }}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <ToggleButton
            handleSelect={() => togglePagination((pageNumber > 0 ? 0 : 1), pageSize)}
            items={['Unpaged', 'Paged']}
            mods={[]}
            selectedIndex={(pageNumber > 0 ? 1 : 0)}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          {todos.map(todo =>
            <Todo
              completed={todo.completed}
              description={todo.description}
              editing={todo.editing}
              id={todo.id}
              key={todo.id}
              onClick={() => onTodoClick(todo.id)}
              title={todo.title}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          {
            pageNumber > 0
            &&
            <Row>
              <Col lg={2} md={2} sm={2} xs={2}>
                {
                  pageNumber > 1
                  &&
                  <Button
                    onClick={() => changePage(pageNumber - 1, pageSize)}
                    variation={"link"}
                  >
                    <FaCaretSquareOLeft
                      size={36}
                      color={'white'}
                    />
                  </Button>
                }
              </Col>
              <Col lg={2} lgOfsset={8} md={2} mdOffset={8} sm={2} smOffset={8} xs={2} xsOffset={8} style={{ textAlign: 'right' }}>
                {
                  pageNumber < totalPages
                  &&
                    <Button
                      onClick={() => changePage(pageNumber + 1, pageSize)}
                      variation={"link"}
                    >
                      <FaCaretSquareORight
                        size={36}
                        color={'white'}
                      />
                    </Button>
                }
              </Col>
            </Row>
          }
        </Col>
      </Row>
    </div>
  );
}

TodoList.propTypes = {
  changePage: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  todos: PropTypes.array.isRequired,
  togglePagination: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};
