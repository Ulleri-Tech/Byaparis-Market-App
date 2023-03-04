export type ProductResponse = {
    _id: string,
    name: string,
    code: string,
    price: number,
    description: string,
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
    images: string[],
    inStock: number
  };
