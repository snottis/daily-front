/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';

const AddUserDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}): React.ReactElement => {
  const locations = React.useState([]);
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="product-edit">
      <DialogTitle id="product-edit-title">Add product</DialogTitle>
      <Form onSubmit={() => undefined}>
        {(props: any) => (
          <form onSubmit={props.onSubmit}>
            <DialogContent>
              <TextField name="username" label="Username" fullWidth />
              <TextField name="password" label="Password" fullWidth />
            </DialogContent>
            <DialogActions>
              <Button type="submit" onClick={onClose}>
                Add
              </Button>
            </DialogActions>
          </form>
        )}
      </Form>
    </Dialog>
  );
};

export default AddUserDialog;
