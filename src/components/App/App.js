import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList/';

export default function App() {
  return (
    <Grid id={"appContainer"}>
      <Row>
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <AddTodo />
        </Col>
      </Row>
      <Row>
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <VisibleTodoList />
        </Col>
      </Row>
    </Grid>
  );
}
