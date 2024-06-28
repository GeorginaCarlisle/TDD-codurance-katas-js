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

[Credits](#credits)

[Acknowledgements](#acknowledgements)

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

### TDD notes

The "why" of TDD is that by concentrating on the simplest solution possible and working step by step starting with the simplest unit of functionality and elegant solution will emerge.

#### First principle of TDD

"You are not allowed to write any production code unless it is for making a failing unit test pass."
The focus should then be on writing just enough code to pass the test. This includes **faking it!** and writing the **obvious implementation**.

#### Driving tdd

At every stage ask
"What particular behaviour in the specification are we driving towards?"

Focusing on the simplest unit of functionality first! And not adding any additional features until the current one is fully implemented.

#### Rule of three

When duplication starts to emerge, allow a pattern to emerge before refactoring. Conformation to the **DRY priniciple** should be the ultimate goal BUT by holding off initially (deferring decision making) you will be able to hit on a solution that better fits the pattern. Rather than rushing in before truly understanding the pattern.

The rule of three suggests deferring refactoring until three cases of obvious redundancy are seen.

Once a rule-of-three violation occurs a leap needs to be made from a specific solution to a more generic one. Associated tests will also need refactoring to avoid duplication. This could be done by using a parameterized test case.

#### Extra info

**Validation**:
Good code design suggests separating the responsibility of checking input validity from the responsibility of executing the algorithm. The realtes to the principle "Separation of Concerns". In these katas the focus will be on algorithm execution.

**Naming tests**:
The best practice is to use names that describe the business functionality or feature. This allows you to refactor your code such that, as long as the business behaviour remains the same, you should not have to change your test name.

### JEST notes

[JEST documentation](https://jestjs.io/)

#### Parameterized test cases

JESTs test.each() method can be used to add multiple parameters to be tested within one test case. Example from the fizz-buzz kata:

``` javascript
test.each([
  [1, "1"],
  [2, "2"],
  [4, "4"],
])('fizzBuzz converts standard numbers to their string equivalent', (input, expected) => {
  expect(fizzBuzz(input)).toBe(expected);
});
```

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

## Credits

### TDD learning

The TDD notes were created following reading information provided at the following locations and comprise of a mixture of my summary and understanding with some directly copied information.

- [Codurance guided TDD kata](https://www.codurance.com/katas/fizzbuzz)

## Acknowledgements
