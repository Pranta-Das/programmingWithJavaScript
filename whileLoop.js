const prompt = require('prompt-sync')({sigint: true});
let num = 1;
while(num<5){
    console.log(num,'. Bangladesh')
    num++;
}

let s= 0;
let a= 1;
const number = prompt('Enter one integer number: ');
while(number>=a){
    s=s+a;
    a++;
}console.log('The sum is: ', s);
