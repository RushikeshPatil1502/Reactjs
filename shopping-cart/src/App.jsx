import { Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/product-list/product-list"
import CartListPage from "./pages/cart-list/cart-list"
import ProductDetailsPage from "./pages/product-details/product-details"

function App() {
  return (
    <>
      <Routes>
        <Route path="/product-list" element={<ProductListPage/>} />
        <Route path="/cart-list" element={<CartListPage/>} />
        <Route path="/product-details/:productId" element={<ProductDetailsPage/>} />
      </Routes>
    </>
  )
}

export default App