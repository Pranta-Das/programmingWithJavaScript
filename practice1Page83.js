const prompt = require("prompt-sync")({sigint:true});
const productPrice = prompt("Enter the total product price: ");
if (productPrice>=6000){
    const gettingDiscount = (productPrice/100)*15;
    const afterDiscount = (productPrice - gettingDiscount);
    console.log("Congratulations! After 15% discount your product cost is : ", afterDiscount);
}else if(productPrice>=3000){
    const secondCost = (productPrice/100)*10;
    const afterSecondDiscount = (productPrice-secondCost);
    console.log("Congratulation! After 10% discount your product cost is: ", afterSecondDiscount);
}else{
    console.log("For getting discount you have to buy more product");
}