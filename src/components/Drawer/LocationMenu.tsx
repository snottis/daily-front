import React from 'react';
import {
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import styles from './styles';

const options = ['Location 1', 'Location 2'];

const LocationMenu = (): React.ReactElement => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClose = () => setAnchorEl(null);

  const handleListClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <div style={{ marginLeft: 'auto' }}>
      <List disablePadding component="nav" aria-label="location selection">
        <ListItem
          className={classes.listItem}
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="selected location"
          onClick={handleListClick}
        >
          <ListItemText
            primary={options[selectedIndex]}
            secondary="Select location"
          />
        </ListItem>
      </List>
      <Menu
        id="LocationMenu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LocationMenu;
