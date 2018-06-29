import * as React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from "react-router";
import ReduxToastr from "react-redux-toastr";
import {ErrorWrapper} from "./viewModels/ErrorWrapper";
import asyncComponent from '../util/asyncComponent';
import {routePaths} from "./constants/App.route-paths";
import Header from "./App.Header.component";
import {injectAsyncReducer} from "../store";
import {store} from "../Index.component";
import {Container} from "semantic-ui-react";

export interface AppComponentStateProps {
    loading: boolean;
    error?: ErrorWrapper;
}
export interface AppComponentDispatchProps {}
class AppComponent extends React.Component<AppComponentStateProps & AppComponentDispatchProps> {

    render() {
        const {loading, error} = this.props;

        if (loading) {
            return <div>Loading</div>;
        }
        if (error) {
            return <div>[ERROR] {error.title}: {error.description}</div>
        }

        return (
            <Container>
                <Header />

                <Switch>
                    <Route
                        exact={true}
                        path={routePaths.home}
                        component={asyncComponent(async () => await import('./routes/Home/Home.component'))}
                    />

                    <Route exact={true} path={routePaths.tasks}
                       component={asyncComponent(async () => {
                           const container = await import('./routes/Tasks/Tasks.container');
                           const reducer = await import('./routes/Tasks/Tasks.reducer');
                           injectAsyncReducer(store, reducer.REDUCER_NAME__TASKS, reducer.default);
                           return container;
                       })}/>
                </Switch>

                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates={true}
                    position="top-center"
                    transitionIn="bounceInDown"
                    transitionOut="bounceOutUp"
                    progressBar={true}
                />
            </Container>
        );
    }
}

export default AppComponent;

