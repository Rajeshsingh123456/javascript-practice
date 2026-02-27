//from lets practice
//q1create a function using the function keyword that takes a string as a argument return 
//the no of vowels in the string let count=0(check kare btaye kitne vowel hai).

function vowel(str){
    let count=0;
    for(let i=0; i<str.length; i++){
        if(str[i]==="a" || str[i]==="e"||str[i]==="o"||str[i]==="u"|| str[i]==="i"){
           count++ //count++: Ye shortcut hai count = count + 1 ka. Ise aise hi use karein.
        }

    }
  
      console.log(`vowel in the string ${str} is ${count}`);
}
vowel("rajesh")





//extra =Ek function banaiye isEven(num) jo ek number le.
//  Agar number even hai toh "Even" return kare, aur agar odd hai toh "Odd" return kare.
function isEven(num){
    if(num%2==0){
        return(`the number ${num} is even`);
    }
    else{
        return(`the number ${num} is odd`);
    }
}
let result=isEven(90);
console.log(result);

//k function banaiye findMax(a, b) jo do numbers mein se jo bada number hai use return kare.
//  (Bina Math.max use kiye try karein).
function findMax(a,b){
    if(a>b){
        return(`a number ${a} is greater the b`)
    }
    else{
        return (`a ${a} is less the b`)
    }
}
let max=findMax(90,12);
console.log(max)