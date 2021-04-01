/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import useInput from '../../../hooks/useInput';
import service from '../../../services/productsService';

const AddProductForm = (): React.ReactElement => {
  const name = useInput('');
  const gtin = useInput('');
  const value = useInput(null);
  const lotsize = useInput(null);
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
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item>
            <TextField name="name" {...name} id="name" label="Product name" />
          </Grid>
          <Grid item>
            <TextField name="value" {...value} id="value" label="Value" />
          </Grid>
          <Grid item>
            <TextField name="gtin" {...gtin} id="gtin" label="GTIN" />
          </Grid>
          <Grid item>
            <TextField
              name="lotsize"
              {...lotsize}
              id="lotsize"
              label="Lotsize"
            />
          </Grid>
          <Grid item>
            <Button type="submit">Add product</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProductForm;
