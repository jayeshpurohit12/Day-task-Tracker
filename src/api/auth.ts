import axios from 'axios';

export interface IAddLogin {
  email: string;
  password: string;
}

export interface IAddSignup {
  email: string;
  fullName: string;
  password: string;
}

export const addLogin = ({email, password}: IAddLogin) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        `https://task-manager-api-akmx.onrender.com/api/auth/login`,
        {
          username: email.toLowerCase(),
          password,
        },
      );
      resolve(res.data);
    } catch (error: any) {
      reject(error?.response?.data?.message);
    }
  });
};

export const addRegister = ({email, fullName, password}: IAddSignup) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        `https://task-manager-api-akmx.onrender.com/api/auth/register`,
        {
          username: email.toLowerCase(),
          fullName,
          password,
        },
      );
      resolve(res.data);
    } catch (error: any) {
      reject(error.response.data);
    }
  });
};
