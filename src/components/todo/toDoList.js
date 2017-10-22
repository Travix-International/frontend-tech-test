import React, { Component } from 'react';
import ToDo from './toDo';
import { Modal, Button, FormGroup, FormControl, Glyphicon, Label } from 'react-bootstrap';

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            modalId: "",
            modalTitle: "",
            modalDescription: ""
        }
    }

    getInitialState() {
        return { showModal: false };
    };
    
    close(e) {
        this.setState({ showModal: false, modalId:"", modalTitle: "", modalDescription:"" });
    };
    
    open(id, title, description) {
        this.setState({ showModal: true, modalId:id, modalTitle: title, modalDescription:description });
    };

    handleTitleChange(e) {
        this.setState({ modalTitle: e.target.value });
    };

    handleDescriptionChange(e) {
        this.setState({ modalDescription: e.target.value });
    };

    render(){
        let message = "";
        
        if (this.props.errorUpdating){
            message = <Label bsStyle="danger">Error while saving!</Label>
        } else if (this.props.updating){
            message = <Label bsStyle="info">Saving updates!</Label>
        } 
 
        return(
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.tasksList.map((task) => {
                                return <ToDo task={task} key={task.id}
                                        openModal={this.open.bind(this, task.id, task.title, task.description)} 
                                        deleteTask={this.props.deleteTask.bind(this, task.id)}  />
                            })
                        }
                    </tbody>
                </table>

                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                    <FormGroup controlId="formControlsTitle">
                        <FormControl type="text" value={this.state.modalTitle} onChange={e => this.handleTitleChange(e)}  />
                    </FormGroup>
                    <FormGroup controlId="formControlsDescription">
                        <FormControl componentClass="textarea" value={this.state.modalDescription} onChange={e => this.handleDescriptionChange(e)} />
                    </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="text-center botSeparated">
                        {message}
                    </div>
                    <Button bsSize="large" 
                        className="updateBtn" 
                        bsStyle="warning"
                        onClick={() => this.props.updateTask(this.state.modalId, this.state.modalTitle, this.state.modalDescription)}>
                        <Glyphicon glyph="ok-sign" /> Update</Button>
                </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ToDoList;