import axios from 'axios';
import {storage} from '../storage';

export const fetchHomeRecentTask = () => {
  const accessToken = storage.getString('accessToken');

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `https://task-manager-api-akmx.onrender.com/api/user/today`,
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
