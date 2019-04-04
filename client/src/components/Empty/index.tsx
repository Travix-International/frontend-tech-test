import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import StateScreen from '@components/StateScreen';

const Icon = <FontAwesomeIcon icon={faGlassCheers} size="4x" />;
const Empty = () =>
    <StateScreen
        icon={Icon}
        text="You don't have any tasks today! Cheers!"
    />


export default Empty;