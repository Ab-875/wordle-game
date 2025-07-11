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
    if (winner === true){
        return
    }
    for (let i = 0; i < guesses.length; i++){
        if (guesses[currentRow][i] === ''){
            guesses[currentRow][i] = letterEl.textContent
            console.log(guesses[currentRow])
            break
        }
    }
    render()
}

function addLetterKeyboard(keyLetter){
    if (winner === true){
        return
    }
    for (let i = 0; i < guesses.length; i++){
        if (guesses[currentRow][i] === ''){
            guesses[currentRow][i] = keyLetter
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

        const guessLetterId = `${currentRow}-${i}`
        const boxEl = document.getElementById(guessLetterId)

        boxEl.classList.remove('correct-letter','present-letter','absent-letter')

        const keyEl = document.querySelector(`.keyboardLetter[id="${guessLetter}"]`)

        if (guessLetter === correctLetter){
            boxEl.classList.add('correct-letter')
            if(keyEl && !keyEl.classList.contains('correct-letter')){
            keyEl.classList.remove('present-letter','absent-letter')
            keyEl.classList.add('correct-letter')
            }
            console.log(`${guessLetter}: green`)
        } else if (targetchar.includes(guessLetter)){

            boxEl.classList.add('present-letter')

            if(keyEl && !keyEl.classList.contains('correct-letter') && !keyEl.classList.contains('present-letter')){
                keyEl.classList.remove('absent-letter')
                keyEl.classList.add('present-letter')
            }
            boxEl.classList.remove()
            console.log(`${guessLetter}: yellow`)
        } else {
            boxEl.classList.add('absent-letter')
            if(keyEl && !keyEl.classList.contains('correct-letter') && !keyEl.classList.contains('present-letter' && !keyEl.classList.contains('absent-letter'))){
                keyEl.classList.add('absent-letter')
            }
            console.log(`${guessLetter}: absent`)
        }
    }
    checkWinCondition()
    currentRow++
}

function handleKeyPress(event){
    const keyLetter = event.key.toUpperCase();

    if (/^[A-Z]$/.test(keyLetter)){
        addLetterKeyboard(keyLetter)
    }

    else if (event.keyLetter === 'Backspace'){
        removeLetter()
    }
    else if (event.keyLetter === 'Enter') {
        checkGuess()
    }
}

function checkWinCondition(){
    const guessedWord = guesses[currentRow].join('')

    if (guessedWord === target) {
        winner = true
        console.log(winner)
    }
    if (currentRow === 6 && !winner){
        winner = false
        console.log(winner)
    }
}

function render(){
    for (let i = 0; i < guesses[currentRow].length; i++){
        const guessLetterId = `${currentRow}-${i}`
        const boxEl = document.getElementById(guessLetterId)
        boxEl.textContent = guesses[currentRow][i]
    }
}

/*----------------------------- Event Listeners -----------------------------*/
keyboardLetterEl.forEach(letterEl => {
    letterEl.addEventListener('click', () => addLetter(letterEl))
});

deleteBtnEl.addEventListener('click',removeLetter)
submitBtnEl.addEventListener('click',checkGuess)
document.addEventListener('keydown', handleKeyPress)
}


document.addEventListener('DOMContentLoaded',init)