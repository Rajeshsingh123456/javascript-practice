// create a game where you start with any random game number .ask the user to keep guessing the number .untill the user enter the coorect number.

let game_no=20;
let un=prompt("please guess the no");
let count=1;
while(un!=game_no){
    un= prompt(" ohh sorry you guess wrong please guess the no again");
    count++;
}
console .log("you gues right no")
console.log(count);

