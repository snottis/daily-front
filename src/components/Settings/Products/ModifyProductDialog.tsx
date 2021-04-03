/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';

import useInput from '../../../hooks/useInput';
import { Product } from '../../../types/Product';
import service from '../../../services/productsService';

const ModifyProductDialog = ({
  product,
  open,
  onClose,
}: {
  product: Product;
  open: boolean;
  onClose: () => void;
}): React.ReactElement => {
  const name = useInput(product.name);
  const gtin = useInput(product.gtin);
  const value = useInput(product.value);
  const lotsize = useInput(product.lotsize);
  React.useEffect(() => {
    name.set(product.name as string);
    gtin.set(product.gtin as string);
    value.set(product.value as number);
    lotsize.set(product.lotsize as number);
  }, [product]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await service.update(product.id as string, {
      name: name.value as string,
      gtin: gtin.value as string,
      value: value.value as number,
      lotsize: lotsize.value as number,
    });
    console.log(res);
    if (res.error) {
      console.log(res.error);
    }
  };
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="product-edit">
      <DialogTitle id="product-edit-title">Edit product</DialogTitle>
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
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ModifyProductDialog;
