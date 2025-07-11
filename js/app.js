function init(){
/*-------------------------------- Constants --------------------------------*/
const target = ''
const acceptedWords = []
const guesses = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
]
/*---------------------------- Variables (state) ----------------------------*/
let currentRow = 0

/*------------------------ Cached Element References ------------------------*/
const letterEl = document.querySelectorAll(".guess-letter")
const keyboardLetterEl = document.querySelectorAll(".keyboardLetter")
/*-------------------------------- Functions --------------------------------*/
function addLetter(letterEl){
    console.log(letterEl.textContent)
    for (let i = 0; i < guesses.length; i++){
        if (guesses[currentRow][i] === ''){
            guesses[currentRow][i] = letterEl.textContent
            console.log(guesses[currentRow])
            break
        }
    }
}
console.log(guesses)
function render(){}
/*----------------------------- Event Listeners -----------------------------*/
keyboardLetterEl.forEach(letterEl => {
    letterEl.addEventListener('click', () => addLetter(letterEl))
});
}

document.addEventListener('DOMContentLoaded',init)