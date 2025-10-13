/* 

Var - function scope
let - block scope
const - block scope

*/

/*  
function varScope(){ //var - function scoped

if(true){
    var mesg = "Entry"
    console.log(mesg)
}

}

varScope();
*/

function letConstScope(){//let&const are block scoped cant access beyond block

if(true){
    let greet = "Hello"
    const mesg = "Morning"
    console.log(greet)
    console.log(mesg)
    
}
// console.log(greet)
// console.log(mesg)

}

letConstScope()