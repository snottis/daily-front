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

import service from '../../../services/usersService';

const UserList = (): React.ReactElement => {
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  /* const hiddenProduct = async (id: string, hidden: boolean) => {
    const res = await service.update(id, { hidden: !hidden });
  }; */
  const setupModal = (prod: any): void => {
    setModalProduct(prod);
    setModal(true);
  };
  const changeModal = (): void => {
    setModal(!modal);
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const res = await service.getAll();
      if (res.error) console.log(res);
      else {
        setUsers(res);
      }
    }
    getUsers();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Locations</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row: any) => (
              <TableRow key={row.username}>
                <TableCell component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell align="right">{row.locations.join(', ')}</TableCell>
                <TableCell align="right">
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

export default UserList;
