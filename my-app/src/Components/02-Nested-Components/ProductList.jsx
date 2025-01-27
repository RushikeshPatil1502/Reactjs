import ProductItems from "./Components/ProductItems";

function ProductList({name , city , listofChelseaPlayers}) {
    console.log(name);
  return (
    <div>
        <h3>Ecommerce Project</h3>

        <ul className=" py-4 px-3 flex flex-col gap-3 mt-4 rounded-xl  bg-red-300">
            {
                listofChelseaPlayers.map(
                    (item , index) => 
                        <ProductItems key={index} item={item} />
                )
            }
        </ul>

        <div className="mt-8 px-4 py-2 bg-purple-400 rounded-xl">
            Props:
            <h3>My Name is <span className="text-white">{name}</span></h3>
            <h3>I am from <span className="text-white">{city}</span></h3>
        </div>

    </div>
  )
}

export default ProductList