//Logical AND(&&)   Logical OR(||)

function getname(name){
    return name;
}

let a = true;
let b = true;
let c = false;
let d = false;

console.log('Logical AND:')
console.log(a && b);
console.log(a && c);
console.log(c && d);
console.log(a && getname('Rushikesh')); //If a is true return Rushikesh

console.log(c && getname('Rushikesh')); //If c is true return Rushikesh

console.log('Logical OR:')
console.log(a || b);
console.log(a || c);
console.log(c || d);
console.log(c || getname('Rushikesh'));

//Template Literals
let name1 = "John";
let age = 19; 
console.log(`Template Literals:`)
console.log(`${name1} is ${age} years old`);

//Ternary Operators
console.log('Ternary')
let showCarOne = true;

function getCarOne(recipeName){
    return recipeName;
}

function getCarTwo(recipeName){
    return recipeName;
}

let result = showCarOne ? getCarOne('Tesla') : getCarTwo('Ferrari');

console.log(result);


//Destructering in Objects and Arrays

const userName = 'Cole';
const scoredGoals = 14;
const assitsMaked = 6;
const kitNumber = 20;

const playersList = {
    description : 'This is players list',
    userName,
    scoredGoals,
    assitsMaked,
    kitNumber
}
console.log(playersList);

console.log('Destructering')

const {description} = playersList
console.log(description)

const array = [1,2]
const [getFirstEl , getSecondEl , getThirdEl] = array
console.log(getFirstEl + ' ' + getSecondEl + ' ' + getThirdEl);

//Default Parameters
console.log("Default Parameters:")

function mulOfNumbers(num1 = 2 , num2 = 2){
    return num1*num2;
}
console.log(mulOfNumbers())

//spread operators
const spreadArray = [2,3,4,5]
const spreadArray2 = [6,7,8,9]
console.log([...spreadArray , ...spreadArray2])

//rest operators

function getinfo(a, ...c){
    console.log(a,c);

    return 'Rest Bro'
}

console.log(getinfo(1,2,3,4,54,5,6,6));

//Map , filter , find 

const chelseaPlayers = [
    {
        name: 'Cole Palmer',
        goals: 35,
        kitNumber: 20
    } , 
    {
        name: 'Enzo fernandez',
        goals: 2,
        kitNumber: 8
    } , 
    {
        name: 'Nicolas Jackson',
        goals: 9,
        kitNumber: 15
    }
]

const mostGoalsScored = chelseaPlayers.map(
    (e , index) => {
        console.log(`${e} and ${index}`)
        return `Goals Scored: ${e.goals}`
    }
)

console.log(mostGoalsScored)

//find
let getGoalsOver8 = chelseaPlayers.find(
    (e) => {
        return e.goals>8
    } 
)

console.log(getGoalsOver8)

//filter
let allPlayersWithOver8Goals = chelseaPlayers.filter(
    (e) => {
        return e.goals>8
    }
)

console.log(allPlayersWithOver8Goals)


