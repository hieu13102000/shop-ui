import { GetProductsParams, TypesProductData } from '../Types/Product';
import Interceptors from './InterceptorsService';
import querystring from 'querystringify';

const instance = Interceptors.instance

const getAllProducts = (params:GetProductsParams) => {
  const queryString = querystring.stringify(params);
  return instance.get(`/list-product?${queryString}`);
};
const getByIDProduct = (id: number) => {
  // return http.get<TypesProductData>(`/products/${id}`);
};
const createProduct = (payload: TypesProductData) => {
  // return http.post<TypesProductData>("/products", data);
};
const updateProduct = (id: number, payload: TypesProductData) => {
  // return http.put<any>(`/products/${id}`, data);
};
const removeById = (id: number) => {
  return instance.delete<any>(`/delete-product/${id}`);
};
const removeMultiple = (payload: { productIds: number[] }) => {
  return instance.delete('/delete-products', {
    data: payload
  });
};

const  ProductsService = {
  getAllProducts,
  getByIDProduct,
  createProduct,
  updateProduct,
  removeById,
  removeMultiple,
};
export default  ProductsService;