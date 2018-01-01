import { connect } from 'react-redux';
import { hidePopup } from '../../actions/popup';
import Popup from './component';

const mapStateToProps = (state, ownProps) => ({
    visible: state.popup.current === ownProps.id,
    message: state.popup.message,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onHide: () => {
            dispatch(hidePopup());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
