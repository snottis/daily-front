/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ResponsiveDrawer from './Drawer/ResponsiveDrawer';
import Settings from './Settings';

const MainWindow = (props: any): React.ReactElement => {
  return (
    <Box {...props} fullWidth>
      <Router>
        <ResponsiveDrawer>
          <Switch>
            <Route exact path="/">
              THIS IS MAINPAGE
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/profile">This is profile</Route>
          </Switch>
        </ResponsiveDrawer>
      </Router>
    </Box>
  );
};

export default MainWindow;
