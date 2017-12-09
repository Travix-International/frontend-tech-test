//Third Party
import React from 'react'
import { connect } from 'react-redux'

//Components
import ModalReadOnlyContainer from './ModalReadOnly'
import ModalUpdateContainer from './ModalUpdate'

//Constants
import { MODAL_READONLY } from '../../redux/actions/ModalReadOnly'
import { MODAL_UPDATE } from '../../redux/actions/ModalUpdate'

class ModalContainer extends React.Component {

    render () {
        const MODAL = {
            [`${MODAL_READONLY}`]: <ModalReadOnlyContainer/>,
            [`${MODAL_UPDATE}`]: <ModalUpdateContainer/>
        }[this.props.type];

        return MODAL || null;
    }

}

const mapStateToProps = (state, props) => {
    return {
        type: state.ModalReducer.type
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalContainer)