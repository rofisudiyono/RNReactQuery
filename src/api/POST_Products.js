import {ApiInstance} from './ApiInstance';

export const getProductDetail = async () => {
  return ApiInstance.get('/products/add')
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(e);
    });
};
