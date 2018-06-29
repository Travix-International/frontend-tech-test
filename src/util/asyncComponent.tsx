///<reference path="../../node_modules/@types/react/index.d.ts"/>
import * as React from 'react';
import * as Nprogress from 'nprogress';
import ReactPlaceholder from 'react-placeholder';
import 'nprogress/nprogress.css';
import 'react-placeholder/lib/reactPlaceholder.css';

export default function asyncComponent(importComponent: any) {
    class AsyncFunc extends React.Component<any, {component: any}> {
        private mounted: boolean;

        public readonly state: any = {
            component: false
        };

        constructor(props: any) {
            super(props);
        }

        componentWillMount() {
            Nprogress.start();
        }

        componentWillUnmount() {
            this.mounted = false;
        }

        async componentDidMount() {
            this.mounted = true;
            const {default: Component} = await importComponent();
            Nprogress.done();
            if (this.mounted) {
                this.setState({
                    component: <Component {...this.props} />
                });
            }
        }

        render() {
            const Component = this.state.component || <div/>;
            return (
                <ReactPlaceholder type="text" rows={7} ready={Component !== null}>
                    {Component}
                </ReactPlaceholder>
            );
        }
    }

    return AsyncFunc;
}
