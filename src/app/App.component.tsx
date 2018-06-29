import * as React from 'react';
import {Route} from 'react-router-dom';
import {Switch} from "react-router";
import {ErrorWrapper} from "./viewModels/ErrorWrapper";
import asyncComponent from '../util/asyncComponent';
// import {store} from '../Index.component';
import ReduxToastr from "react-redux-toastr";
import {routePaths} from "./constants/App.route-paths";
// import {injectAsyncReducer} from "../store";

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
            <div className="app-container">
                <Switch>
                    <Route
                        exact={true}
                        path={routePaths.home}
                        component={asyncComponent(async () => await import('./routes/Home/Home.component'))}
                    />

                    {/* To-do logic */}

                    {/*<Route exact={true} path={routePaths.todo.list}*/}
                           {/*component={asyncComponent(async () => {*/}
                               {/*const container = await import('./routes/Todos/Todos.container');*/}
                               {/*const reducer = await import('./routes/Todos/Todos.reducer');*/}
                               {/*injectAsyncReducer(store, reducer.REDUCER_NAME__COMPANIES, reducer.default);*/}
                               {/*return container;*/}
                           {/*})}/>*/}
                    {/*<Route exact={true} path={routePaths.todo.new}*/}
                           {/*component={asyncComponent(async () => {*/}
                               {/*const container = await import('./routes/Todo/New');*/}
                               {/*const reducer = await import('./routes/Todo/Todo.reducer');*/}
                               {/*injectAsyncReducer(store, reducer.REDUCER_NAME__COMPANY, reducer.default);*/}
                               {/*return container;*/}
                           {/*})}/>*/}
                    {/*<Route path={routePaths.todo.edit}*/}
                           {/*component={asyncComponent(async () => {*/}
                               {/*const container = await import('./routes/Todo/Edit');*/}
                               {/*const reducer = await import('./routes/Todo/Todo.reducer');*/}
                               {/*injectAsyncReducer(store, reducer.REDUCER_NAME__COMPANY, reducer.default);*/}
                               {/*return container;*/}
                           {/*})}/>*/}
                </Switch>

                {/*<Footer/>*/}

                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates={true}
                    position="top-center"
                    transitionIn="bounceInDown"
                    transitionOut="bounceOutUp"
                    progressBar={true}
                />
            </div>
        );
    }
}

export default AppComponent;

