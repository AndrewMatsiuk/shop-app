import { ProductId } from "../product";

export type Comment = {
	id: number;
	productId: ProductId;
	description: string;
	date: string;
};
