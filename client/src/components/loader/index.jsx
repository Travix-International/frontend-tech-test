import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from './img/spinner.svg';
import './styles.less';

export const Loader = props => (props.loading ? (
    <div className="loader">
        <img className="loader__image" src={Spinner} />
    </div>
) : null);

Loader.propTypes = {
    loading: PropTypes.bool,
};

Loader.defaultProps = {
    loading: false,
};

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, null)(Loader);
