import axios from 'axios';
import { Product } from '../types/Product';

const baseUrl = `/api/products`;

const create = async (
  name: string,
  gtin: string,
  value: number,
  lotsize: number,
): Promise<any> => {
  try {
    const res = await axios.post(baseUrl, { name, gtin, value, lotsize });
    return res.data;
  } catch (error) {
    return { error: error.message };
  }
};

const getAll = async (): Promise<any> => {
  try {
    const res = await axios.get(baseUrl);
    return res.data;
  } catch (error) {
    return { error: error.message };
  }
};

const update = async (id: string, prod: Product): Promise<any> => {
  try {
    const res = await axios.put(`${baseUrl}/${id}`, prod);
    return res.data;
  } catch (error) {
    return { error: error.message };
  }
};

export default { create, getAll, update };
