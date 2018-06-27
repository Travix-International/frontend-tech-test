import React, { Component } from "react";

class Textarea extends Component {

  render() {
  	const { placeholder, name, id, customClass, label, onChangeFunc, rows, cols, value } = this.props;
    return (
      <div className="form-item">
      	<label htmlFor={id}>{label}</label>
      	<textarea placeholder={placeholder} name={name} id={id} className={customClass} onChange={onChangeFunc} rows={rows} cols={cols} 
      	value={value} >
      	</textarea>
      </div>
    );
  }
}

export default Textarea;