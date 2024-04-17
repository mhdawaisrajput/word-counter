#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const results: {paragraph: string} = await inquirer.prompt([
    {
        name: "paragraph",
        message: "Please enter your paragraph to count the words !",
        type:"input",
    }
]);
const words = results.paragraph.trim().split(" ");
console.log(words);
console.log(chalk.magentaBright.bold(`Word count of your paragraph is ${words.length}`));