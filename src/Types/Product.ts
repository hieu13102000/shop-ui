export interface TypesProduct {
  data: TypesProductData[];
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface TypesProductData {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productMadeIn: string;
  productSaleOff: number | null;
  brandName: string;
  categoryName: string;
}

export interface GetProductsParams {
  page: number;
  limit: number;
  name?: string;
  brand?: string;
}