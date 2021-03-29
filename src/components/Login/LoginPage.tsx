/* eslint-disable react/jsx-props-no-spreading */

import React, { CSSProperties } from 'react';
import { Box } from '@material-ui/core';
import LoginForm from './LoginForm';

const LoginPage = (props: any): React.ReactElement => {
  return (
    <Box
      {...props}
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
