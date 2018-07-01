import * as React from 'react';
import {Button} from "semantic-ui-react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import image from './assets/me.jpg';
import {routePaths} from "../../constants/App.route-paths";
import Anime from 'react-anime';
const Anime1: any = Anime; // this library has a lot of required props which are not required actually

export interface ComponentProps {}
class HomeVersion1Component extends React.Component<ComponentProps & RouteComponentProps<any>> {
    render() {
        return (
            <div className="Home-component__ver-b-main">
                <img src={image} width="100" height="100" className="avatar"/>

                <Anime1 opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
                    <h2>Hello, I'm Jevgeni Rumjantsev. <br/>I'm a Fullstack developer.</h2>
                    <section>
                        <p>For this assignment...</p>
                    </section>
                    <section>
                        <p>...I've been using technologies like...</p>
                    </section>
                    <section>
                        <p>...React & Redux...</p>
                    </section>
                    <section>
                        <p>...reactstrap & semantic-ui...</p>
                    </section>
                    <section>
                        ...rxjs...
                    </section>
                    <section>
                        ...and as for backend, it's written in express...
                    </section>
                    <section>
                        ...and fully tested using integration tests like chai, chai-http and mocha.
                    </section>
                    <section>
                        Have fun with task list management.
                    </section>
                    <section>
                        <Button positive={true} content={"Manage tasks"} onClick={e => this.props.history.push(routePaths.tasks)} />
                    </section>
                </Anime1>
            </div>
        )
    }
}

export default withRouter(HomeVersion1Component);