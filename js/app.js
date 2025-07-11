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
const deleteBtnEl = document.querySelector(".delete")
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
    render()
}

function removeLetter(){
    for (let i = guesses[currentRow].length - 1; i >= 0; i--){
        if (guesses[currentRow][i] !== ''){
            guesses[currentRow][i] = ''
            console.log(guesses[currentRow])
            break
        }
    }
    render()
}

console.log(guesses)
function render(){
    for (let i = 0; i < guesses[currentRow].length; i++){
        const guessLetterId = `${currentRow}-${i}`
        const boxEl = document.getElementById(guessLetterId)
        boxEl.textContent = guesses[currentRow][i]
    }
}

render()
/*----------------------------- Event Listeners -----------------------------*/
keyboardLetterEl.forEach(letterEl => {
    letterEl.addEventListener('click', () => addLetter(letterEl))
});

deleteBtnEl.addEventListener('click',removeLetter)
}


document.addEventListener('DOMContentLoaded',init)