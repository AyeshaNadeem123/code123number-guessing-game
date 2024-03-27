#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 5) + 1;
const answers = await inquirer.prompt({
    name: "randomNumber",
    type: "number",
    message: "guess the number"
});
if (answers.randomNumber === randomNumber) {
    console.log("Congratulations you guessing number is correct");
}
else {
    console.log("you guessing number is wrong please try againt");
}
