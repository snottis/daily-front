import axios from 'axios';

const baseUrl = `/api/users`;

const create = async (
  name: string,
  password: string,
  locations: string[],
): Promise<any> => {
  try {
    const res = await axios.post(baseUrl, { name, password, locations });
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
