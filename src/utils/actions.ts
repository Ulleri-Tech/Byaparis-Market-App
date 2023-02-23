import { ALL_PRODUCTS } from "./constant";
const searchProducts = (query: string): Promise<string[]> => {
  return new Promise((resolve) => {
    const matchingProducts = ALL_PRODUCTS.filter(({ name }) =>
      name.includes(query.toLowerCase())
    ).map(({ name }) => name);
    // Artificial timeout for demonstration purposes
    setTimeout(() => {
      resolve(matchingProducts);
    }, 500);
  });
};

export default searchProducts;