import {ApiInstance} from './ApiInstance';

export const addPostProduct = async nameProduct => {
  return ApiInstance.post('/products/add', {
    nameProduct,
  })
    .then(response => {
      return response;
    })
    .catch(e => {
      console.log('error', e);
    });
};
