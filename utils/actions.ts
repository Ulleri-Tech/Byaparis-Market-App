import jwt from "jsonwebtoken";
import { ProductRequest, ProductResponse } from "@/helpers/types";

export const loginRequest = async (
  email: string,
  password: string
): Promise<{ token: string; user: string }> => {
  const body = JSON.stringify({ email, password });

  return await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  }).then((t) => t.json());
};

export const getUserData = (): Promise<{
  token: string;
  user: string;
}> => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return reject("No Token Found");
    }

    const json = jwt.decode(token) as { [key: string]: string };

    return json?.email
      ? resolve({ token: token, user: json?.email })
      : reject("Invalid User");
  });
};

export const createProduct = async (
  product: ProductRequest
): Promise<ProductResponse> => {
  console.log("create product");
  const body = JSON.stringify(product);
  const res = await fetch("/api/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  });
  return res.json();
};

export const getFeaturedProducts = async (
  page: number
): Promise<ProductResponse[]> => {
  console.log("get featured");
  const res = await fetch(`/api/products?page=${page}&limit=6`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  return res.json();
};

export const searchProducts = async (
  query: string
): Promise<ProductResponse[]> => {
  console.log("api fetch");
  const productName = query.trim();
  const res = await fetch(`api/products?name=${productName}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  if (res.ok) {
    return res.json();
  }
  return [];
};
