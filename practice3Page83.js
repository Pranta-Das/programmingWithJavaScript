const prompt = require("prompt-sync")({sigint:true});

const bankBalance = prompt("Enter Your bank balance : ");
if(bankBalance<1000){
    console.log("Hey mister! Please deposite some money")
}else if(bankBalance>1000 && bankBalance<=5000){
    console.log("average life! Enjoy");
}else if(bankBalance>5000){
    console.log("Will you marry me");
}else{
    console.log("incorrect bank Balance");
}