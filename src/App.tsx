import React from 'react';

import './App.css';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { RootState } from './store';
import LoginPage from './components/Login/LoginPage';

function App(): React.ReactElement {
  const user = useSelector((state: RootState) => state.user);
  if (!user)
    return (
      <Container component="main" maxWidth="xs">
        <LoginPage />
      </Container>
    );
  return (
    <Container className="App">
      <p>Hello World</p>
    </Container>
  );
}
export default App;
