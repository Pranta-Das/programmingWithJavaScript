const prompt=require("prompt-sync")({sigint:true}); 

let num1 = parseInt(prompt("enter the first value : "));
let num2 = parseInt(prompt("enter the second value : "));
let num3 = parseInt(prompt("enter the third value : "));
console.log(num1+num2);
if(num1> num2 && num1>num3)
{
    console.log("the maximum value is : ", num1);
}
else if(num2>num3)
    {
    console.log("Maximum value is : ", num2);
    }
    else{
        console.log("maximum number is : ", num3);
    }


