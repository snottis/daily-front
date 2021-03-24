import React from 'react';
import { Box } from '@material-ui/core';
import LoginForm from './LoginForm';

const LoginPage = (): React.ReactElement => {
  return (
    <Box
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
