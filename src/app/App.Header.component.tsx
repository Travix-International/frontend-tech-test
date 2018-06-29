import * as React from 'react';
import { Menu } from 'semantic-ui-react'
import {withRouter} from "react-router-dom";
import {routePaths} from "./constants/App.route-paths";

class AppHeaderComponent extends React.Component<any> {
    render() {
        const currentPath = this.props.location && this.props.location.pathname || undefined;

        return (
            <Menu>
                <Menu.Item name='home' active={currentPath === routePaths['home']} onClick={this.goToList}>
                    Home
                </Menu.Item>
                <Menu.Item name='tasks' active={currentPath === routePaths['tasks']} onClick={this.goToList}>
                    Tasks
                </Menu.Item>
            </Menu>
        )
    }

    goToList = (e, { name }) => { this.props.history.push(routePaths[name]); };
}

export default withRouter(AppHeaderComponent);
