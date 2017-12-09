//Third Party
import React from 'react'
import { connect } from 'react-redux'

//Components
import TODOListComponent from '../components/TODOList'

//Actions
import {TODOList} from '../redux/actions/TODOList'

class TODOListContainer extends React.Component {

    componentDidMount () {
        this.props.fetchTODOS();
    }

    render () {
        return <TODOListComponent 
                    TODOS={this.props.TODOS} 
                    search={this.props.search}
                    tag={this.props.tag}/>;
    }

}

const mapStateToProps = (state, props) => {
    return {
        TODOS: state.TODOReducer,
        search: state.HeaderReducer.search,
        tag: state.HeaderReducer.tag
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchTODOS: () => {
            dispatch(TODOList())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TODOListContainer)