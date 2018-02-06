import { connect } from 'react-redux';

import Pager from '../components/Pager';

const mapStateToProps = ({ todo }) => {
    return {
        currPage: todo.currPage,
        totalItems: todo.totalItems
    };
};

const PagerContainer = connect(mapStateToProps)(Pager);

export default PagerContainer;
