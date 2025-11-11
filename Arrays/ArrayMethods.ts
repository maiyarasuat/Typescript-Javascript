//Array methods

import { constants } from "buffer"

let numbers:number[] = [1,2,3,4,5]
let fruitsName:string[] = ["Mango", "Melon", "Banana"]

console.log(numbers)
console.log(fruitsName)

//Length of an array -Length(Not a method)

console.log("size of numbers array:" , numbers.length)
console.log("size of an fruitsName array:" ,fruitsName.length)

//1.push()-- it will add the single/multiple values at last of the array
//when you dont know the indexs of the array

numbers.push(6,7)
console.log("After pushing activity------>")

console.log(numbers)

//2.pop()--the method will remove the last array and
//returns the removed array value

let lastFruit = fruitsName.pop() //banana
console.log("AfterPop:" , fruitsName) //mango , melon
console.log(lastFruit) // banana

//3.shift()-the method will remove the first element of the array
//and also returns the removed elemnt

console.log("given array elements is:", numbers)
let firstElement = numbers.shift() //1
console.log("after shift()" , numbers)
console.log(firstElement)

//4.unshift() method will add single/multiple elements in
//the array and wont returns anything
let fruitsName1:string[] = ["Mango", "Melon", "Banana"]
console.log("before shift:", fruitsName1)
fruitsName1.unshift("pomo", "pine")
console.log("after unshift():", fruitsName1)

//5.concat() --combine two or more arrays of same time

let numbers1:number[] = [1,2,3,4,5]
let combinedArray =numbers1.concat([6,7], [8])
console.log("concatinated array:",combinedArray)

//6.slice()- extracts a section of an array
//starting index - 0 and ending index is -1
let extractedArray = fruitsName1.slice(1,3)
console.log(extractedArray)

//negative indices count from the end of the array
///[ 'pomo', 'pine', 'Mango', 'Melon', 'Banana' ]
let extractedArray1 =fruitsName1.slice(-4,-2)//[ 'pine', 'Mango' ]
console.log(extractedArray1) 

//7.splice()-Adds/removes elements from an array(From everywhere)
//arr.splice(startIndex, deletecount,item1,item2,..itemN)

 const arr = ["orange", "mango", "banana", "sugar", "tea"]

 let deletedElement = arr.splice(2,2)
 console.log("Arrays:" , arr)
 console.log("Deletedelements:" , deletedElement)
