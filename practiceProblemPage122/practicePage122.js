const prompt = require('prompt-sync')({sigint:true});

let a=1;
while(a<30){
    console.log(a);
    
    if(a>=15){
        break;
    }
    a++;
}

