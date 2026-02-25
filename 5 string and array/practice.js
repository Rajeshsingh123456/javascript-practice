//q= prompt the user to enter thier full name generate a username for them based on thier input .start username with@followed by thier fullname and ending with fullnamelength 
//ex @rajeshnegi10

// let a=prompt("enter your full name");
// console.log("@",a,a.length); isse bich me space aakar crate hoga jo username nhi hota username me space nhi chahiye.
//Matlab agar tum do strings ko jodna chahte ho ek single string banane ke liye, to + lagana padta hai.

let a=prompt("enetr your fullname without space");
let username="@"+a+a.length;
console.log(username);

// array practice 

// q1 for given array with marks of student [85,97,44,37,76,60] find the average of marks to entire class.
// average =sum/arr.length.
let marks =[85,97,44,37,76,60];
let sum=0;
for (let i of marks){
    sum=sum+i

}
console.log("sum",sum)
let average =sum/marks.length;
console.log("averageis",average);

//q2