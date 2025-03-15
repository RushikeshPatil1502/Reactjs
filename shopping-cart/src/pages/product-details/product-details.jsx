import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ShoppingCartContext } from "../../context"

async function getSingleProduct(id) {
  await new Promise((resolve)=> setTimeout(resolve,1000))
  const apiResponse = await fetch(`https://dummyjson.com/products/${id}`)
  return await apiResponse.json()
}

function ProductDetailsPage() {
  const {handleAddToCart} = useContext(ShoppingCartContext)

  const { productId } = useParams()
  const navigate = useNavigate()

  const {data: productDetails , isLoading} = useQuery({
    queryKey: ['productDetails',productId],
    queryFn: () => getSingleProduct(productId)
  })

    if(isLoading) return <div className="w-full h-screen flex justify-center items-center">
          <h1>Loading...</h1>
    </div>
    return (
      <section className="py-12 sm:py-16 bg-amber-50 lg:py-20 flex flex-col">
          <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-[500px] gap-4 flex flex-col">
             <div className="flex flex-col gap-4">

              <div className="flex flex-col gap-4">
                  <div className="p-6 shadow flex justify-center">
                        <img src={productDetails?.thumbnail} alt={productDetails?.title} />
                    </div>
                    <div className="flex justify-between items-center text-center">
                      <h1 className="text-2xl font-bold w-[250px] text-ellipsis overflow-hidden whitespace-nowrap">{productDetails?.title}</h1>
                      <h1 className="text-2xl font-semibold">${productDetails?.price}</h1>
                    </div>
              </div>
                
              <div className="flex flex-col">
                   <div className="flex justify-between w-full">
                     <h1 className={productDetails?.availabilityStatus ? 'text-2xl font-bold text-green-500' : 'text-2xl font-bold text-red-700'}>{productDetails?.availabilityStatus}</h1>
                     <h1 className="text-2xl font-bold">Rating: {productDetails?.rating}</h1>
                   </div>
                   <h1 className="mt-4 text-lg md:text-xl leading-relaxed md:leading-loose text-gray-700">{productDetails?.description}</h1>
                   <button onClick={()=> handleAddToCart(productDetails)} className="mt-4 px-4 py-2 border border-gray-500 rounded-xl text-lg font-semibold">Add to cart</button>
              </div>
                
             </div>
          </div>
      </section>      
    )
  }
  
  export default ProductDetailsPage