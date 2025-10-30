//continue -->is also a jumping/skipping statement
//break--> whenever you want to exit the for loop or terminate the loop
//based on condition

for(let i=1; i<=10; i++)
{
    
    if(i==5){
        break;
    }
   console.log(i)
}

console.log("***********")

for(let i=1; i<=10; i++)
{
    if(i==5){
        continue;
    }
   console.log(i)
}

console.log("***********")

for(let i=1; i<=10; i++)
{
    if(i==3 || i==5 || i==7){
        continue
    }
    console.log(i)
}

