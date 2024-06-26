#! /usr/bin/env node
// npm login in cmd
// npm publish in cmd
// npx (name of package) published on npm
//git init
//.gitignore (Add folder/file names to ignore)
// git add .
// git commit -m "messag"
// git push -u origin main (First Time)
// git push origin main
import inquirer from "inquirer";
// npm install inquirer
// npm install --save-dev @types/inquirer
const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "firstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
    {
        message: "List one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log(answer);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    "Please select valid operator";
}
