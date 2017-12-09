//Third Party
import React from 'react'
import { connect } from 'react-redux'

//Components
import TODOAddComponent from '../components/TODOAdd'

//Actions
import {TODOAdd} from '../redux/actions/TODOAdd'

class TODOAddContainer extends React.Component {

    submit (TODO) {
        this.props.submitTODO(TODO);
    }

    render () {
        return (
            <TODOAddComponent submit={TODO => this.submit(TODO)} />
        );
    }

}

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        submitTODO: TODO => {
            dispatch(TODOAdd(TODO))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TODOAddContainer)