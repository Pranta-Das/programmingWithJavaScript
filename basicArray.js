const arrayOne= [3,12,1,254,2,412,452,241,24,424,242,542];
console.log(arrayOne);
const arraySize = arrayOne.length;
console.log(arraySize);
const arrayIndex = arrayOne[5];
console.log(arrayIndex);
// update index value
arrayOne[4] = 299;
console.log(arrayOne);

// For adding some value in Array we have to use Push.
//If we use push then value will be added on the last of the array. 

arrayTow = ['Joy', 'Bijoy', 'raju', 'riju', "salam"];
console.log(arrayTow);
arrayTow.push('Nisad');
console.log(arrayTow);

//Now for removing any value mainly last value from the array we have to use arrayName.pop().

const arrayNumber = ['ami', 'Tumi ', 'sei'];
const removeLastValue = arrayNumber.pop();
console.log(removeLastValue);
console.log(arrayNumber);