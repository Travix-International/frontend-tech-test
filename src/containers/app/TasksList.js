import React from 'react';
import { Button, Icon, Modal, Spin } from 'antd';
import Task from './Task';
import { connect } from 'react-redux';
import _get from 'lodash/get';
import _values from 'lodash/values';
import ReactProgressiveList from 'react-progressive-list';
import AddEditTask from './AddEditTask';
import { getTasks, createTask, editTask, deleteTask } from './app.actions.js';
import styles from './app.module.scss';
import { EMPTY_OBJECT, EMPTY_ARRAY } from '../../constants';
import { errorCheck, isEmpty } from './app.helper.js';

const FORM_KEYS_TO_VALIDATE = ['title', 'description'];
const INTIAL_STATE = {
    showAddNew : false,
    formValues: EMPTY_OBJECT,
    formErrors: EMPTY_OBJECT,
 };

export class TasksList  extends React.Component{
    state = INTIAL_STATE;

    componentDidMount(){
        const { getTasks } = this.props;
        getTasks();
    }

    updateFormValues = (values) => {
        this.setState((prevState)=>({
            formValues: {...prevState.formValues, ...values},
        }));
    }

    handleEdit = (task)=>{
        this.setState((prevState)=>({
            formValues: {...prevState.formValues, ...task},
            showAddNew: true,
        }));
    }

    handleDelete = (task) => {
      const { deleteTask } = this.props;
      deleteTask(task);
    }
    
    handleSuccess = () => {
       const { formValues } = this.state;
       const { createTask, editTask } = this.props;
       const errors = errorCheck(formValues, FORM_KEYS_TO_VALIDATE);
       if(isEmpty(errors))
       {
            if(formValues.id !== undefined)
            {
                editTask(formValues, this.handleCancel)
            }
            else{
                createTask(formValues, this.handleCancel)
            }
        }
        else{
            this.setState({
                formErrors: errors,
            })
        }
    }

    handleCancel = () => {
        this.setState({
            showAddNew: false,
            formValues: EMPTY_OBJECT,
            formErrors: EMPTY_OBJECT
        })
    }

    handleAdd = () => {
        this.setState({
            showAddNew: true,
            formValues: EMPTY_OBJECT,
            formErrors: EMPTY_OBJECT,
        })   
    }

    renderModal=()=>{
        const { showAddNew, formValues, formErrors } = this.state;
        const { isAsync } = this.props;
        return (
            <Modal 
             visible={showAddNew}
             title = 'Task'
             okButtonProps={{ loading: isAsync}}
             onOk={this.handleSuccess}
             onCancel={this.handleCancel}
            >
              <AddEditTask formErrors={formErrors} formValues={formValues} updateFormValues={this.updateFormValues}/>
            </Modal>
        )
    }

    renderRow = index => {
        return (
            <Task task={this.props.tasks[index]} handleDelete={this.handleDelete} handleEdit={this.handleEdit} key={index}/>
        );
    }

    renderNoTask = () =>{
        return (
            <div id="noTask" className={styles.Task}> No Task Found <Icon type="frown" /></div>
        );
    }

    render(){
        const { tasks } = this.props;
        return(
            <div className={styles.page}>
                <div className={styles.AddNew}>
                    <Button type="primary" onClick={this.handleAdd} icon="plus-square" >
                      Add Task
                     </Button>
                </div>
                <div className ={styles.ListContainer}>
                    <div className={styles.List}>
                    {tasks.length === 0 && this.renderNoTask()}
                    <ReactProgressiveList
                        rowHeight={80}
                        className={styles.row}
                        rowRenderer={this.renderRow}
                        rowCount={tasks.length} 
                        initialAmount={tasks.length>8? 8 : tasks.length}
                        progressiveAmount={20}
                        renderItem={this.renderRow}
                        renderLoader={() => (<div className={styles.task}><Spin size="large" /></div>)}
                        useWindowScroll
                        />
                    </div>
                </div>
                {this.renderModal()}
            </div>
        )
    }
};

TasksList.defaultProps ={
    tasks: EMPTY_ARRAY,
}
const mapStateToProps = state => ({
    tasks: _values(_get(state.todo, 'tasks')),
    isAsync: _get(state.todo, 'isAsync'),
});

const mapDispatchToProps = {
    getTasks,
    createTask,
    editTask,
    deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
