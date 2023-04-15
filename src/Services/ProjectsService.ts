// import http from "../http-common";
import TypesProductData from '../Types/Product'
const getAll = () => {
  // return http.get<Array<TypesProductData>>("/products");
};
const get = (id: any) => {
  // return http.get<TypesProductData>(`/products/${id}`);
};
const create = (data: TypesProductData) => {
  // return http.post<TypesProductData>("/products", data);
};
const update = (id: any, data: TypesProductData) => {
  // return http.put<any>(`/products/${id}`, data);
};
const remove = (id: any) => {
  // return http.delete<any>(`/products/${id}`);
};
const removeAll = (id:any) => {
  // return http.delete<any>(`/products/${id}`);
};
const findByTitle = (title: string) => {
  // return http.get<Array<TypesProductData>>(`/products?title=${title}`);
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