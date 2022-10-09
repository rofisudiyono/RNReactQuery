import {create} from 'apisauce';

export const ApiInstance = create({
  baseURL: 'https://dummyjson.com/',
  headers: {Accept: 'application/vnd.github.v3+json'},
});
