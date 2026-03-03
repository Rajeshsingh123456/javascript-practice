// lets practice 
//q1 for a given array of no print the square of the eacj value using forech loop method.(2=4)
let array=[1,2,12,32,43];
array.forEach((val)=>{
    console.log(val*val);
});

//q2 we are given of marks of student .filter our of the marks of student that scored 90+.
let marks=[12,34,56,78,90,98,96,94,93,34];
let result=marks.filter((value)=>{//new array bnata hai toh isko new variable me store jarana padega for print
    return value>90;//new array bnaega because filter new array hi bna ke deta hai isliye return kiya  
    
});
console.log(marks);//same rhega purana vala 
console.log(result)//new array bna ke print kara dega 

//q3 take a no n as a input from user create an array of number from 1 to n.
//use reduce methode to calculate sum of all number in the array 
//use the reduce method to calculate product of all number in the array.

let n=prompt("enter a no");//user se ek no lenge jo n me store hoga vo arry ki lenght or vhi tak arry ke no store hunge hunge.
let arr=[];//array bna diya isme no store karne ke liye loop lgayenge 
for (let i=0;i<=n;i++){
    arr[i-1]=i; //1store in 0 index 
}
console.log(arr)
let r =arr.reduce((result,current)=>{
    return result*current; //for sum + kar do
   
});
console.log(r)


