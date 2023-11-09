import axios from 'axios';
import {storage} from '../storage';

const accessToken = storage.getString('accessToken');

export const taskAxios = axios.create({
  baseURL: 'https://task-manager-api-akmx.onrender.com',
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

//http://localhost:3000/api/user/today
