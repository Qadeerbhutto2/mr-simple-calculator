#! /usr/bin/env node
import inquirer from "inquirer";
// printing a wellcome message
console.log("\n\tWellcome To \'MrLegend\' - CLI Simple Calculator\n");
// asking Question users from inquirer
let answers = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    }
]);
// conditional statements if else
if (answers.operator === "Addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.fristnumber - answers.secondnumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("invalid input");
}
