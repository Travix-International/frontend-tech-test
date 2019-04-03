import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './index.scss';
interface Props {
    checked: boolean;
}

const Checkbox = ({ checked }: Props) => (
    <FontAwesomeIcon
        className={`${styles.checkbox} ${checked ? styles.checked : ''}`}
        icon={faCheckCircle}
        size="2x"
    />
);

export default Checkbox;