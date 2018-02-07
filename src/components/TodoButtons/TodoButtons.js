import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-flexbox-grid';
import DeleteButton from './DeleteButton/DeleteButton';
import EditButton from './EditButton/EditButton';

export default function TodoButtons(props) {
  const {
    deleteTodo,
    id,
    setEditMode
  } = props;
  
  return (
    <Row>
      <Col
        lg={6}
        md={6}
        sm={6}
        xs={6}
      >
        <DeleteButton
          iconSize={28}
          onClick={() => deleteTodo(id)}
        />
      </Col>
      <Col
        lg={6}
        md={6}
        sm={6}
        xs={6}
      >
        <EditButton
          iconSize={28}
          onClick={() => setEditMode(id)}
        />
      </Col>
    </Row>
  );
}

TodoButtons.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  setEditMode: PropTypes.func.isRequired
};
