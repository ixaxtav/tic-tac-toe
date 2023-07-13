# Tic Tac Toe Game

This is a simple implementation of the classic game Tic Tac Toe using React. It allows two players to take turns marking X and O on a 3x3 grid, with the goal being to get three of their marks in a row, column, or diagonal.

Demo: https://ixaxtav.github.io/tic-tac-toe/

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository and navigate into the project directory.
2. Run `npm install` to install the required dependencies.
3. Run `npm run dev` to run the app.
   
## Usage

To start the Tic Tac Toe game, run `npm start` in the project directory. This will launch the game in your browser.

## How it Works

### Board Component

The main component in this game is the `Board` component. It manages the game state, including the current board, the current player, and the winner. Here's an overview of how it works:

- The initial state of the board is stored in the `board` state variable as an array of strings, where each string represents the value ("X" or "O") of a cell.
- The current player is stored in the `currentPlayer` state variable as a string ("X" or "O").
- The winner is stored in the `winner` state variable as a string. It is initially empty, but gets updated when a player wins or there is a draw.
- When a player clicks on a cell, the `handleClick` function is called. It checks if the cell is empty and there is no winner yet. If both conditions are met, it updates the board, current player, and checks for a winner.
- The `checkWinner` function iterates through the `winningCombinations` array, which contains all possible winning combinations of cells. It checks if any of the combinations match the current board state. If a match is found, the winner is set and the game ends. If all cells are filled and no winner is found, it is a draw.
- The `handleReset` function resets the board, current player, and winner to their initial states when the "Reset" button is clicked.

### Square Component

The `Square` component represents each cell on the board. It receives the value of the cell (either "X", "O", or empty) and an onClick event handler from the `Board` component. When clicked, it calls the onClick event handler to update the board state.

