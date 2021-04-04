/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import useInput from '../../../hooks/useInput';

const AddUserDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}): React.ReactElement => {
  const username = useInput('');
  const password = useInput('');
  const locations = React.useState([]);
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="product-edit">
      <DialogTitle id="product-edit-title">Add product</DialogTitle>
      <form onSubmit={undefined}>
        <DialogContent>
          <TextField
            id="username"
            value={username.value}
            onChange={username.onChange}
            label="Username"
            fullWidth
          />
          <TextField
            id="password"
            value={password.value}
            onChange={password.onChange}
            label="Password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={onClose}>
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddUserDialog;
