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

 export type CreatedResponse = {
    status: "ok";
    count: number;
  };
  
  export type ErrorResponse = {
    err: string;
  };