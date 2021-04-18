import { ThunkAction } from 'redux-thunk';
import service from '../services/productsService';
import * as ptypes from '../types/Product';

export const getProducts = (): ThunkAction<
  void,
  any,
  unknown,
  ptypes.ProductAction
> => {
  return async (dispatch: any): Promise<any> => {
    const products = await service.getAll();
    dispatch({ type: 'SET_PRODUCTS', data: products });
    return products;
  };
};

const productReducer = (state: ptypes.ProductState = [], action: any) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.data;
    default:
      return state;
  }
};

export default productReducer;
