import axios from 'axios';
import {storage} from '../storage';

export const fetchProfile = () => {
  const accessToken = storage.getString('accessToken');
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `https://task-manager-api-akmx.onrender.com/api/user`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      resolve(res.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};
