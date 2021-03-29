import React from 'react';
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import { MoveToInbox, Mail, Settings, AccountCircle } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './styles';

const DrawerBase = (): React.ReactElement => {
  const user = useSelector((state: RootState) => state.user);
  const classes = styles();
  console.log(classes.toolbar);

  return (
    <div>
      <Box
        style={{ display: 'flex' }}
        className={classes.toolbar}
        alignItems="center"
      >
        <List>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={user.username} />
          </ListItem>
        </List>
      </Box>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default DrawerBase;
