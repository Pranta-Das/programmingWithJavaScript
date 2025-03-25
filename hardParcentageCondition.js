const prompt = require("prompt-sync")({sigint:true})
 const price = prompt("Enter Your TOtal Product Price: ");
 if(price>=5000){
    const costCutting= (price/100)*10;
    const afterCostCutting = price-costCutting;
    console.log("Congratulations! You won 10% discount. So your product price is : ", afterCostCutting);
 }else if(price<5000 && price>2500){
    const secondDiscounnt = (price/100)*5;
    const secondDiscountPrice= price-secondDiscounnt;
    console.log("Sir, you got 5% discount. Your product price is : ", secondDiscountPrice);
 }else{
    console.log("sorry sir because of buying product less then 2500 tk we can't give you any discount")
 }