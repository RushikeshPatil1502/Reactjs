/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const ShoppingCartContext = createContext(null)

async function fetchAllProducts() {
    await new Promise((resolve)=> setTimeout(resolve,1000))
    const apiResponse = await fetch('https://dummyjson.com/products')
    return await apiResponse.json()
}

function ShoppingCartProvider({children}){
    const {data: productList , isPending} = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllProducts
    })

    return(
        <ShoppingCartContext.Provider value={{productList,isPending}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider