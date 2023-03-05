import { ProductResponse } from "@/helpers/types";
import { getFeaturedProducts } from "@/utils/actions";
import React, { useEffect, useState } from "react";
import Button from "./common/Button";
import ProductItem from "./product/productItem";

const FeaturedProduct: React.FC = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        const json = await getFeaturedProducts(1);
        setProducts(json)
      };
      fetchData();
    
  }, []);

  return (
    <div className="mt-6 font-semibold text-lg">
      <h2 className="pl-4 text-left text-lg">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        {products.map((product, _id) => (
          <ProductItem key={_id} product={product} handleCheck={_id} />
        ))}
      </div>
      <Button>Load More</Button>
    </div>
  );
};

export default FeaturedProduct;
