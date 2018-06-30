import * as React from 'react';
import {TasksReduxState} from "./Tasks.reducer";
import { BootstrapTable, Options, TableHeaderColumn } from 'react-bootstrap-table';
import CommonUtilities from '../../../helpers/CommonUtilities';
import TasksResponseViewModel from "./viewModels/TasksResponseViewModel";
import TaskForm from './Tasks.form.container';
import {Button, Container, Header} from "semantic-ui-react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export interface TasksComponentStateProps extends TasksReduxState {}
export interface TasksComponentDispatchProps {
    fetch: Function;

    createCancel: Function;
    createStart: Function;
    createSubmit: Function;

    updateCancel: Function;
    updateStart: Function;
    updateSubmit: Function;

    deleteCancel: Function;
    deleteStart: Function;
    deleteSubmit: Function;
}

function safe(key: keyof TasksResponseViewModel) {
    return CommonUtilities.typeSafeName<TasksResponseViewModel>(key);
}

type TasksComponentProps = TasksComponentStateProps & TasksComponentDispatchProps;

class TasksComponent extends React.Component<TasksComponentProps> {

    constructor(props: any) {
        super(props);

        this.getList = this.getList.bind(this);
        this.onChangeSuccess = this.onChangeSuccess.bind(this);

        this.handleCreateStart = this.handleCreateStart.bind(this);
        this.handleCreateCancel = this.handleCreateCancel.bind(this);
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this);

        this.handleUpdateStart = this.handleUpdateStart.bind(this);
        this.handleUpdateCancel = this.handleUpdateCancel.bind(this);
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);

        this.handleDeleteStart = this.handleDeleteStart.bind(this);
        this.handleDeleteCancel = this.handleDeleteCancel.bind(this);
        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
        this.actionFormat = this.actionFormat.bind(this);
    }

    render() {
        const { pendingDeleteId, pendingAdd, pendingUpdateId, confirmLoading } = this.props;
        const { data, pagination } = this.props.tableData;
        const { page, total, sizePerPage } = pagination;

        const tableOptions: Options = {
            page: page,
            sizePerPage: sizePerPage,
            sizePerPageList: [ 5, 10, 25 ]
        };

        return (
            <div>
                {/* Creating */}
                <Modal isOpen={pendingAdd} toggle={this.handleCreateCancel}>
                    <ModalHeader toggle={this.handleCreateCancel}>Creating</ModalHeader>
                    <ModalBody>
                        <TaskForm />
                    </ModalBody>
                    <ModalFooter>
                        <Button negative={true} onClick={this.handleCreateCancel} content="Cancel" disabled={confirmLoading} />
                        <Button positive={true} onClick={this.handleCreateSubmit} content="Save" disabled={confirmLoading} icon="checkmark"/>
                    </ModalFooter>
                </Modal>

                {/* Updating */}
                <Modal isOpen={!!pendingUpdateId && pendingUpdateId > 0} toggle={this.handleDeleteCancel}>
                    <ModalHeader>Updating</ModalHeader>
                    <ModalBody>
                        <TaskForm />
                    </ModalBody>
                    <ModalFooter>
                        <Button negative={true} onClick={this.handleUpdateCancel} content="Cancel" disabled={confirmLoading} />
                        <Button positive={true} onClick={this.handleUpdateSubmit} content="Save" disabled={confirmLoading} icon="checkmark"/>
                    </ModalFooter>
                </Modal>

                {/* Deleting */}
                <Modal isOpen={!!pendingDeleteId && pendingDeleteId > 0} toggle={this.handleDeleteCancel}>
                    <ModalHeader>Deleting</ModalHeader>
                    <ModalBody>Do you want to delete this</ModalBody>
                    <ModalFooter>
                        <Button negative={true} onClick={this.handleDeleteCancel} content="No" disabled={confirmLoading} />
                        <Button positive={true} onClick={this.handleDeleteSubmit} content="Yes" disabled={confirmLoading} icon="checkmark"/>
                    </ModalFooter>
                </Modal>

                <Container>
                    <Button positive={true} onClick={e => this.handleCreateStart()}>Add new task</Button>
                    <Header as="h2">
                        <i className="fa fa-key"/> Tasks
                    </Header>
                    <BootstrapTable
                        data={data}
                        version="3"
                        tableContainerClass="table vm no-th-brd pro-of-month table-hover"
                        tableBodyClass="bg-white"
                        bordered={false}
                        pagination={true}
                        remote={true}
                        fetchInfo={{ dataTotalSize: total }}
                        options={tableOptions}
                    >
                        <TableHeaderColumn isKey={true} hidden={true} dataField={safe('id')}>
                            Id
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField={safe('title')} dataSort={true} width="20%">
                            Title
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField={safe('description')} dataSort={true} width="20%">
                            Description
                        </TableHeaderColumn>
                        <TableHeaderColumn dataFormat={this.actionFormat} columnClassName="text-right" width="20%"/>
                    </BootstrapTable>
                </Container>
            </div>
        )
    }

    componentDidMount(): void { this.getList(); }

    getList(): void { this.props.fetch(); }
    onChangeSuccess(): void { this.getList(); }

    handleCreateStart(): void  { this.props.createStart(); };
    handleCreateCancel(): void  { this.props.createCancel(); };
    handleCreateSubmit(): void  { this.props.createSubmit(this.onChangeSuccess); };

    handleUpdateStart(id: number): void  { this.props.updateStart(id); };
    handleUpdateCancel(): void  { this.props.updateCancel(); };
    handleUpdateSubmit(): void  { this.props.updateSubmit(this.onChangeSuccess); };

    handleDeleteStart(id: number): void  { this.props.deleteStart(id); };
    handleDeleteCancel(): void  { this.props.deleteCancel(); };
    handleDeleteSubmit(): void  { this.props.deleteSubmit(this.onChangeSuccess); };

    actionFormat(cell: any, row: any): JSX.Element {
        return (
            <Button.Group>
                <Button primary={true} onClick={e => this.handleUpdateStart(row.id)}>Update</Button>
                <Button.Or />
                <Button negative={true} onClick={e => this.handleDeleteStart(row.id)}>Delete</Button>
            </Button.Group>
        );
    }
}

export default TasksComponent;