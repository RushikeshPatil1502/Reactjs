function ButtonComponent(){
    return (
        <div>
            <button>Click me!</button>
        </div>
    )
}

function ProductItems({item}) {
  return (
    <>
        <div className="rounded-xl px-4 py-2 bg-blue-700">{item}</div>
        <ButtonComponent />
    </>
  )
}

export default ProductItems