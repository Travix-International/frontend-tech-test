import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { getTodos } from '../../actions/todoActions';

import Pagination from "react-js-pagination";

class Pager extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(pageNumber){
        this.props.dispatch(getTodos(pageNumber));
    }

    render(){
        return (
            <div class="pager" style={this.props.totalItems <= 100 ? {display: 'none'} : {}} >
                <Pagination
                    activePage={this.props.currPage}
                    itemsCountPerPage={100}
                    totalItemsCount={this.props.totalItems}
                    pageRangeDisplayed={5}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


Pager.propTypes = {
    currPage: PropTypes.number,
    totalItems: PropTypes.number,
    dispatch: PropTypes.func
};


export default Pager;