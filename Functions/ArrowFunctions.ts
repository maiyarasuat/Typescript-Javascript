/*
        Arrow Function in Typescript
        Arrow Functions are concise way to write function expressions
        Introduced in ES6 and also known as lambda function or fat arrow functions
        => syntax: which allows you to define functions without function keyword
        making your code shorter and more readable
*/

//No parameter and return type
let pop = ():void =>
{
    console.log("This is arrow function")
}
pop()

//with parameter and return value

let add = (x:number, y:number):number =>
{
    return x+y
}
console.log(add(1,100))

//Implicit return(only if you've single return statement)

let plus = (p:number, q:number):number => p+q
let mul = (s:number, t:number):number => s*t

console.log(plus(1,100))
console.log(mul(1,10))

