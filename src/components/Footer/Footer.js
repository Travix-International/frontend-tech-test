import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Button,
  Container
} from 'reactstrap';
import { PendableTaskEditor } from '../TaskEditor';
import { FiPlus } from 'react-icons/fi';
import styles from './Footer.module.scss';
import { flexCenter } from '../flexCenter';

const propTypes = {
  createTask: PropTypes.func
};

const defaultProps = {
  createTask: () => {}
};

const AddButton = flexCenter(Button);

/**
 * App footer contains a "Add task" button
 */
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
      <PendableTaskEditor
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