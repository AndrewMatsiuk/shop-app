import { Product } from './../types/product';
import axios from 'axios';

export const api = axios.create({ baseURL: 'http://localhost:3001' });

export const productApi = {
  async getAllProduct(): Promise<Product[]> {
    const response = await api.get('/products');
    return response.data;
  },

  async getProduct(id: number): Promise<Product> {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  async createProduct(value: Product): Promise<Product> {
    const response = await api.post('/products', value);
    return response.data;
  },

  async updateProduct(id: number, product: Product): Promise<Product> {
    console.log(id, product, 'sas');
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  },

  async deleteProduct(id: number): Promise<Product> {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },
};
