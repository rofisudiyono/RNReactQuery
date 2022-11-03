import axios from './axiosInstance';

export const getAllActivityDetail = async id => {
  return axios
    .get(`/activity-groups/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(e);
    });
};
