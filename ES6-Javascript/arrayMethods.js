const users = [
    { id: 1, name: "Alice", age: 17, isActive: true },
    { id: 2, name: "Bob", age: 22, isActive: false },
    { id: 3, name: "Charlie", age: 19, isActive: true },
    { id: 4, name: "David", age: 25, isActive: false },
  ];

  
const userName = users.filter(
    username => username.age > 20
).map(
    username => username.name
)

console.log(userName)


const chelseaPlayers = [
    {
      id: 1,
      name: "Cole Palmer",
      position: "Midfielder",
      age: 21,
      appearances: 22,
      goalsScored: 14,
      assists: 6,
      isInjured: false,
    },
    {
      id: 2,
      name: "Nicolas Jackson",
      position: "Forward",
      age: 22,
      appearances: 21,
      goalsScored: 9,
      assists: 4,
      isInjured: false,
    },
    {
      id: 3,
      name: "Noni Madueke",
      position: "Forward",
      age: 21,
      appearances: 20,
      goalsScored: 6,
      assists: 3,
      isInjured: false,
    },
    {
      id: 4,
      name: "Enzo Fernández",
      position: "Midfielder",
      age: 23,
      appearances: 20,
      goalsScored: 3,
      assists: 4,
      isInjured: false,
    },
    {
      id: 5,
      name: "Christopher Nkunku",
      position: "Forward",
      age: 27,
      appearances: 18,
      goalsScored: 2,
      assists: 1,
      isInjured: false,
    },
  ];

  
const goalsMoreThan10 = chelseaPlayers.filter(
    players => players.goalsScored > 10
).map(
    players => players.name
)

const findGoals = chelseaPlayers.find(
    players => players.goalsScored > 5
)

console.log(goalsMoreThan10)
console.log(findGoals)

const anyoneScoredMoreThan10Goals = chelseaPlayers.some(
    players => players.goalsScored > 10
)

const everyOneScoredMoreThan10Goals = chelseaPlayers.every(
    players => players.goalsScored > 10
)

console.log(`Did Anyone Scored More Than 10 Goals: ${anyoneScoredMoreThan10Goals}`)

console.log(`Did Everyone Scored More Than 10 Goals: ${everyOneScoredMoreThan10Goals}`)

//Includes
const chelsArray = ['Cole Palmer' , 'Levi Colwill' , 'Reece James']

const chelsOrNotchels = chelsArray.includes('Cole Palmer')

const checkChels = chelsOrNotchels ? 'He is Chels' : 'He is not Chels he is Fraud';

console.log(checkChels , chelsArray.indexOf('Cole Palmer'))

const indexOfGoalsMorethan5 = chelseaPlayers.findIndex(
    players => players.goalsScored > 5
)
console.log(indexOfGoalsMorethan5)

//https://dummyjson.com/products

let getAllProducts = document.querySelector('.list-of-products')

async function fetchAllProducts() {
    try{
        const apiResponse = 
        await fetch('https://dummyjson.com/products', {
            method: 'GET'
        })

        const result = await apiResponse.json()
        console.log(result)

        if(result?.products?.length > 0) renderProducts(result?.products)
    }catch(e){
        console.log(e)
    }
}

function renderProducts(getProducts){
    getAllProducts.innerHTML = getProducts.filter(
        e => e.id < 5
    ).map(
        e => `<p>${e.title}</p>`
    ).join(' ')
}

fetchAllProducts()


