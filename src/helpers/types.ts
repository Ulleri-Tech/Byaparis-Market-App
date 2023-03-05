export type ProductResponse = {
    _id: string,
    name: string,
    code: string,
    price: number,
    description: string,
    category:string,
    images: string[],
    sold: number,
    inStock: number
  };

  export type ErrorResponse = {
    err: string;
  };

  export type ProductRequest = {
    name: string,
    code: string,
    price: number,
    description: string,
    category:string,
    images: string[],
    inStock: number
  };

  export interface UserCredential {
    email: string;
    token:string;
    lastlogin: string;
  }