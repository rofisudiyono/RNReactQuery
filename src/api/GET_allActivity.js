import axios from './axiosInstance';

export const getAllActivity = async () => {
  return axios
    .get('/activity-groups', {
      params: {
        email: 'rofisudyono@gmail.com',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(e);
    });
};
