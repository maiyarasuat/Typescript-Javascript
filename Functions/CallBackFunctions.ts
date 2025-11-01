//callback function- A function passed as an argument to another function and executed later

function greet(name:string, callback:(message:string)=>void)
{
    console.log(name)
    callback("Hello")
}


//callback function
function showMessage(message:string)
{
    console.log(message)
}

greet("John", showMessage);