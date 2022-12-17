//import { WORDS } from "./Words";
// const { WORDS } = require('./words.js');

window.addEventListener('load', () => {
    console.log('loaded scripts')



})

const numberOfGuesses = 6;

let guessesRemaining = numberOfGuesses;

let currentGuess = [];

let secretWord = WORDS[Math.floor(Math.random() * WORDS.length)]
//console.log(secretWord)

function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = letter;
    box.id = `box${row}${col}`;
  
    container.appendChild(box);
    return box;
  }

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';
  
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        drawBox(grid, i, j);
      }
    }
  
    container.appendChild(grid);
  }
const game = document.getElementById(`game-board`)


function getCurrentRow() {
    const gameBoard = document.querySelector('#game-board');

    let currentRow;

    for(let i = 0; i < gameBoard.children.length; i++) {
        let isRowFull = gameBoard.children[i].filter(eachLetterInRow => eachLetterInRow.innerHTML !== '').length === 5
        if(!isRowFull) {
            currentRow = gameBoard.children[i]
            return currentRow;
        }
    }
}

function checkLetterInputs(currentRow) {
    currentGuess.forEach((letter, i) => {
        if(secretWord.includes(letter)) {
            if (secretWord.charAt(i) === letter) {
                letter.className = 'green'
            } else {
                letter.className = 'yellow'
            }
        } else {
            letter.className = 'gray'
        }
    })
}

function addClickEventsToButtons() {
    document.querySelectorAll('#keyboard-cont').children.forEach(childNode => {
        childNode.addEventListener('click', (event) => {
            const currentValue = event.innerHTML

            console.log({currentValue})
        })
    })
}

addClickEventsToButtons()