import axios from 'axios';

const baseUrl = `/api/login`;

export const login = async (
  username: string,
  password: string,
): Promise<any> => {
  try {
    const res = await axios.post(baseUrl, { username, password });
    return res.data;
  } catch (error) {
    return error;
  }
};

export default { login };
