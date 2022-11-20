import axios from 'axios';

const userFetch = axios.create({
  baseURL: `https://api.github.com/users/`,
});

export default userFetch;
