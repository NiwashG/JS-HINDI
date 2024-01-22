//primitive datatype 

//7 types :String,Number,Boolean,Null,Undefined,Symbol,BigInt
const score=122
const scoreValue=100.2
const isLoggedIn=false
const outsidetemp=null
let userEmail;

const id=Symbol('1234')
const anotherId=Symbol('1234')
console.log(id===anotherId)

//const bigNumber=122344556343545767677n







//Reference(non primitive)
//Array,Objects,Functions

const heros=["Shaktiman","NagRaj","Doga"]
let myObj= {
    Name:"NIWASH",
    Age:25,
}

const myFunction = function()
{
    console.log("Hello World")
}
// console.log(typeof bigNumber)//undefined return
// console.log(typeof outsidetemp)//object
// console.log(typeof scoreValue)//number
//console.log(typeof Object)//function
console.log(typeof myFunction)// function
console.log(typeof heros)// object
console.log(typeof anotherId)//symbol
