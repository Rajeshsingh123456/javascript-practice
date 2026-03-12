// lets practice
//q1 create h2 heading eleement with text = "hello js" then .append ""from apna college student" to this text using js (means h2 me hello js se html me jo hai hello js from apnacollege student likhna hai )
let h2=document.querySelector("h2");
console.dir(h2);
h2.innerText=`${h2.innerText} from apna college student `;


// q2 create 3 div with common class name "box" access them and add some unique text to each of theme
// let div =document.querySelectorAll(".box");
// console.log(div);
// console.log(div[1]
// )// second wala box access ho jayega arry ki tarh hi hota hai ye na index 1 ko select kar diya 
//div.innerText="" isse sare divs me same aayega individual div me text change karna ho toh div[0]aise index seleect karte hai 
// div[1].innerText="hello this is select by index value 1 them change text";
// div[0].innerText="this is select by index value 0 them change text";
// div[2].innerText="this is select by index value 2 them change text";

// ye thi beginer bahut aam isme koi proble nhi hai but level jakar programing karte hai toh jab hume arry ke index me jakar print karna ahio loop ka use karte hai so vaise karenge ab 
// ye easy hota hai jayda hunge toh bina faltu jayda line code likhe 

let div = document.querySelectorAll(".box");// div variable se humne box id wale divs ko acces kiya div variable me daal diya 
let ind=0; // index bhi print kara rhe hai toh 0 le liye
for ( let value of div){// for off loop se humne saare div vriable ki values humne value me daal di or print kara di
 console.log(value);
value.innerText=`new value of box by loop ${ind}`;// ye text ke sath index bhi print karke dega 0,1,2 karke
ind++;

}

// extra question
//JavaScript ka use karke h2 ka text badal kar apna naam likho aur uska background-color yellow aur font-size 40px kar do.




//Task 1: Dynamic List Builder Scenario: Ek khali <ul> (unordered list) banayein.
//Task: JavaScript ka use karke is list mein 5 naye <li> elements insert karein. Requirement: Har list item ka text "Item 1", "Item 2"... hona chahiye aur har item ki text-color "blue" honi chahiye.
//Concepts: createElement, appendChild, .style. answer
// ul list bna di html me then
let list= document.querySelector("#my-list");// humne apne ul list ko select kar liya acces kar liya 
for ( let i =0; i<5;i++){ // ye isliye chalaya kyu jo li create karna hai 5 baar karna so thats why chalya 

let newele=document.createElement("li");// insert karne ke liye pehle create then insert 
console.dir(newele);
newele.innerText="item "+i; //Uske andar text dena hai hume  (Item 1, Item 2 etc.) karke.toh humne inner text me iteam likh diya or i 1 2 3 aise print hote rhega 
newele.style.color="blue";// har ek li ka text color blue kar diya 
list.appendChild(newele); //Is naye <li> ko apni <ul> ke andar append (insert) kardo
}





