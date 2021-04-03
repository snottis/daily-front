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
import service from '../../../services/productsService';

const AddProductForm = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}): React.ReactElement => {
  const name = useInput('');
  const gtin = useInput('');
  const value = useInput('');
  const lotsize = useInput('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await service.create(
      String(name.value),
      String(gtin.value),
      value.value as number,
      lotsize.value as number,
    );
    if (res.error) {
      console.log(res.error);
    }
  };
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="product-edit">
      <DialogTitle id="product-edit-title">Add product</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            id="name"
            value={name.value}
            onChange={name.onChange}
            label="Product name"
            fullWidth
          />
          <TextField
            id="gtin"
            value={gtin.value}
            onChange={gtin.onChange}
            label="GTIN"
            fullWidth
          />
          <TextField
            id="value"
            value={value.value}
            onChange={value.onChange}
            label="Value"
            fullWidth
          />
          <TextField
            id="lotsize"
            value={lotsize.value}
            onChange={lotsize.onChange}
            label="Lotsize"
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

export default AddProductForm;
