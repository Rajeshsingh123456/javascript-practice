//Ek object banao {name: "Rajesh", age: 21, city: "Delhi"}Aur for...in loop se keys aur values print karo.
const person ={
    name:"rajesh",
    age:19,
    city: "delhi",
};
for (let key  in person){
    console.log(key, person[key]);
}

//Ek array banao ["apple", "banana", "mango"]Aur for...in loop se index aur value print karo.

let arr=["apple","banana","mango","orange"];
for (let i in arr){
    console.log(i , arr[i]);
}

//usi arr me for off loop se sirf value print karo
let s=["apple","banana","mango","orange"];
for (let val of s){
    console.log(val);
}

// Ek string "Rajesh" lo aur for...of loop se har character print karo
let str="rajesh";
for (let i of str){
    console.log(i);
}

//Ek array banao [10, 20, 30, 40, 50]Aur for loop use karke total sum print karo.
let ar=[10,20,30,40,50,60];
let sum=0;
for (let i=0; i<ar.length;i++){
    sum=sum+ar[i];
}
console.log("sum of arry is =",sum)

//ek object bnao Aur for...in loop se values ko ek string me jodo Output: "Rajesh Kumar Delhi".

let people= {
  firstName: "Rajesh",
  lastName: "negi",
  city: "Delhi"
};
for( let i in people){
    console.log(Object.values(people).join(" ")); /*- Object.values → object ke values ko array banata hai
- join(" ") → array ke elements ko ek string me space ke saath jodta hai
- console.log → final string print kar deta ha*/

}


// Ek string lo "rajesh"Aur for...of loop se vowels (a, e, i, o, u) count karo.
let string= "rajesh";
let count =0;
for ( let i of string){
  if (i==="a"|| i==="e"|| i==="o" || i==="i" || i==="u")
  {
    count++;
  }
}
console.log("total vowel=",count);

//Ek object banao {a:1, b:2, c:3}
// Aur for...in loop se keys ek array me aur values ek alag array me store karo.

let obj = {
a:1,
 b:2,
 c:3
    };

let keys = [];
let values = [];

for (let key in obj) {
  keys.push(key);        // key ko keys array me daalna
  values.push(obj[key]); // value ko values array me daalna
}

console.log("Keys:", keys);
console.log("Values:", values);

// push ek array method hai jo kisi array ke end me naya element add karta hai.
