import { Product } from "../../types/product";

export type SortOptions = "default" | "weight" | "width" | "height";
export type ProductState = {
	products: Product[];
	sortOption: SortOptions;
};
