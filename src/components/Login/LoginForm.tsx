/* eslint-disable react/jsx-props-no-spreading */

import React, { SyntheticEvent } from 'react';
import { TextField, Grid, Button, ButtonGroup, Box } from '@material-ui/core';
import useInput from '../../hooks/useInput';
import { login } from '../../services/loginService';
import { dispatch } from '../../store';
import { setUser } from '../../reducers/user';

import './Login.css';

const LoginForm = (): React.ReactElement => {
  const username = useInput('');
  const password = useInput('');
  const handleForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await login(username.value as string, password.value as string);
    dispatch(setUser(res));
  };

  return (
    <Box justifyItems="center">
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
