import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Button,
  Container
} from 'reactstrap';
import { TaskEditor } from '../TaskEditor';
import { FiPlus } from 'react-icons/fi';
import styles from './Footer.module.scss';
import flexCenter from '../flexCenter';

const propTypes = {
  createTask: PropTypes.func
};

const defaultProps = {
  createTask: () => {}
};

const AddButton = flexCenter(Button);

const Footer = props => {
  const { createTask } = props;
  const [taskEditorOpen, toggleTaskEditor] = useState(false);

  return (
    <React.Fragment> 
      <Container className={styles.footer}>
        <div className={styles['footer-inner']}>
          <AddButton
            color="primary"
            size="sm"
            onClick={() => toggleTaskEditor(!taskEditorOpen)}
          >
            <FiPlus /> 
            Add Task
          </AddButton>
        </div>
      </Container>
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