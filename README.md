# Random Quote Generator

This project is a simple Random Quote Generator built using JavaScript. It displays a random inspirational quote along with its author's name when a button is clicked. You can view the live version of this project.[live Demo](https://mohamed-osama17.github.io/Random_Quote_Generator/).

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Code Explanation](#code-explanation)

## Introduction

The Random Quote Generator is designed to provide users with a source of motivation and inspiration by displaying random quotes from various authors. With each button click, a new quote and its author are displayed on the page.

## Usage

To use the Random Quote Generator:

1. Visit the [Live Demo](https://mohamed-osama17.github.io/Random_Quote_Generator/).
2. Click the "New Quote" button to display a random quote along with its author's name.
3. Enjoy the motivational and thought-provoking quotes!

## Code Explanation

The JavaScript code provided in this repository is responsible for generating and displaying random quotes on the web page. Here's a brief explanation of the key components:

- The `quote` array contains objects, each representing a quote with its associated quote and author.
- The `generateQuote()` function generates a random index to select a quote from the `quote` array and displays it on the web page.
- A check is implemented to prevent showing the same quote consecutively using the `previousIndex` variable.
- The `getElementById()` function is used to update the HTML elements with the generated quote text and author.

---

Thank you for checking out the Random Quote Generator project! If you have any questions, suggestions, or improvements, please feel free to reach out.


