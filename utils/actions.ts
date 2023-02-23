import { ALL_PRODUCTS } from "./constant";
const searchProducts = (query: string): Promise<{

    name: string;
    title: string;
    price: number;
    inStock: number;
    description: string;
    checked: boolean;
    url: string;

}[]> => {
  return new Promise((resolve) => {
    const matchingProducts = ALL_PRODUCTS.filter(({ name }) =>
      name.includes(query.toLowerCase())
    )
    // Artificial timeout for demonstration purposes
    setTimeout(() => {
      resolve(matchingProducts);
    }, 500);
  });
};

export default searchProducts;