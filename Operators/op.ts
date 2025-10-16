let a:number=10, b:number=11

//ArithmeticOperators

console.log("******Arithmetic operators******")

console.log(a+b)//additional
console.log(b-a)//subtraction
console.log(a*b)//multiplication
console.log(a/b)//division
console.log(a%b)//modular division
console.log(5**2)//exponential

//AssignmentOperators
a=10
b=5

console.log("******assignment operators******")
// a=a+b
// a+=b
// console.log(a)

console.log(a+=b) //15
console.log(a-=b) //10
console.log(a*=b) //50
console.log(a/=b) //10
console.log(a%=b) //0


//Relational/comparisonal operator

// > , < , >= , <= , == , != , ===

console.log("******relatioanl operator******")
a=10
b=20

console.log(a>b) //false
console.log(a<b) //true
console.log(a>=b) //false
console.log(a<=b) //true
console.log(a==b) //false
console.log(a!=b) //true

//Difference bw ==(equality) & ===(strict equality)

console.log("*********diff b/w == & ===")

let num1:any = 5 //number
let num2:any = "5" //string

console.log(num1==num2);
console.log(num1===num2);

//Logical operator(returns boolean true/false)

//   &&(AND)  ||(OR)   !(NOT)

console.log("*******logical operator******")

let b1:boolean = false
let b2:boolean = true

console.log(b1 && b2) //false
console.log(b1 || b2) //true
console.log(!b1) //true
console.log(!b2) //false

//combination of logical & relational operator

console.log("*******combination of rel & log operator******")

console.log(20<10 && 5>4) //false
console.log(20>10 || 10<9);//true