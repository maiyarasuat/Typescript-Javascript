//callback function- A function passed as an argument to another function and executed later


//example1
/*
function greet(name:string, callback:(message:string)=> void)
{
    console.log(name)
    callback("Welcome to TypeScript")
}

function showMessage(message:string)
{
    console.log(message)
}

greet("John" , showMessage);
 */

//example2

function sum(a:number, b:number, callback:(result:number)=> void)
{
    let result = a+b
    callback(result)
}


//callback
function displayResult(result:number)
{
    console.log(result)
}

sum(12,23, displayResult)










