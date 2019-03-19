import React from 'react';
import { observe } from 'frint-react';

import { Spinner } from './components/Icons';

class Loader extends React.PureComponent {
    render() {
        return (
            <div className={`modal modal-overlay is-opened`}>
                <Spinner />
            </div>
        );
    }
}

export default observe((app) => {

})(Loader);
