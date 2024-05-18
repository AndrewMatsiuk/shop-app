import { Product } from "../../types/product";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductState, SortOptions } from "../states";
import { productApi } from "../../api";

const initialState: ProductState = {
	products: [],
	sortOption: "default",
};

const createProduct = createAsyncThunk(
	"product/deleteProduct",
	async (payload: { product: Product }, { dispatch }) => {
		try {
			const product = await productApi.createProduct(payload.product);
			dispatch(productActions.setCreatedProduct(product));
		} catch (e) {
			console.log(e);
		}
	},
);

const getProducts = createAsyncThunk(
	"product/getAllProducts",
	async (_, { dispatch }) => {
		try {
			const products = await productApi.getAllProduct();
			dispatch(productActions.setProducts(products));
		} catch (e) {
			console.log(e);
		}
	},
);

const editProduct = createAsyncThunk(
	"product/editProduct",
	async (payload: { product: Product }, { dispatch }) => {
		try {
			const { id } = payload.product;
			const product = await productApi.updateProduct(id, payload.product);
			dispatch(productActions.setEditedProduct(product));
		} catch (e) {
			console.log(e);
		}
	},
);

const deleteProduct = createAsyncThunk(
	"product/deleteProduct",
	async (payload: { product: Product }, { dispatch }) => {
		try {
			const { id } = payload.product;
			await productApi.deleteProduct(id);
			dispatch(productActions.setDeletedProduct(payload.product));
		} catch (e) {
			console.log(e);
		}
	},
);

const { reducer, actions } = createSlice({
	name: "product",
	initialState,
	reducers: {
		setProducts: (state, { payload: products }: PayloadAction<Product[]>) => {
			state.products = products;
		},
		setEditedProduct: (state, { payload: product }: PayloadAction<Product>) => {
			const newProductList = state.products.map((item) => {
				if (item.id === product.id) {
					return product;
				}
				return item;
			});
			state.products = newProductList;
		},
		setDeletedProduct: (
			state,
			{ payload: product }: PayloadAction<Product>,
		) => {
			const newProductList = state.products.filter(
				(item) => item.id !== product.id,
			);
			state.products = newProductList;
		},
		setCreatedProduct: (
			state,
			{ payload: product }: PayloadAction<Product>,
		) => {
			state.products.push(product);
		},
		setSortOption: (
			state,
			{ payload: sortOption }: PayloadAction<SortOptions>,
		) => {
			state.sortOption = sortOption;
		},
	},
});

export const productReducer = reducer;
export const productActions = {
	...actions,
	getProducts,
	editProduct,
	deleteProduct,
	createProduct,
};
