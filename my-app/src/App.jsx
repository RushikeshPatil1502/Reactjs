import ClassBasedComponent from "./Components/ClassBasedComponent"
// import FunctionalComponent from "./Components/FunctionalComponent"

import Cards from "./Components/02-List-Practice/Cards"
import ChelsPlayers from "./Components/02-List-Practice/ChelsPlayers"
import ProductList from "./Components/02-Nested-Components/ProductList"
import Products from "./Components/03-UseState/Products"
import ComponentUseeffect from "./Components/04-UseEffect/component-useeffect"
import Users from "./Components/04-APICall-UseEffect/Users"
import ContextText from "./Components/05-Context-Conecept/text"
import ContextButton from "./Components/05-Context-Conecept/button"
import UseReducerExample from "./Components/06-UseReducer-Hook/UseReducerExample"
import Form from "./Components/07-Form-Handling/Form"
const chelseaPlayersList = ['Cole Palmer' , 'Enzo Fernandez' , 'Reece James']


const App = () => {

  return (
      <div className="mb-[1000px] text-2xl font-bold flex flex-col gap-4 bg-amber-100 w-full justify-center items-center text-center">
          
          {/* <FunctionalComponent /> */}

          <ProductList name='Rushikesh' city='Virar' listofChelseaPlayers={chelseaPlayersList} />
          <ChelsPlayers />
          <Cards />
          <ClassBasedComponent/>
          <Products />
          <ComponentUseeffect />
          <Users />

          <ContextText />
          <ContextButton />

          <UseReducerExample />
          <Form />
      </div>
      
  )
}

export default App