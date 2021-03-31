/* eslint-disable react/jsx-props-no-spreading */

import React, { SyntheticEvent, useState } from 'react';
import {
  TextField,
  Grid,
  Button,
  ButtonGroup,
  Box,
  Fade,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import useInput from '../../hooks/useInput';
import { login } from '../../services/loginService';
import { dispatch } from '../../store';
import { setUser } from '../../reducers/user';

import './Login.css';

const LoginForm = (): React.ReactElement => {
  const [error, setError] = useState(false);
  const username = useInput('');
  const password = useInput('');
  const handleForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await login(username.value as string, password.value as string);
    if (!res.error) dispatch(setUser(res));
    else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <Box justifyItems="center">
      <Fade in={error} unmountOnExit mountOnEnter>
        <Alert
          variant="filled"
          icon={false}
          severity="error"
          style={{ marginBottom: '5px' }}
        >
          Error logging in!
        </Alert>
      </Fade>

      <form onSubmit={handleForm}>
        <Grid
          container
          justify="center"
          direction="column"
          spacing={1}
          alignItems="center"
        >
          <Grid item>
            <TextField
              name="username"
              variant="outlined"
              {...username}
              fullWidth
              autoFocus
              id="username"
              label="Username"
            />
          </Grid>
          <Grid item>
            <TextField
              name="password"
              {...password}
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item>
            <ButtonGroup fullWidth color="primary">
              <Button type="submit">Log in</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LoginForm;
