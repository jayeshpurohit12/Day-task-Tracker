import axios from 'axios';
import {storage} from '../storage';

export interface IAddTask {
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  date: string;
  startTime: string;
  endTime: string;
}

export const addTask = ({
  title,
  description,
  shortDescription,
  category,
  date,
  startTime,
  endTime,
}: IAddTask) => {
  const accessToken = storage.getString('accessToken');

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        `https://task-manager-api-akmx.onrender.com/api/tasks`,
        {
          title,
          description,
          shortDescription,
          category,
          date,
          startTime,
          endTime,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      resolve(res.data);
    } catch (error: any) {
      reject(error?.response?.data?.message);
    }
  });
};
