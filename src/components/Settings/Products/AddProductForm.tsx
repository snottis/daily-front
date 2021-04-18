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
  const handleSubmit = async (data: any) => {
    const res = await service.create(
      data.name,
      data.gtin,
      data.value as number,
      data.lotsize as number,
    );
    if (res.error) {
      console.log(res.error);
    }
  };
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="product-edit">
      <DialogTitle id="product-edit-title">Add product</DialogTitle>
      <Form onSubmit={handleSubmit}>
        {(props: any) => (
          <form onSubmit={props.handleSubmit}>
            <DialogContent>
              <TextField name="name" label="Product name" fullWidth required />
              <TextField name="gtin" label="GTIN" fullWidth required />
              <TextField name="value" label="Value" fullWidth required />
              <TextField name="lotsize" label="Lotsize" fullWidth required />
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

export default AddProductForm;
