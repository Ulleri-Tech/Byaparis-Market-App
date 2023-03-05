import { ProductResponse } from "@/helpers/types"
import ProductItem from "./product/productItem"

interface ProductProps{
    products: ProductResponse[]
}
export default function FeaturedProduct({products}:ProductProps ){
    return (
        <div className="mt-6 font-semibold text-lg">
        <h2 className="pl-4 text-left text-lg">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {products.map((product, _id) => (
            <ProductItem key={_id} product={product} handleCheck={_id} />
          ))}
        </div>
      </div>
    )
}