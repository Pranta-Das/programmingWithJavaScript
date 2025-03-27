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

//If i want to remove any value from the array:

const num1= ['pranto', 'joy', 'karim'];
num1.shift();
console.log(num1);

//If i want to add value start of the array:

const num2 = [565,34,2,23,34,23];
num2.unshift('heyNumers');
console.log(num2);

//for find out any value from array

const a= ['tumi', 'sei', 'ami', 'joy']
const findOut = a.includes('sei');
console.log(findOut);

const c = a.includes('AMI');
console.log(c);

//For finding out the index number:

const fileOne = [15,545,2,4,45,54,5245,1,4];
console.log(fileOne.length);

const fileTow = fileOne.indexOf(4);
console.log(fileTow);

const arrayFive = ["pranto", 'joy', 'Antor'];
const findingValue = arrayFive.indexOf('hero');
console.log(findingValue);