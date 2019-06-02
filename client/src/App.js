import React from 'react';
import Container from '@material-ui/core/Container';

import Tasks from './containers/Tasks';

const App = () => (
  <Container maxWidth="sm">
    <Tasks />
  </Container>
);

export default App;
