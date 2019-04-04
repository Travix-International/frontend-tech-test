import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './index.scss';

interface State {
    display: boolean;
}

class Spin extends React.PureComponent<{}, State> {
    state = {
        display: false,
    };

    private _isMounted: boolean = false;

    componentDidMount() {
        this._isMounted = true;
        // delay loading animations for .5s to avoid flickering
        setTimeout(() => {
            if (this._isMounted) {
                this.setState({ display: true });
            }
        }, 500);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { display } = this.state;
        if (!display) {
            return null;
        }

        return (
            <div className={styles.container}>
                <FontAwesomeIcon className={styles.icon} icon={faSpinner} size="4x" spin={true} />
            </div>
        );
    }
}

export default Spin;