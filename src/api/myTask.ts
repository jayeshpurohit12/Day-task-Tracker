import axios from 'axios';
import {storage} from '../storage';

export interface IFetchTask {
  status?: string;
  date?: string;
}

export const fetchMyTask = ({status, date}: IFetchTask) => {
  const accessToken = storage.getString('accessToken');

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(
        `https://task-manager-api-akmx.onrender.com/api/tasks`,
        {
          params: {
            status,
            date,
          },
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
