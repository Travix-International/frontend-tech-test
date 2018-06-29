import * as React from 'react';
import {Button, Container, Grid, Header, Image} from "semantic-ui-react";
import image from './assets/image.png';

export interface ComponentProps {}
class Component extends React.Component<ComponentProps> {
    render() {
        return (
            <Container>
                <Header as="h2">
                    Welcome home.
                </Header>

                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image src={image} />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            Manage tasks
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Button primary={true}>Manage tasks</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default Component;