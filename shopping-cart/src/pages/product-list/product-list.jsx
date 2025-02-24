import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import ProductTile from "../../components/product-tile";

function ProductListPage() {
  const {productList, isPending} = useContext(ShoppingCartContext)

  console.log(productList);
    return (
      <section className="py-12 sm:py-16 bg-amber-50 lg:py-20">
          <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
              <div className="max-w-md text-center mx-auto">
                 <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our Featured Products</h1>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-6 mt-10">
              {
                  isPending ? <h1>Loading...</h1> : null
              }
              {
                  productList?.products && productList?.products?.length > 0 ? 
                  productList?.products?.map(singleProductItem=> 
                    <ProductTile key={singleProductItem.id} singleProductItem={singleProductItem}/>
                  )
                  : null
                 }
              </div>
          </div>
      </section>
    )
  }
  
  export default ProductListPage