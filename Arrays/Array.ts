/* 
What is an Array in Typescript
An array in typescript is a data structure that allows you to store multiple
values under a single variable name,maintaining a specific order
Arrays can hold elements of any type, but typescript adds type safety,
ensuring that all elements in an array are of a specified type
*/

//Type1
// let names:string[] =[] //declaration

//Initialisation

// names[0] = "John"
// names[1] = "Pop"
// names[2] = "Nesley"
// names[3] = "Smith"

let names:string[] = ["john", "Pop" ,"Nesley" ,"Smith"]
console.log(names)

//Type2

let empNames:Array<String> = ["john","pop","Nesley","Smith"]
let empIds:Array<number> = [1,22,33,44,55]
let employee:Array<string | number> = ["John","Peter", 2 , 220]
let mixedData:Array<any> = [true, 2, "Stein", "Pop"]

console.log(empNames[1])
console.log(empIds)

console.log("----classical for loop----")
//Iterate using classical for loop

for(let i=0;i<empIds.length; i++) //i<=empNames-1
{
    console.log(empIds[i])

}
console.log("----for..in..loop----")

//Iterate using for in Loop(where i is act as a index)

for(let i in empIds)
{
    console.log(empIds[i])
}

console.log("----for..of..loop----")

//Iterate using for of Loop(where values is act as a value itself)

for(let values of employee)
{
    console.log(values)
}            

console.log("-----------------")

//Passing array to the function

function search(ele:number, arr:number[]):boolean
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]=== ele)
        {
            return true
        }
    }
            return false

}

let arr:number[] = [10,20,30,40,50,80]
console.log(search(10, arr))
console.log(search(70,arr))

console.log("------------------")

//Function takes an array and returns the array

function capitalizeWords(arr:string[]):string[]
{
    let result:string[]= [];
    for(let i=0; i<arr.length; i++)
    {
        result[i] = arr[i].toUpperCase()
    }
        return result 
}

let words:string[] = ["BadMinton", "shuttle" , "liFe"];
console.log(capitalizeWords(words));