/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"

function ProductTile({singleProductItem}) {

    const navigate = useNavigate()

    function handleGoToProductDetailsPage(getProductId){
        navigate(`/product-details/${getProductId}`)
    }
    
  return (
    <div className="p-6 shadow rounded-lg hover:shadow-lg hover:translate-x-0.5">
        <div className="overflow-hidden aspect-w-1 aspect-h-1">
           <img className="object-cover w-full h-full" src={singleProductItem?.thumbnail} alt={singleProductItem?.title} />
        </div>
        <div className="flex justify-between mt-4">
          <div className="font-bold text-gray-900 text-lg">
            <p className="w-[100px] text-ellipsis overflow-hidden whitespace-nowrap">{singleProductItem?.title}</p>
          </div>
          <div className="font-bold text-gray-900 text-lg">
            <p>${singleProductItem?.price}</p>
          </div>
        </div>

        <div className="mt-4">
            <button onClick={()=> handleGoToProductDetailsPage(singleProductItem?.id)} className="px-4 py-2 cursor-pointer rounded-lg w-full text-white bg-black">View Details</button>
        </div>
    </div>
  )
}

export default ProductTile