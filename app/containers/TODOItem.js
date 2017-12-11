//Third Party
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Components
import TODOItemComponent from '../components/TODOItem'

//Actions
import { TODODone } from '../redux/actions/TODODone'
import { ModalReadOnly } from '../redux/actions/ModalReadOnly'

class TODOItemContainer extends React.Component {

    onChecked (event) {
        //Set TODO completed property to target.checked to keep it updated
        this.props.TODO.completed = event.target.checked;

        if (event.target.checked) {
            this.props.onChecked(this.props.TODO);
        }
    }

    onClick (event) {
        this.props.openDetail(this.props.TODO);
    }

    render () {
        return (
          <TODOItemComponent 
            TODO={this.props.TODO} 
            onChecked={event => this.onChecked(event)} 
            onClick={event => this.onClick(event)}
          />  
        );
    }

}

TODOItemContainer.propTypes = {
    onChecked: PropTypes.func,
    openDetail: PropTypes.func,
    TODO: PropTypes.object
}

const mapStateToProps = (state, props) => {
    return {
        TODO: state.TODOReducer[props.TODO._id]
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

        onChecked: (TODO) => {
            dispatch(TODODone(TODO))
        },

        openDetail: (TODO) => {
            dispatch(ModalReadOnly(TODO))
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TODOItemContainer)