import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import StateScreen from '@components/StateScreen';

const Icon = <FontAwesomeIcon icon={faFrown} size="4x" />;
const Error = () =>
    <StateScreen
        icon={Icon}
        text="Oops! Something is wrong."
    />


export default Error;