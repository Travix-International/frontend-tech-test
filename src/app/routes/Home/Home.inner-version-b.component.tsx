import * as React from 'react';
import {Grid} from "semantic-ui-react";
import {RouteComponentProps, withRouter} from "react-router-dom";

export interface ComponentProps {}
class HomeVersion1Component extends React.Component<ComponentProps & RouteComponentProps<any>> {
    render() {
        return (
            <Grid celled={false}>
                <Grid.Row>
                    <Grid.Column width={16}>
                        This is AB experiment version B.
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default withRouter(HomeVersion1Component);