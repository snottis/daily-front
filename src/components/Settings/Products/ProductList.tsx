import React, { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Button,
} from '@material-ui/core';

import service from '../../../services/productsService';

const ProductList = (): React.ReactElement => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const res = await service.getAll();
      if (res.error) console.log(res);
      else {
        setProducts(res);
      }
    }
    getProducts();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">GTIN</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Lotsize</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row: any) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.gtin}</TableCell>
              <TableCell align="right">{row.value} €</TableCell>
              <TableCell align="right">{row.lotsize} pcs</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary">
                  Hide
                </Button>
                <Button variant="contained" color="secondary">
                  Modify
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
