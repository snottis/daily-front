import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  Hidden,
  Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import styles from './styles';
import DrawerBase from './DrawerBase';
import Bar from './Bar';
import { dispatch, RootState } from '../../store';
import { toggleDrawer } from '../../reducers/drawer';

const ResponsiveDrawer = (props: any): React.ReactElement => {
  const mobileOpen = useSelector((state: RootState) => state.drawer);
  const { children } = props;
  const classes = styles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Bar openDrawer={handleDrawerToggle} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={undefined}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerBase />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerBase />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default ResponsiveDrawer;
