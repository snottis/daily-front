import axios from 'axios';

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

export default { create, getAll };
