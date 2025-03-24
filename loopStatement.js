const prompt=require("prompt-sync")({sigint:true}); 

let n = parseInt(prompt("enter a number : "));

let s = 0;
let a= 1;
// for(a=1; a<=n; a++){
//     s=s+a;
// }
do{
    s = s+a;
    a = a+1;
}while(a<=n)

console.log("the sum is : ", s);