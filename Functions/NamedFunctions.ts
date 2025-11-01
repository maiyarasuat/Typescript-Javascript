//Named Function : A function that is declared with a name

/* syntax

function functionName(Parameter): return type{
        block of code
}

*/
//no parameter and no return type
function display():void{

    console.log('Welcome to TypeScript')
}

display()

//function with parameter and return type

function addNumbers(x:number , y:number):number
{
        return x*y
}
console.log(addNumbers(2,7))

//Named function with  Rest parameter
//no of paramters is not restricted

function addNums(...nums:number[])
{
    let i;
    let sum:number=0

    for(i=0; i<nums.length; i++){
        sum = sum + nums[i]
    }
    console.log("sum of the numbers" , sum)
}

addNums(1,2,3,4)

//named function with rest paramater(Different data-Types)

function findElement(...element:(number | string)[]):number
{
    return element.length
}

console.log(findElement(1,2, "john" ,"tom", 3, "scott"))
console.log(findElement(1,2,4,5,7,8))
console.log(findElement("abc", "xyz" , "pqr", "pop"))

//named function with optional parameter

function displayDetails(id:number, name:string, mailID?:string):void
{
    console.log("ID:" , id)
    console.log("name:" , name)
        if(mailID !== undefined){
         console.log("Email:" , mailID)
    }
}



displayDetails(123, "scott")
// displayDetails(123, "Tom" , "Tom@gmail.com")

console.log("------------------")

//Named function with default parameter

function calculateDiscount(price:number, rate:number=0.2):void
{
    let discount:number = price*rate
    console.log("Discounted price:" , discount)
}

    calculateDiscount(1000,0.3)
    calculateDiscount(1000)

console.log("------------------")

/* 

function greet(name:string, title?: string):string //shryansh
{
    const userTitle = title ?? "User"
    return `Hello, ${userTitle} ${name}!`
}

console.log(greet("Alice"))  
console.log(greet("Bob", "Dr."))
 */