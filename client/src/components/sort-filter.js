import React, { Component } from 'react';
import './sort-filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { filterTasks, getTasks } from '../actions/index';
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
      filterTasks: (query) => dispatch(filterTasks(query)),
      fetchTasks: () => dispatch(getTasks())
    };
}

class SortFilterForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         sortBy:'Sort By',
         filterBy:''
      }
      this.searchInput = React.createRef();
      this.sortSelection = this.sortSelection.bind(this);
    }

    componentDidMount() {
        // let existingParams = new URLSearchParams(this.props.history.location.search);
        // let existingSort = existingParams.has('sort') ? existingParams.get('sort') : "" ;
        // let existingFilter = existingParams.has('filter') ? existingParams.get('filter') : "";
        // this.setState(()=>{
        //     return {
        //         sortBy: existingSort,
        //         filterBy: existingFilter
        //     }; 
        // });
        this.searchInput.current.focus();
    }

    sortSelection = (e) => {
        e.preventDefault();
        let value = e.currentTarget.value;
        this.setState({sortBy:value}, ()=>{
            //this.props.sortCandidates(this.state.sortBy);
        });
    }

    change = (e) => {
        let value = e.currentTarget.value;
        this.setState(()=>({filterBy:value}), ()=> this.props.filterTasks(value));
        // if (value.length === 0) {
        //     this.props.fetchTasks();
        // }
    }

    render() {
      return (
            <div className= "form-row sortContainer">
                <div className="col-sm-4 my-1">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><FontAwesomeIcon icon="sort" aria-hidden="true"/></div>
                        </div>
                        <select className="form-control" onChange={this.sortSelection} value={this.state.sortBy}>
                                {this.props.sortOptions.map((option, index)=>{
                                return (
                                    <option key={index}>{option}</option>
                                );
                                })}
                        </select>
                    </div>
                </div>
                <div className="col-sm-4 my-1">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><FontAwesomeIcon icon="search" aria-hidden="true"/></div>
                        </div>
                        <input className="form-control" id="colFormLabelSm"
                            onChange = {this.change}
                            placeholder="Search..."
                            value={this.state.filterBy}
                            ref={this.searchInput}></input>
                    </div>
                </div>
            </div>
      )
    }
}

const SortFilter = connect(null, mapDispatchToProps)(SortFilterForm);

export default SortFilter;