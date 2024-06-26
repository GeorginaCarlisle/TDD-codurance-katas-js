# TDD-codurance-katas-js

A repository to hold all Codurance katas completed using JavaScript and JEST.

## Contents

[Introduction to TDD](#introduction-to-ttd)

[Repository Navigation](#repository-navigation)

[Current Kata being completed](#current-kata-being-completed)

[Completed Katas](#completed-katas)

[Tools and Tech](#tools-and-tech)

[Set-up steps](#set-up-steps)

[JEST notes](#jest-notes)

[JSDoc notes](#jsdoc-notes)

---

## Introduction to TTD

## Repository navigation

This repository contains multiple Katas. In order to keep everything organised each kata has it's own folder within the main katas folder. Inside each specific kata file you will find the functionality for the challenge in one file and the tests for that functionality in a separate file. All instructions and kata details are contained here within this readme file.

## Current Kata being completed

### FizzBuzz

[Kata instructions and information](https://www.codurance.com/katas/fizzbuzz)

Start date: 24/06/24
Completed date:

Overview:
A kata design to introduce TTD and provide guidance. Chosen to check understanding of TTD and bring rusty skills back into use.

Challenges:

- Poor and rusty JEST testing skills
- Basic TTD knowledge and only used briefly before
- First time attempting to use JSDoc code comments

Learning to carry forward:

## Completed Katas

### Contents for katas

## Tools and Tech

### Languages

JavaScript
JSDoc - [documentation](https://jsdoc.app/)

### Frameworks

[JEST](https://jestjs.io/) - A JavaScript Testing Framework

### Set-up steps

1 - Create new repo in github and clone to VScode.

2 - 'npm init' to initialise a node.js project with package.json file.

3 - 'npm install --save-dev jest' to install the jest framework to run in development only.

4 - Create .gitignore file and include node_modules.

### JEST notes

[JEST documentation](https://jestjs.io/)

### JSDoc notes

[JSDoc documentation](https://jsdoc.app/)

A function documentation comment should be given to all functions to aid readability, maintenance and understanding.

Using specific JSDoc markup language will lead to:

- Clearer comments and therefore increased readability and code that's easier to understand and maintain in the future.
- Consistency of code comments across the full repository. With this consistency helping to ensure a high level of code comments are maintained (less likely to forget to include important info, as well as keeping info clear and to the point) and increasing the readability of the code.
- A number of tools available that can then search/pull JSDoc comments out of the code. Examples include: Automatic generation of documentation, intellisense tools can use JSDoc comments to provide better prompts/autocompletion to coders.

#### Key elements to a JSDoc tag

Tag should be created as a multi-line comment and sit directly above the function.

```javascript
/**
*
*
*/
function exampleFunction(){

}
```

All tags should include a description at the top followed by further information about the function using recognized JSDoc tags.

```javascript
/**
* Clear concise description of the function
* @param {string} email - users email address
* @returns {boolean} Email exists within database
*/
```

#### Tags used within this repository

@param {number} classSize - Number of children in the class.
  Where number is the data type the parameter expects, classSize is the name of the parameter and then a brief description.

@returns {boolean} True if the class size is less than 30, otherwise false.
  Where boolean is the data type of the returned value followed by a brief description.
