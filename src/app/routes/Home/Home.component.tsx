import * as React from 'react';
export interface ComponentProps {}
class Component extends React.Component<ComponentProps> {
    render() {
        return (
            <div>
                Welcome home.
            </div>
        )
    }
}

export default Component;