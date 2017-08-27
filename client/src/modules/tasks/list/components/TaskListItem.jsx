import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Row, Col, Checkbox, Button } from 'react-bootstrap';
import Title from '../../../common/Title';
import Description from '../../../common/Description';

export default class TaskListItem extends React.Component {
  static propTypes = {
    task: PropTypes.any.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const { task, className } = this.props;

    return (
      <ListGroupItem className={`TaskListItem TaskListItem-${task.id} ${className}`}>
        <Row>
          <Col sm={2} md={2} className="TaskListItem-CheckBoxContainer">
            <Checkbox />
          </Col>
          <Col sm={8} md={8} className="TaskListItem-TitleAndDescription">
            <Row className="TaskListItem-TitleContainer">
              <Title className="TaskListItem-Title">{task.title}</Title>
            </Row>
            <Row className="TaskListItem-DescriptionContainer">
              <Description className="TaskListItem-Description">{task.description}</Description>
            </Row>
          </Col>
          <Col sm={2} md={2} className="TaskListItem-CheckBoxContainer">
            <Button bsStyle="warning">Edit</Button>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}
