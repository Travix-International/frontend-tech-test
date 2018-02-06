import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.showLoading = this.showLoading.bind(this);
    }

    showLoading(){
        const { todo } = this.context.store.getState();
        if (todo.sending) {
            this.setState({show:true});
        } else {
            this.setState({show:false});
        }
    }

    componentWillMount(){
        this.context.store.subscribe(this.showLoading);
    }

    render(){
        return (
            <div className={this.state.show ? 'loading show': 'loading'}>
                <i class="fa fa-spinner"></i>
            </div>
        );
    }
}

Loading.contextTypes = {
    store: PropTypes.object
};

export default Loading;