#! /usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";
// Initialize user balace and pin code
let myBalace = 10000;
let myPin = 1415;
console.log("Welcome to the Mohsin,s ATM Machine");
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Please enter your pin code: ",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("Pin is correct, login sucessfully");
  //console.log(`current amount balance is: ${myBalace}`);
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Select an operation",
      choices: ["Withdraw Ammount", "Check balance"],
    },
  ]);
  if (operationAns.operation === "Withdraw Ammount") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the Amount to withdraw",
      },
    ]);
    if (amountAns.amount > myBalace) {
      console.log("Insufficent Balance");
    } else {
      myBalace -= amountAns.amount;
      console.log(`${amountAns.amount} Withdraw successfully`);
      console.log(`Your reaming balance is: ${myBalace}`);
    }
  } else if (operationAns.operation === "Check balance")
    console.log(`your accont balance is: ${myBalace}`);
} else {
  console.log("Pin is incorrect, Please try again");
}
