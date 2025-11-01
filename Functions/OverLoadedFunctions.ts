//step1: write a signatures of a function
//step2: implement a function
//step3: calling the function

//allows you to define multiple versions of function with same name

//signature
function getInfo(id:number):string;
function getInfo(name:string):string;

//implementation

function getInfo(param: number | string):string
{
        if(typeof param === "number")
        {
            return(`User ID is ${param}`);
        }
        else
        {
            return(`User ID is ${param}`);
        }


}

//calling

getInfo(123)
getInfo("pop")

//example

//signature
function add(a:number, b:number):number;
function add(a:number, b:number, c:number):number;

//implementation
function add(a:number, b:number, c?:number):number
{
    if(c !== undefined){
        return a+b+c
    }
    return a+b
}

//calling
console.log(add(10,20))
console.log(add(10,20,30))

//example

//signature 
function processInput(input:number):number
function processInput(input:string):string

//implemt
function processInput(input: string | number): string | number
{
    if(typeof input === "string")
    {
        return input.toUpperCase()
    }
    else
    {
        return input*2
    }

}

//calling
console.log(processInput("pop"))
console.log(processInput(200))

//example

//signature
function greet(name:string):string
function greet(age:number):string
function greet(isMarried:boolean):string

//implement
function greet(value: string|number|boolean):string
{
        if(typeof value === "string")
        {
            return `Hey ${value}`
        }
        else if(typeof value ==="number")
        {
            return `You are ${value} years old`
        }
        else
        {
            let res:string = value?"married" : "single"
            return res
        }
}

//calling
console.log(greet("john"))
console.log(greet(29))
console.log(greet(true))