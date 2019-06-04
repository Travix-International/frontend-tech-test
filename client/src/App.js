import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';

import Tasks from './containers/Tasks';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: teal[800],
    },
    background: {
      default: orange[500],
      paper: orange[200],
    },
    type: 'light',
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      bottom="0"
      left="0"
      position="absolute"
      right="0"
      top="0"
    >
      <Container maxWidth="sm">
        <Tasks />
      </Container>
    </Box>
  </ThemeProvider>
);

export default App;
