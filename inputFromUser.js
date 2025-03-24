const prompt=require("prompt-sync")({sigint:true}); 

let num1 = parseInt(prompt("enter the first value : "));
let num2 = parseInt(prompt("enter the second value : "));
console.log(num1+num2);
if(num1> num2)
{
    console.log("the maximum value is : ", num1);
}
else{
    console.log("Maximum value is : ", num2);
}


