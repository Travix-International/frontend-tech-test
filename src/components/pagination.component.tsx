import * as React from 'react';
import { IPaginationProps, IPaginationState } from '../interfaces/interface';
import './../styles/pagination.scss'
export default class Pagination extends React.Component<IPaginationProps, IPaginationState>{
    constructor(props) {
        super(props);
        this.state = {
            currentQueue: [],
            activePage: 1,
            totalRecords:0
        }
    }
    getcurrentQueueSize = (props) => this.getTotalPages(props) > 5 ? 5 : Math.ceil(props.totalRecords/props.perPage)
    getTotalPages = (props) =>Math.ceil(props.totalRecords/props.perPage)
    componentDidMount() {
        this.setState({ currentQueue: new Array(this.getcurrentQueueSize(this.props)).fill(0).map((e, i) => i + 1) })
    }
    componentWillReceiveProps(nextProps: IPaginationProps) {
        let { totalRecords, activePage } = nextProps;
        let { currentQueue } = this.state;
        if (nextProps.totalRecords !== this.props.totalRecords) {
            currentQueue = new Array(this.getcurrentQueueSize(nextProps)).fill(0).map((e, i) => i + 1)
        }
        this.setState({ currentQueue, totalRecords, activePage })
    }
    onNextClick = () => {
        let lastCell = this.state.currentQueue[this.state.currentQueue.length - 1];
        if (this.state.activePage + 1 > this.getTotalPages(this.props)) {
            return;
        }else if(this.state.activePage+1>lastCell && this.state.activePage+1 <= this.getcurrentQueueSize(this.props)){
            this.alterQueue('+');
        }else{
            this.setActivePage(this.state.activePage+1)
        }
    }
    alterQueue = (opr) => {
        let { currentQueue, activePage } = this.state;
        switch (opr) {
            case '+': {
                currentQueue = currentQueue.map((e) => e + 1);
                activePage = activePage + 1;
                break;
            }
            case '-': {
                currentQueue = currentQueue.map((e) => e - 1);
                activePage = activePage - 1;
                break;
            }
        }
        this.setState({ currentQueue }, () => this.setActivePage(activePage));
    }
    onPrevClick = () => {
        let firstCell = this.state.currentQueue[0];
        if (firstCell - 1 <= 0) {
            return;
        }
        if(this.state.activePage-1<firstCell){
            this.alterQueue('-');
        }else{
            this.setActivePage(this.state.activePage-1)
        }
    }
    onLastClick = () => {
        this.setState({ currentQueue: new Array(this.getcurrentQueueSize(this.props)).fill(0).map((e, i) => this.getcurrentQueueSize(this.props) - i).reverse() },()=>{
            this.setActivePage(this.getcurrentQueueSize(this.props))
        })
    }
    onFirstClick = () => {
        this.setState({ currentQueue: new Array(this.getcurrentQueueSize(this.props)).fill(0).map((e, i) => i + 1) },()=>{
            this.setActivePage(1)
        })
    }
    setActivePage = (pageNo) => {
        this.setState({ activePage: pageNo }, () => this.props.onPageChange && typeof this.props.onPageChange === 'function' && this.props.onPageChange(this.state.activePage))
    }
    render() {
        return (
            <div className='pagination'>
                <div onClick={this.onFirstClick} className='pagination-cell'>{`<<`}</div>
                <div onClick={this.onPrevClick} className='pagination-cell'>{`<`}</div>
                <div className='pagination-cell-pages'>
                    {this.state.currentQueue.map((e) => {
                        return (
                            <div onClick={this.setActivePage.bind(this, e)} className={this.state.activePage === e?'pagination-cell active-page':'pagination-cell'} key={`pagination-cell-${e}`}>{`${e}`}</div>
                        )
                    })}
                </div>
                <div onClick={this.onNextClick} className='pagination-cell'>{`>`}</div>
                <div onClick={this.onLastClick} className='pagination-cell'>{`>>`}</div>
            </div>
        )
    }
}