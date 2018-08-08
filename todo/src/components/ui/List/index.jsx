import React from 'react';
import './List.css';

const List = props => {
  const liClass = props.className ? `list_item ${props.className}` : "list_item";
  return (
    <ul className="list">
      {props.items.map((item, index) => (
          <li key={index} className={liClass} onClick={props.onClick}>{item}</li>
        ))
      }
    </ul>
  );
};
export default List;