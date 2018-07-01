import * as React from 'react';
import {Button, Container, Header} from "semantic-ui-react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import Experiment from "react-ab-test/lib/Experiment";
import Variant from "react-ab-test/lib/Variant";
import emitter from "react-ab-test/lib/emitter";
import HomeVersionAComponent from './Home.inner-version-a.component';
import HomeVersionBComponent from './Home.inner-version-b.component';
import './Home.component.css';
emitter.defineVariants("My Experiment", ["B", "A"], [95, 5]);

export interface ComponentProps {}
class HomeComponent extends React.Component<ComponentProps & RouteComponentProps<any>> {
    render() {
        return (
            <div>
                <Container>
                    <Header as="h2">Travix frontend assignment. &nbsp;
                        <Button.Group>
                            <Button secondary={true} onClick={e => emitter.setActiveVariant('My Experiment', 'B')}>Variant B</Button>
                            <Button.Or />
                            <Button secondary={true} onClick={e => emitter.setActiveVariant('My Experiment', 'A')}>Variant A</Button>
                        </Button.Group>
                    </Header>
                </Container>

                <Experiment ref="experiment" name="My Experiment">
                    <Variant name="B">
                        <HomeVersionBComponent />
                    </Variant>
                    <Variant name="A">
                        <HomeVersionAComponent />
                    </Variant>
                </Experiment>
            </div>
        )
    }
}

// Called when the experiment is displayed to the user.
emitter.addPlayListener(function(experimentName, variantName){
    console.log("Displaying experiment ‘" + experimentName + "’ variant ‘" + variantName + "’");
});

// Called when a 'win' is emitted, in this case by this.refs.experiment.win()
emitter.addWinListener(function(experimentName, variantName){
    console.log("Variant ‘" + variantName + "’ of experiment ‘" + experimentName + "’  was clicked");
});

export default withRouter(HomeComponent);