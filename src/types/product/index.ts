import { Comment } from '../comment';

export type Size = {
  width: number;
  height: number;
};

export type Product = {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: Size;
  weight: string;
  comments: Comment[];
};

export type ProductId = number;
