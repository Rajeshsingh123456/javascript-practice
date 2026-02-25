//q1 Create a array to store companies Microsoft uber google ibm Netflix Bloomberg
//a remove the first company form array
let companies=["microsoft","uber"," google", "ibm", "Netflix", "Bloomberg"];
companies.shift();
console.log(companies);

//b =add amazon at the end ,
//c = remove uber and add ola
let companie=["microsoft","uber"," google", "ibm", "Netflix", "Bloomberg"];
companie.push("amazon");
console.log(companie);
companie.splice(1,1,"ola");
console.log(companie);



//ye extra practice hai
// let data = [100, 200, 300];
// Ek new array banao jisme:
// Start me 50 ho
// End me 400 ho
// Original array change nahi hona chahiye

let data = [100, 200, 300];
let nn=[50].concat(data,400);

console.log(data);
console.log(nn);

let arr = [10, 20, 30, 40, 50, 60];
//👉 Sirf first 3 elements ka ek new array banao using slice().
console.log(arr.slice(0,3));

//Ek array diya hai:
//👉 "mango" aur "orange" ka new array banao.
let fruits = ["apple", "banana", "mango", "orange", "grapes"];
let newfr=fruits.slice(2,4);
console.log(newfr);

//Ek array diya hai:let numbers = [5, 10, 15, 20, 25, 30];👉 Last 2 elements ka new array banao negative index use karke.
let numbers = [5, 10, 15, 20, 25, 30];
console.log(numbers.slice(-2));//- se last se element select karta hai 


//User ne "Bag" aur "Cap" remove kar diye. Bina manually index count kiye remove karo
// Updated cart print karo

let cart = ["Shoes","Watch","Bag","Cap","Jacket"];

// "Bag" aur "Cap" remove karna
let start = cart.indexOf("Bag");  // "Bag" ka index select yani starting index ho gya
let count = 2;                    // "Bag" aur "Cap" dono remove karne haiye detelecount wla index ho gya kitne karne hai

cart.splice(start, count); // yaha par splice kar diya dono ko 

console.log(cart);//then print




