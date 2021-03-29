/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import ResponsiveDrawer from './Drawer/ResponsiveDrawer';

const MainWindow = (props: any): React.ReactElement => {
  return (
    <Box {...props} fullWidth>
      <ResponsiveDrawer />
    </Box>
  );
};

export default MainWindow;
