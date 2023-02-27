import connectToDatabase from "../../helpers/connectDB";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "@/helpers/models/products";
import {
  CreatedResponse,
  ErrorResponse,
  ProductResponse,
} from "@/helpers/types";
/*
 *  Filtering: api/products?category=Handicraft&name=Pashmina
 *  Sorting: /api/products?sort=price:asc,name:desc
 *  Pagination /api/products?page=1&limit=20
 *
 */
export default async function ProductAPI (
  req: NextApiRequest,
  res: NextApiResponse<ProductResponse[] | CreatedResponse | ErrorResponse>
){
  await connectToDatabase();
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
    case "POST":
      await createProduct(req, res);
      break;
  }
};

async function getProducts(
  req: NextApiRequest,
  res: NextApiResponse<ProductResponse[] | ErrorResponse>
) {
  try {
    const features = new APIfeatures(Product, req.query)
      .filtering()
      .sorting()
      .paginating();

    const products = await features.query;

    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "err.message" });
  }
}

class APIfeatures {
  constructor(public query: any, public queryString: any) {}

  filtering() {
    const queryObj = { ...this.queryString };

    const excludeFields = ["page", "sort", "limit"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let options: { [key: string]: any } = {};
    if (queryObj.category && queryObj.category !== "all")
      
      options["category"] = queryObj.category;
    if (queryObj.name && queryObj.name !== "all")
      options["name"] = { $regex: queryObj.name };

    const projection = {
      updatedAt: 0,
      __v: 0,
    };
    console.log(options)
    this.query = this.query.find(options, projection);

    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      let sortOptions: { [key: string]: number } = {};
      const sortFields = this.queryString.sort.split(",");
      sortFields.forEach((sortField: string) => {
        const [field, order] = sortField.split(":");
        if (
          ["name", , "code", "price", "createdAt", "inStock"].includes(field) &&
          ["asc", "desc"].includes(order)
        ) {
          sortOptions[field] = order === "asc" ? 1 : -1;
        }
      });
      this.query = this.query.sort(sortOptions);
    } else {
      this.query = this.query.sort("-createdAt");
    }
    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    let limit = this.queryString.limit * 1 || 6;
    if (limit > 20) limit = 20;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

async function createProduct(
  req: NextApiRequest,
  res: NextApiResponse<CreatedResponse | ErrorResponse>
) {
  try {
    // const result = await auth(req, res)
    //         if(result.role !== 'admin') return res.status(400).json({err: 'Authentication is not valid.'})
    if (!req.body) res.status(404).end("Failed reasoon: body was empty");
    console.log(req.body);
    const { code, name, price, inStock, description, category, images } =
      req.body;

    if (
      !code ||
      !name ||
      !price ||
      !inStock ||
      !description ||
      !category ||
      images.length === 0
    )
      return res.status(400).json({ err: "Please add all the fields." });

    const newProduct = new Product({
      code,
      name,
      price,
      inStock,
      description,
      category,
      images
    });

    await newProduct.save();

    res.status(201).end("Success! Created a new product");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Failed to create product" });
  }
}
