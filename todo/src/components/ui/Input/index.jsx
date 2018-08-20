import React, {
  Fragment
} from 'react';
import styles from './Input.css';

const Input = props => {
  const {
    area
  } = props;
  const inputField = area ?
    <textarea
      value = {
        props.value
      }
      onChange = {
        props.onChange
      }
      className = {
        styles.area
      }
      name = {
        props.name
      }
      placeholder = {
        props.bgText
      }
  />: <input
      value = {
        props.value
      }
      onChange = {
        props.onChange
      }
      className = {
        styles.input
      }
      name = {
        props.name
      }
      placeholder = {
        props.bgText
      }
      type = {
        props.type
      }
  />;
  return ( <Fragment>{
      inputField
    }</Fragment>
  );
};
export default Input;