import { ALL_PRODUCTS } from "./constant";
import jwt from "jsonwebtoken";

export const searchProducts = (query: string): Promise<{

    name: string;
    code: string;
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

export const getUserData = (): Promise<{
  token: string,
  user: string
}> =>{
  return new Promise((resolve,reject)=>{

    const token = localStorage.getItem("token");
    if (!token){
      return reject('No Token Found')
    }
  
    const json = jwt.decode(token) as { [key: string]: string };
  
    return json?.email ? resolve({token:token, user:json?.email}) : reject('Invalid User')
    
  })
}