import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import TodoPage from 'containers/Todo/Page/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Todo App"
        defaultTitle="Todo App"
      >
        <meta name="description" content="Todo App" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
};

export default App;
