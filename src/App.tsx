import React from 'react';

import './App.css';
import { useSelector } from 'react-redux';
import { Container, Zoom } from '@material-ui/core';
import { RootState } from './store';
import LoginPage from './components/Login/LoginPage';
import MainWindow from './components/MainWindow';

function App(): React.ReactElement {
  const user = useSelector((state: RootState) => state.user);
  const logged = Boolean(user);
  return (
    <Container component="main" maxWidth={false}>
      <Zoom in={!logged} timeout={500} mountOnEnter unmountOnExit>
        <LoginPage />
      </Zoom>
      <Zoom in={logged} timeout={2000} mountOnEnter unmountOnExit>
        <MainWindow />
      </Zoom>
    </Container>
  );

  /* return (
    <Container className="App">
      <Zoom in={user} timeout={5000}>
        <MainWindow />
      </Zoom>
    </Container>
  ); */
}
export default App;
