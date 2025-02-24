import { useParams } from "react-router-dom"

function ProductDetailsPage() {
  const { productId } = useParams()
    return (
      <div>{`Product No. ${productId}`}</div>
    )
  }
  
  export default ProductDetailsPage