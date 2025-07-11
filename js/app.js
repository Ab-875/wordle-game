function init(){
/*-------------------------------- Constants --------------------------------*/
const target = 'LEMON'
const acceptedWords = []
const guesses = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
]
let test = target.split('')
console.log(test)
const wordsList = [

]
/*---------------------------- Variables (state) ----------------------------*/
let currentRow = 0
let winner = false

/*------------------------ Cached Element References ------------------------*/
const letterEl = document.querySelectorAll(".guess-letter")
const keyboardLetterEl = document.querySelectorAll(".keyboardLetter")
const deleteBtnEl = document.querySelector(".delete")
const submitBtnEl = document.querySelector(".submit")
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

function checkGuess(){
    const targetchar = target.split('')
    const guess = guesses[currentRow]
    if (guess.includes('')){
        return
    }
    for (let i = 0; i < targetchar.length; i++){
        const guessLetter = guess[i]
        const correctLetter = targetchar[i]

        if (guessLetter === correctLetter){
            console.log(`${guessLetter}: green`)
        } else if (targetchar.includes(guessLetter)){
            console.log(`${guessLetter}: yellow`)
        } else {
            console.log(`${guessLetter}: absent`)
        }
    }

    currentRow++
}

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
submitBtnEl.addEventListener('click',checkGuess)
}


document.addEventListener('DOMContentLoaded',init)