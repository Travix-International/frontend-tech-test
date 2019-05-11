import React from 'react';
import { connect } from "react-redux";

const InfoMessage = (props) => {
    return (
        <div className="col-md-6">
            <div className="alert alert-success" role="alert">
                This is a success alert—check it out!
            </div>
        </div>
    );
}

export default InfoMessage;
