import { Link } from "react-router-dom"

function NotFound() {
  return (
    <>
     <div className="w-full py-10 flex justify-center items-center text-4xl font-bold">Error 404</div>
     <Link to={'/recipe-list'}>Go to Recipe List Page</Link>
    </>
  )
}

export default NotFound