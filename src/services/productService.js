import { fetchProducts, fetchProductById } from "../api/fakeStoreApi";

export const getAllProducts = async () => {
  try {
    const products = await fetchProducts();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const getProductDetails = async (id) => {
  try {
    const product = await fetchProductById(id);
    return product;
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
};