import * as React from 'react';
import {Grid} from "semantic-ui-react";
import {RouteComponentProps, withRouter} from "react-router-dom";

export interface ComponentProps {}
class HomeVersionAComponent extends React.Component<ComponentProps & RouteComponentProps<any>> {
    render() {
        return (
            <Grid celled={false}>
                <Grid.Row>
                    <Grid.Column width={16}>
                        Welcome. This is Experiment A.
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default withRouter(HomeVersionAComponent);