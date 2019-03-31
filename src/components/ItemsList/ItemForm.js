import React from "react";
import PropTypes from "prop-types";

const ItemForm = ({
  todoItem,
  onSave,
  handleChange,
  handleDescriptionChange
}) => {
  return (
        <div className="card">
        <h5 className="card-header">Tell us what needs to get done.</h5>
        <div className="card-body">
        <form onSubmit = {onSave}>
                <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" value={todoItem.title} onChange={handleChange} placeholder="Title" required/>
                </div>
                <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" rows="3" id="description" value={todoItem.description} onChange={handleDescriptionChange} placeholder="
                        Your taks description goes here"></textarea>                
                </div>
            <button type="submit" className="btn btn-dark">Add Item</button>
        </form>
        </div>
        </div>
  );
};

ItemForm.propTypes = {
  todoItem: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default ItemForm;
