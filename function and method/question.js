//Q1. Selective Discount (Filter & Map).Aapke paas products ki ek array hai: let prices = [100, 500, 1200, 800, 200, 1500].
//Pehle un prices ko filter karein jo 1000 se zyada hain.Phir un par(yani ki 1000se jayda wali value me new arra me map use karo)
//  10% discount apply karke ek nayi array banayein (using map).

let prices = [100, 500, 1200, 800, 200, 1500];
let expensiveItems = prices.filter(p => p > 1000); // Result: [1200, 1500]

let discountedPrices = expensiveItems.map((p) => { // p me 1000 se jayda wali value store hunge right 
    let discount = p * 0.10; // dicount varible me 10%discount nikal lenge p value ka 
    return p - discount;      // p value me 1000 se jayda wale value hai usme se - hungi dicount value jo result hoga return ho discountedprices varibale me 
});
console.log(`value they are greater the 1000 is ${expensiveItems}`);
console.log(`the price after apply 10% discount in those value they are greater then 1000 so price is ${discountedPrices} `); 
// Output: [1080, 1350]


//Q2. Roll Number Formatter (Map)Ek student names ki array hai: let students = ["rajesh", "amit", "xyz"].
//map ka use karke har naam ke aage uska roll number jodiye (e.g., "1. rajesh", "2. amit"...).Hint: map ke callback mein second argument index (value, index) hota hai.

let students = ["rajesh", "amit", "xyz"];
let newarray=students.map((value ,index)=>{
    return `${index}. ${value}`;// template literal ka use kiya pehle index fir value with gap
});
console.log(newarray);

//q3 Even Numbers Only (Filter)Ek numbers ki array banaiye 1 se 20 tak.
// filter ka use karke sirf "Even Numbers" (jo 2 se divide hote hain) ki ek nayi array nikaaliye

let array = [];//array me mai chhata hu loop se no khud aaye
for (let i = 1; i <= 20; i++) {//loop 20 tak chalge jisme i ki value 1 se 20 tak hogi
  array.push(i);//jaise hi i=1 hoga ye array me 1 add kar dega i=2 hoga 1 ke baad 2 add kar dega
}
let evenno=array.filter((value)=>{//ye variable me return wali new value store hogi
  return value%2===0;//even no return karega jo new array bna dega 
})
console.log(`the even no is ${evenno}`);

// q4 Total Marks Check (forEach)let marks = [45, 80, 33, 90, 20].
//forEach ka use karke har marks ko check karein. Agar marks 33 se kam hain, toh console mein print karein: "Fail", warna print karein: "Pass".

let marks = [45, 80, 33, 90, 20];
marks.forEach((val)=>{
    if(val<33){
        console.log("Fail");
    }
    else{
        console.log("pass");
    }
});

//Q5. The "Amazon" Search (Filter)Maan lijiye aap Amazon clone par kaam kar rahe hain. Aapke paas products hain:
//let products = ["Apple iPhone", "Samsung Galaxy", "Apple MacBook", "Sony Headphones"].Aisa code likhiye jo sirf wahi items filter kare jinme "Apple" word aata ho.

let products = ["Apple iPhone", "Samsung Galaxy", "Apple MacBook", "Sony Headphones"];
let newproduct =products.filter((z)=>{
    return z.includes("Apple") //- includes("Apple") → check karta hai ki string ke andar "Apple" word hai ya nahi.
})
console.log(newproduct);