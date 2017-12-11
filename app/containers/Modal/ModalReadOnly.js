//Third Party
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Components
import ModalReadOnly from '../../components/Modal/ModalReadOnly'

//Actions
import { ModalClose } from '../../redux/actions/ModalClose'
import { ModalUpdate } from '../../redux/actions/ModalUpdate'

class ModalReadOnlyContainer extends React.Component {

    render () {
        return (
          <ModalReadOnly 
            TODO={this.props.TODO} 
            close={this.props.closeModal}
            open={this.props.open}
            update={() => this.props.updateModal(this.props.TODO)}
          />
        );
    }

}

ModalReadOnlyContainer.propTypes = {
    open: PropTypes.bool,
    TODO: PropTypes.object,
    closeModal: PropTypes.func,
    updateModal: PropTypes.func
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

        updateModal: (TODO) => {
            dispatch(ModalUpdate(TODO))
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalReadOnlyContainer)