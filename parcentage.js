const prompt = require("prompt-sync")({sigint: true});

const price = prompt("Enter your product price: ");
if(price>= 5000){
    const discount = (price/100)*10;
    const discountPrice= price - discount;
    console.log("after 10% discount your product price is: ", discountPrice);
}else(
    console.log("sorry you are not eligable for discount ")
)