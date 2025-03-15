/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null)

async function fetchAllProducts() {
    await new Promise((resolve)=> setTimeout(resolve,1000))
    const apiResponse = await fetch('https://dummyjson.com/products')
    return await apiResponse.json()
}


function ShoppingCartProvider({children}){
    // const [productDetails , setProductDetails] = useState(null)
    const [cartItems , setCartItems] = useState([])
    const navigate = useNavigate()

    const {data: productList , isPending} = useQuery({
        queryKey: ['products'],
        queryFn: fetchAllProducts
    })

    function handleAddToCart(getProductDetails){
        console.log(getProductDetails);

        const cpyExistingCartItems = [...cartItems]

        const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(cartitem => 
            cartitem.id === getProductDetails.id
        )

        // console.log(findIndexOfCurrentItem);

        if(findIndexOfCurrentItem === -1){
            cpyExistingCartItems.push({
                ...getProductDetails,
                quantity: 1,
                totalPrice: getProductDetails?.price
            })
        } else{
            console.log('already added');
        }

        console.log(cpyExistingCartItems);
        setCartItems(cpyExistingCartItems)

        localStorage.setItem('cartItems' , JSON.stringify(cpyExistingCartItems))

        navigate('/cart-list')
    }

    return(
        <ShoppingCartContext.Provider value={{productList,isPending,handleAddToCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider