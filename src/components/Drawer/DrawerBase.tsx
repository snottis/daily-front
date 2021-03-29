import React from 'react';
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { MoveToInbox, Mail, AccountCircle, Settings } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../store';
import styles from './styles';
import DrawerButton from './DrawerButton';

const DrawerBase = (): React.ReactElement => {
  const history = useHistory();
  const user = useSelector((state: RootState) => state.user) as any;
  const classes = styles();
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
      <List>
        <DrawerButton link="/settings" text="Settings">
          <Settings />
        </DrawerButton>
      </List>
    </div>
  );
};

export default DrawerBase;
