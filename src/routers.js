import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ResultTable from './pages/WeatherSearch/components/Results/index';

const routes = (
    <Fragment>
        <Route
            path="/search/:city"
            component={ResultTable}
        />
    </Fragment>
);

export default routes;
