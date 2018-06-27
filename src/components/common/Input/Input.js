import React, { Component } from "react";

class Input extends Component {

  render() {
  	const { placeholder, name, id, customClass, label, onChangeFunc, value } = this.props;
    
    return (
      <div className="form-item">
      	<label htmlFor={id}>{label}</label>
      	<input type="text" placeholder={placeholder} name={name} id={id} className={customClass} onChange={onChangeFunc} 
      	value={value}
      	/>
      </div>
    );
  }
}

export default Input;