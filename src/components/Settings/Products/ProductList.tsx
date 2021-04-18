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
import ModifyProductDialog from './ModifyProductDialog';
import { getProducts } from '../../../reducers/product';
import { useAppDispatch, useAppSelector } from '../../../hooks/storeHooks';

const ProductList = (): React.ReactElement => {
  const products = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const hiddenProduct = async (id: string, hidden: boolean) => {
    const res = await service.update(id, { hidden: !hidden });
  };
  const setupModal = (prod: any): void => {
    setModalProduct(prod);
    setModal(true);
  };
  const changeModal = (): void => {
    setModal(!modal);
  };
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <ModifyProductDialog
        product={modalProduct}
        open={modal}
        onClose={changeModal}
      />
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => hiddenProduct(row.id, row.hidden)}
                  >
                    {row.hidden ? 'Show' : 'Hide'}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setupModal(row)}
                  >
                    Modify
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductList;
