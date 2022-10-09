import {ApiInstance} from './ApiInstance';

export const getListProducts = async () => {
  return ApiInstance.get('/products')
    .then(response => {
      return response.data;
    })
    .catch(e => {
      console.log(e);
    });
};
