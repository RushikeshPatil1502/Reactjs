import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addNewProduct, fetchAllProductList } from "./api"
import { useState } from "react"

function ReactQuery() {
    const [productTitle , setProductTitle] = useState('')
    const getQueryClient = useQueryClient()

    const {data: productList , isLoading} = useQuery(
        {
            queryKey: ['productList'],
            queryFn: ()=> fetchAllProductList()
        }
    )

    const {mutateAsync: handleAddNewProductMutation} = useMutation(
        {
            mutationFn: addNewProduct,
            onSuccess: ()=> {
                getQueryClient.invalidateQueries(['productList'])
            }
        }
    )

    async function handleAddNewProduct() {
        await handleAddNewProductMutation(productTitle)
        setProductTitle('')
    }

    if(isLoading) return <div className="w-full mt-10 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-700">Loading...</h1>
    </div>
  return (
    <div className="w-full mt-10 flex flex-col gap-4 justify-center items-center ">
        <h1 className="text-4xl font-bold text-gray-700">React Query</h1>
        <div className="flex gap-4">
            <input 
                className="px-2 py-1 border border-gray-400 rounded-2xl"
                type="text" 
                name="name" 
                id="name"
                placeholder="Enter Products Name"
                value={productTitle}
                onChange={(event)=> setProductTitle(event.target.value)} />
            <button onClick={handleAddNewProduct} disabled={productTitle.trim() === ''} className="px-2 py-1 border border-gray-400 rounded-lg text-white bg-black" type="button">Add new Product</button>
        </div>       
        <ul className="text-xl font-semibold flex flex-col gap-4 px-4 py-2 shadow rounded-xl">
            {
                productList.length > 0 ? 
                productList?.map((product,index)=> 
                    <li key={index}>{product.title}</li>
                )
                : null
            }
        </ul>
    </div>
  )
}

export default ReactQuery