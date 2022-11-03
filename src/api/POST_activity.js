import axios from './axiosInstance';

export const postActivity = async title => {
  return axios
    .post('/activity-groups', {
      title: title,
      email: 'rofisudyono@gmail.com',
    })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(JSON.stringify(e.response.data));
    });
};
