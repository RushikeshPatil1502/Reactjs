const productList = [
    {
        title: 'P1',
        id: 1
    },
    {
        title: 'P2',
        id: 2
    },
    {
        title: 'P3',
        id: 3
    },
    {
        title: 'P4',
        id: 4
    },
    {
        title: 'P5',
        id: 5
    }
]

export const fetchAllProductList = async()=> {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return productList;
}

export const addNewProduct = async(productName) =>{
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newlyAddedProduct = {
        title: productName,
        id: productList.length + 1
    }

    productList.push(newlyAddedProduct)

    return newlyAddedProduct
}