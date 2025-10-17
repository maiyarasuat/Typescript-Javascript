//statements -- conditional & logical statements

//if statement

/* let voteage:number = 20

if(voteage>=18){

    console.log("You are Eligible to vote")
} */

//If Else statement
/* 
let num:number = 9

if(num%2==0){
    console.log(`${num} is a Even number`)
}
else{
    console.log(`${num} is Not a even number`)
}
*/                 

//Nested if else statement

/*
if(condition1){
    statement
}
else if(condition2){
    statement
}
else{
    statement    
}
*/

//Example

/*
marks >=90 -gradeA
marks >=75 -gradeB
marks >=60 -gradeC
gradeD
*/

/*
let marks:number = 89;

if(marks >= 90 && marks<=100){
    console.log("Grade A")
}
else if(marks >=75 && marks<90){
    console.log("Grade B")
}
else if(marks >=60 && marks<75){
    console.log("Grade C")
}
else{
    console.log("Grade D")
}
*/

//Switch Case statements

let day:number = 19
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default :
        console.log("No dates are selected")
        break
}