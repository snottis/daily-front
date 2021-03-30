import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { dispatch } from '../../store';
import { closeDrawer } from '../../reducers/drawer';

interface DrawerButtonProps {
  link: string;
  text: string;
  children: Array<React.ReactElement> | React.ReactElement | null;
}

const DrawerButton = ({
  link,
  text,
  children,
}: DrawerButtonProps): React.ReactElement => {
  const history = useHistory();
  const handleClick = () => {
    history.push(link);
    dispatch(closeDrawer());
  };
  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default DrawerButton;
