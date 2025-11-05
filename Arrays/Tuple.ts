//Tuple  - fixed lenght and fixed data-type

//Tuple with two values string,number

let person:[number, string] = [101, "Naveen"]
console.log(person)
console.log(person[0])
console.log(person[1])

//Tuple with multiple values
let user:[boolean,number,string,number,string]=[true,3,"bob",2,"shine"]
console.log(user)

console.log("traditional for loop")
//classical for loop
for(let i=0; i<user.length; i++)
{
    console.log(user[i])
}

console.log("traditional for..in loop")
//for in loop
for(let i in user)
{
    console.log(user[i])
}

console.log("traditional for..of loop")
//for of loop
for(let value of user)
 {
    console.log(value)
 }   



//Tuple array

let students:[number, string][] = [[1,"pop"], [2, "smith"], [3,"sams"]]
console.log(students.length)
console.log(students[2])

let tp = students[0]
console.log(tp)

console.log(tp[0])
console.log(tp[1])