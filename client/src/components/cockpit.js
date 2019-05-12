import React  from 'react';
import './cockpit.css';

const Cockpit = (props) => {
      return (
        <div className="titleContainer">
            <div className="title">
                {props.title}
            </div>
        </div>
      )
}

export default Cockpit;