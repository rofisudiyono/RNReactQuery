import {ApiInstance} from './ApiInstance';

export const getProductDetail = async id => {
  return ApiInstance.get(`/products/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(e);
    });
};
