//Anonymous function (Unnamed/Nameless function)

/* 
syntax

let variableName = function(parameter)
{
    functionBody
}
*/

//Example
//without parameter
let msg = function():string
{
    return "We are seeing functions Now!"
}

console.log(msg())

//Example
//with parameter

let multiply = function(x:number, y:number):number
{
    return x*y
}
console.log(multiply(2,100))