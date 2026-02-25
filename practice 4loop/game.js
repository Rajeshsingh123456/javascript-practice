
let game_no = Number(prompt("Person 1: Enter a number"));
let guess = Number(prompt("Person 2: Guess the number"));

let count = 1;

while (guess !== game_no) {
    guess = Number(prompt("Wrong guess ❌ Try again!"));
    count++;
}

console.log("🎉 Correct guess!");
console.log("Total attempts:", count);