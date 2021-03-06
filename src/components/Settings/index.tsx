/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Dialog, Button, Paper } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import AddProductForm from './Products/AddProductForm';
import ProductList from './Products/ProductList';
import UserList from './Users/UserList';

const Settings = (): React.ReactElement => {
  const [tabpos, setTabpos] = React.useState('products');
  const [modal, setModal] = React.useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const handleChange = (e: React.MouseEvent, val: string): any => {
    if (val !== null) {
      setTabpos(val);
    }
  };
  const selectPage = (): React.ReactElement => {
    switch (tabpos) {
      case 'users':
        return <UserList />;
      case 'locations':
        return <p>Locations</p>;
      default:
        return (
          <div>
            <Button onClick={handleModal}>Add product</Button>
            <AddProductForm open={modal} onClose={handleModal} />
            <ProductList />
          </div>
        );
    }
  };

  return (
    <div>
      <ToggleButtonGroup
        value={tabpos}
        exclusive
        onChange={handleChange}
        size="medium"
        aria-label="text secondary large button group"
      >
        <ToggleButton value="products" aria-label="products">
          Products
        </ToggleButton>
        <ToggleButton value="users" aria-label="users">
          Users
        </ToggleButton>
        <ToggleButton value="locations" aria-label="locations">
          Locations
        </ToggleButton>
      </ToggleButtonGroup>
      {selectPage()}
    </div>
  );
};

export default Settings;
