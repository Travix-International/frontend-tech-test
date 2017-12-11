//Third Party
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Components
import ModalUpdate from '../../components/Modal/ModalUpdate'

//Actions
import { ModalClose } from '../../redux/actions/ModalClose'
import { TODOUpdate } from '../../redux/actions/TODOUpdate'

class ModalUpdateContainer extends React.Component {

    render () {
        return (
          <ModalUpdate 
            TODO={this.props.TODO} 
            close={this.props.closeModal}
            open={this.props.open}
            saveModal={this.props.saveModal}
          />
        );
    }

}

ModalUpdateContainer.propTypes = {
    open: PropTypes.bool,
    TODO: PropTypes.object,
    closeModal: PropTypes.func,
    saveModal: PropTypes.func
}

const mapStateToProps = (state, props) => {
    return {
        open: state.ModalReducer.open,
        TODO: state.ModalReducer.TODO
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        closeModal: (TODO) => {
            dispatch(ModalClose())
        },

        saveModal: (TODO) => {
            dispatch(TODOUpdate(TODO))
        },        

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalUpdateContainer)