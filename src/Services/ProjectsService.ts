import http from "../http-common";
import TypesProductData from '../Types/Product'
const getAll = () => {
  return http.get<Array<TypesProductData>>("/product");
};
const get = (id: any) => {
  return http.get<TypesProductData>(`/product/${id}`);
};
const create = (data: TypesProductData) => {
  return http.post<TypesProductData>("/product", data);
};
const update = (id: any, data: TypesProductData) => {
  return http.put<any>(`/product/${id}`, data);
};
const remove = (id: any) => {
  return http.delete<any>(`/product/${id}`);
};
const removeAll = (id: []) => {
  return http.delete<any>(`/product/${id}`);
};
const findByTitle = (title: string) => {
  return http.get<Array<TypesProductData>>(`/product?title=${title}`);
};
const  ProjectsService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
export default  ProjectsService;