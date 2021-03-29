import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles';
import LocationMenu from './LocationMenu';

interface BarProps {
  openDrawer: () => void;
}

const Bar = ({ openDrawer }: BarProps): React.ReactElement => {
  const classes = styles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          onClick={openDrawer}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <LocationMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
