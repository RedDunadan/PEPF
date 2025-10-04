import { fetchProducts, fetchProductById } from "../api/fakeStoreApi.js";

export const getAllProducts = async () => {
  try {
    return await fetchProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const getProductDetails = async (id) => {
  try {
    return await fetchProductById(id);
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
};

export const deleteProduct = async (id) => {
  try {
    return await deleteProduct(id);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};