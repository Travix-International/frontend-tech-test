import React from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask } from '../reducers/tasks';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DescriptionIcon from '@material-ui/icons/Description';

const Task = (props) => {
  return (

    <div className="card">
    <div className="card-header" id="headingOne">
      <h4 style={{minWidth:'150px'}} className="float-left">{props.Name}</h4>
      <div className="mb-0 float-right">
        <button className="btn btn-link mr-1" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <DescriptionIcon/>
        </button>
        <button className="btn btn-info mr-1" type="button" onClick={() => {
          props.editTask(props.Obj.id, props.Obj)}}><EditIcon/></button>
        <button className="btn btn-dark mr-1" type="button" onClick={() => props.deleteTask(props.Obj.id)}><DeleteIcon/></button>
      </div>
    </div>

    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
        {props.Description}
      </div>
    </div>
  </div>


  );
};

const mapDispatch = {editTask, deleteTask};
export default connect(null, mapDispatch)(Task);
