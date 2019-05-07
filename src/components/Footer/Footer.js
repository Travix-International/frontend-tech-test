import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { TaskEditor } from '../TaskEditor';

const propTypes = {
  createTask: PropTypes.func
};

const defaultProps = {
  createTask: () => {}
};

const Footer = props => {
  const { createTask } = props;
  const [taskEditorOpen, toggleTaskEditor] = useState(false);

  return (
    <React.Fragment> 
      <div>
        <Button 
          size="sm" 
          onClick={() => toggleTaskEditor(!taskEditorOpen)}
        >
          Add Task
        </Button>
      </div>
      <TaskEditor
        open={taskEditorOpen}
        onToggle={() => toggleTaskEditor(!taskEditorOpen)}
        onSubmit={createTask}
      />
    </React.Fragment>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;