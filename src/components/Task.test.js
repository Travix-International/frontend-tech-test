import React from 'react';
import { shallow } from 'enzyme';
import { Task } from './Task';
import { addTask, editTask, deleteTask, discardDraft } from '../redux/actions';

jest.mock('../redux/actions');
addTask.mockReturnValue('addTask');
editTask.mockReturnValue('editTask');
deleteTask.mockReturnValue('deleteTask');
discardDraft.mockReturnValue('discardDraft');

describe('Task', () => {
  let defaultProps;
  let mockEvent;

  beforeEach(() => {
    defaultProps = {
      dispatch: jest.fn(),
      title: 'title',
      description: 'description'
    };
    mockEvent = {
      preventDefault: jest.fn(),
      target: {
        value: 'value'
      }
    };

    addTask.mockClear();
    editTask.mockClear();
    deleteTask.mockClear();
    discardDraft.mockClear();
  });

  describe('constructor', () => {
    it('should initialize the state with the correct data', () => {
      const task = shallow(<Task {...defaultProps} />);
      expect(task.state()).toMatchObject({
        isEditing: false,
        title: '',
        description: ''
      });
    });
  });

  describe('onEdit', () => {
    it('should prevent the default event behavior', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().onEdit(mockEvent);

      expect(mockEvent.preventDefault.mock.calls.length).toBe(1);
    });

    it('should copy the title and description props to the state', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().onEdit(mockEvent);

      expect(task.state()).toMatchObject({
        title: defaultProps.title,
        description: defaultProps.description
      });
    });

    it('should update the task editing state', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().onEdit(mockEvent);

      expect(task.state()).toMatchObject({
        isEditing: true
      });
    });
  });

  describe('onDelete', () => {
    it('should prevent the default event behavior', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().onDelete(mockEvent);

      expect(mockEvent.preventDefault.mock.calls.length).toBe(1);
    });

    it('should dispatch the delete task action with the correct parameters', () => {
      const task = shallow(<Task id={1} {...defaultProps} />);
      task.instance().onDelete(mockEvent);

      expect(deleteTask).toHaveBeenCalledWith({
        id: 1,
        title: defaultProps.title,
        description: defaultProps.description
      });
      expect(defaultProps.dispatch).toHaveBeenCalledWith('deleteTask');
    });
  });

  describe('onSave', () => {
    it('should prevent the default event behavior', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().onSave(mockEvent);

      expect(mockEvent.preventDefault.mock.calls.length).toBe(1);
    });

    it('should dispatch the add task action with the correct parameters if a draft task', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.setState({ title: 'title', description: 'description' });
      task.instance().isDraft = jest.fn().mockReturnValue(true);
      task.instance().onSave(mockEvent);

      expect(editTask).not.toHaveBeenCalled();
      expect(addTask).toHaveBeenCalledWith({
        title: defaultProps.title,
        description: defaultProps.description
      });
      expect(defaultProps.dispatch).toHaveBeenCalledWith('addTask');
    });

    it('should dispatch the edit task action with the correct parameters if a regular task', () => {
      const task = shallow(<Task id={1} {...defaultProps} />);
      task.setState({ title: 'title', description: 'description' });
      task.instance().isDraft = jest.fn().mockReturnValue(false);
      task.instance().onSave(mockEvent);

      expect(addTask).not.toHaveBeenCalled();
      expect(editTask).toHaveBeenCalledWith({
        id: 1,
        title: defaultProps.title,
        description: defaultProps.description
      });
      expect(defaultProps.dispatch).toHaveBeenCalledWith('editTask');
    });

    it('should update the task editing state', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().onSave(mockEvent);

      expect(task.state()).toMatchObject({
        isEditing: false
      });
    });
  });

  describe('onCancel', () => {
    it('should prevent the default event behavior', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().onCancel(mockEvent);

      expect(mockEvent.preventDefault.mock.calls.length).toBe(1);
    });

    it('should dispatch the discard draft action with the correct parameters if a draft task', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isDraft = jest.fn().mockReturnValue(true);
      task.instance().onCancel(mockEvent);

      expect(discardDraft).toHaveBeenCalled();
      expect(defaultProps.dispatch).toHaveBeenCalledWith('discardDraft');
    });

    it('should update the task editing state if a regular task', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isDraft = jest.fn().mockReturnValue(false);
      task.instance().onCancel(mockEvent);

      expect(task.state()).toMatchObject({
        isEditing: false
      });
    });
  });

  describe('onTitleChange', () => {
    it('should update the task title state', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().onTitleChange(mockEvent);

      expect(task.state()).toMatchObject({
        title: mockEvent.target.value
      });
    });
  });

  describe('onDescriptionChange', () => {
    it('should update the task description state', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().onDescriptionChange(mockEvent);

      expect(task.state()).toMatchObject({
        description: mockEvent.target.value
      });
    });
  });

  describe('isDraft', () => {
    it('shuold return true if the task does not have an ID', () => {
      const task = shallow(<Task {...defaultProps} />);
      expect(task.instance().isDraft()).toBe(true);

      task.setProps({ id: 1 });
      expect(task.instance().isDraft()).toBe(false);
    });

    it('shuold return false if the task does have an ID', () => {
      const task = shallow(<Task {...defaultProps} id={1} />);
      expect(task.instance().isDraft()).toBe(false);
    });
  });

  describe('isEditing', () => {
    it('should return true if the task is a draft', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isDraft = jest.fn().mockReturnValue(true);

      expect(task.instance().isEditing()).toBe(true);
    });

    it('should return true if the task is in edit mode', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isDraft = jest.fn().mockReturnValue(false);
      task.setState({ isEditing: true });

      expect(task.instance().isEditing()).toBe(true);
    });

    it('should return false if the task is neither a draft nor in edit mode', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isDraft = jest.fn().mockReturnValue(false);

      expect(task.instance().isEditing()).toBe(false);
    });
  });

  describe('canSave', () => {
    it('should return false if the title is empty', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.setState({ title: '' });

      expect(task.instance().canSave()).toBe(false);
    });

    it('should return false if the description is empty', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.setState({ title: 'title', escription: '' });

      expect(task.instance().canSave()).toBe(false);
    });

    it('should return true if both the title and description are not empty', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.setState({ title: 'title', description: 'description' });

      expect(task.instance().canSave()).toBe(true);
    });
  });

  describe('render', () => {
    it('should render a form groups for title and description if the task is in edit mode', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isEditing = jest.fn().mockReturnValue(true);
      task.setState({ title: 'title', description: 'description' });

      expect(task.find('input').prop('value')).toBe('title');
      expect(task.find('textarea').prop('value')).toBe('description');

      expect(task.find('.task-title').length).toBe(0);
      expect(task.find('.task-description').length).toBe(0);
    });

    it('should render a heading and paragraph for title and description if the task is not in edit mode', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isEditing = jest.fn().mockReturnValue(false);
      task.setState({ title: 'title', description: 'description' });

      expect(task.find('.task-title').text()).toBe('title');
      expect(task.find('.task-description').text()).toBe('description');

      expect(task.find('input').length).toBe(0);
      expect(task.find('textarea').length).toBe(0);
    });

    it('should render add and cancel buttons if the task is a draft in edit mode', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isEditing = jest.fn().mockReturnValue(true);
      task.instance().isDraft = jest.fn().mockReturnValue(true);
      task.instance().forceUpdate();

      const actions = task.find('.card-link');
      expect(actions.length).toBe(2);
      expect(actions.at(0).text()).toBe('Add');
      expect(actions.at(1).text()).toBe('Cancel');
    });

    it('should render save and cancel buttons if a regular task in edit mode', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isEditing = jest.fn().mockReturnValue(true);
      task.instance().isDraft = jest.fn().mockReturnValue(false);
      task.instance().forceUpdate();

      const actions = task.find('.card-link');
      expect(actions.length).toBe(2);
      expect(actions.at(0).text()).toBe('Save');
      expect(actions.at(1).text()).toBe('Cancel');
    });

    it('should render edit, delete and complete buttons if a regular task not in edit mode', () => {
      const task = shallow(<Task {...defaultProps} />);
      task.instance().isEditing = jest.fn().mockReturnValue(false);
      task.instance().forceUpdate();

      const actions = task.find('.card-link');
      expect(actions.length).toBe(3);
      expect(actions.at(0).prop('title')).toBe('Edit');
      expect(actions.at(1).prop('title')).toBe('Delete');
      expect(actions.at(2).prop('title')).toBe('Complete');
    });
  });
});
