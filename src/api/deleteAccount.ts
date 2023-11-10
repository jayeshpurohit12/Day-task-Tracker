import axios from 'axios';
import {storage} from '../storage';

export const deleteAccount = () => {
  return new Promise(async (resolve, reject) => {
    const accessToken = storage.getString('accessToken');
    try {
      const res = await axios.delete(
        `https://task-manager-api-akmx.onrender.com/api/user/deleteAccount`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
