import { GetProductsParams, TypesProductData } from '../Types/Product';
import Interceptors from './InterceptorsService';
import querystring from 'querystringify';

const instance = Interceptors.instance

const getAllProducts = (params:GetProductsParams) => {
  const queryString = querystring.stringify(params);
  return instance.get(`/list-product?${queryString}`);
};
const getByIDProduct = (id: number) => {
  return instance.get(`/detail-product/${id}`);
};
const createProduct = (payload: any) => {
  return instance.post("/create-product", payload);
};
const updateProduct = (id: number, payload: any) => {
  return instance.put(`/update-product/${id}`, payload);
};
const removeById = (id: number) => {
  return instance.delete<any>(`/delete-product/${id}`);
};
const removeMultiple = (payload: { productIds: number[] }) => {
  return instance.delete('/delete-products', {
    data: payload
  });
};

const uploadImgae = (formData: FormData) => {
  return instance.post("/upload-image", formData);
};

const  ProductsService = {
  getAllProducts,
  getByIDProduct,
  createProduct,
  updateProduct,
  removeById,
  removeMultiple,
  uploadImgae,
};
export default  ProductsService;