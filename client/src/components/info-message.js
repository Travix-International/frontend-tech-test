import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { message: state.message.message, messageId: state.message.messageId };
};

class ConnectedInfoMessage extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            visible:false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.messageId !== prevProps.messageId) {
            this.setState(()=>({visible:true}),()=>{
                setTimeout(()=>{
                    this.setState(()=>({visible:false}));
                }, 3000)
            })
        }
    }
    
    render() {
        return (
            <div className="col-md-6">
                {this.state.visible && <div className="alert alert-dark alert-dismissible" role="alert">
                    {this.props.message}
                </div>}
            </div>
        );
    }
}

const InfoMessage = connect(mapStateToProps)(ConnectedInfoMessage);

export default InfoMessage;
