import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://todo.api.devcode.gethired.id',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
