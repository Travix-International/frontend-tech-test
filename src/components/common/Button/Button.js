import React, { Component } from "react";

class Button extends Component {

  render() {
  	const { id, customClass, onClickFunc, value } = this.props;
    return (
      <button onClick={onClickFunc} className={customClass} >{value}</button>
    );
  }
}

export default Button;