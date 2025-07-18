import { acceptedWords } from './data.js'
function init() {
    /*-------------------------------- Constants --------------------------------*/
    const guesses = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ]
    /*---------------------------- Variables (state) ----------------------------*/
    let currentRow = 0
    let winner = false
    let message = ''
    let numberOfWords = acceptedWords.length
    let target = acceptedWords[Math.floor(Math.random() * numberOfWords)]
    // console.log(target)
    /*------------------------ Cached Element References ------------------------*/
    const keyboardLetterEl = document.querySelectorAll(".keyboardLetter")
    const deleteBtnEl = document.querySelector(".delete")
    const submitBtnEl = document.querySelector(".submit")
    const howBtnEl = document.querySelector('.how-button')
    const resetBtnEl = document.getElementById('playAgain')
    /*-------------------------------- Functions --------------------------------*/
    function addLetter(letterEl) {
        if (winner === true) {
            return
        }
        for (let i = 0; i < guesses.length; i++) {
            if (guesses[currentRow][i] === '') {
                guesses[currentRow][i] = letterEl.textContent
                break
            }
        }
        render()
    }

    function addLetterKeyboard(keyLetter) {
        if (winner === true) {
            return
        }
        for (let i = 0; i < guesses.length; i++) {
            if (guesses[currentRow][i] === '') {
                guesses[currentRow][i] = keyLetter
                break
            }
        }
        render()
    }

    function removeLetter() {
        for (let i = guesses[currentRow].length - 1; i >= 0; i--) {
            if (guesses[currentRow][i] !== '') {
                guesses[currentRow][i] = ''
                break
            }
        }
        render()
    }

    function checkGuess() {
        const targetchar = target.split('')
        const guess = guesses[currentRow]
        const guessedWord = guesses[currentRow].join('')
        if (guess.includes('')) {
            message = 'Fill out the entire row'
            document.getElementById('message').textContent = message
            return
        }

        if (!acceptedWords.includes(guessedWord)) {
            message = 'Unaccepted word'
            document.getElementById('message').textContent = message
            return
        }

        const letterCount = {}
        for (let character of targetchar) {
            letterCount[character] = (letterCount[character] || 0) + 1
        }

        //green check
        for (let i = 0; i < targetchar.length; i++) {
            const guessLetter = guess[i]
            const correctLetter = targetchar[i]
            const guessLetterId = `${currentRow}-${i}`
            const boxEl = document.getElementById(guessLetterId)
            const keyEl = document.querySelector(`.keyboardLetter[id="${guessLetter}"]`)

            boxEl.classList.remove('correct-letter', 'present-letter', 'absent-letter')

            if (guessLetter === correctLetter) {

                boxEl.classList.add('correct-letter')
                letterCount[guessLetter]--

                if (keyEl && !keyEl.classList.contains('correct-letter')) {
                    keyEl.classList.remove('present-letter', 'absent-letter')
                    keyEl.classList.add('correct-letter')
                }
            }
        }

        //yellow and gray check
        for (let i = 0; i < targetchar.length; i++) {
            const guessLetter = guess[i]
            const guessLetterId = `${currentRow}-${i}`
            const boxEl = document.getElementById(guessLetterId)
            const keyEl = document.querySelector(`.keyboardLetter[id="${guessLetter}"]`)

            if (boxEl.classList.contains('correct-letter')) continue

            if (targetchar.includes(guessLetter) && letterCount[guessLetter] > 0) {

                boxEl.classList.add('present-letter')
                letterCount[guessLetter]--

                if (keyEl && !keyEl.classList.contains('correct-letter') && !keyEl.classList.contains('present-letter')) {
                    keyEl.classList.remove('absent-letter')
                    keyEl.classList.add('present-letter')
                }
            } else {

                boxEl.classList.add('absent-letter')

                if (keyEl && !keyEl.classList.contains('correct-letter') && !keyEl.classList.contains('present-letter') && !keyEl.classList.contains('absent-letter')) {
                    keyEl.classList.add('absent-letter')
                }
            }
        }

        message = ''
        document.getElementById('message').textContent = message
        checkWinCondition()
        currentRow++
    }

    function handleKeyPress(event) {
        const keyLetter = event.key.toUpperCase();

        if (/^[A-Z]$/.test(keyLetter)) {
            addLetterKeyboard(keyLetter)
        }

        else if (event.key === 'Backspace') {
            removeLetter()
        }
        else if (event.key === 'Enter') {
            checkGuess()
        }
    }

    function checkWinCondition() {
        const guessedWord = guesses[currentRow].join('')

        if (guessedWord === target) {
            message = `You guessed the word correctly! it took you ${currentRow + 1} attempts`
            document.getElementById('message').textContent = message
            winner = true
        }
        if (currentRow === 5 && !winner) {
            message = `You ran out of attempts, the word was ${target}`
            document.getElementById('message').textContent = message
            winner = false
        }
    }

    function playAgain() {
        target = acceptedWords[Math.floor(Math.random() * numberOfWords)]
        currentRow = 0
        winner = false
        for (let i = 0; i < guesses.length; i++) {
            for (let j = 0; j < guesses[i].length; j++) {
                guesses[i][j] = ''
            }
        }
        document.querySelectorAll('.guess-letter').forEach(element => {
            element.textContent = ''
            element.className = 'guess-letter'
        })

        keyboardLetterEl.forEach(element => {
            element.classList.remove('correct-letter', 'present-letter', 'absent-letter')
        })
        message = ''
        document.getElementById('message').textContent = message
    }

    function render() {
        for (let i = 0; i < guesses[currentRow].length; i++) {
            const guessLetterId = `${currentRow}-${i}`
            const boxEl = document.getElementById(guessLetterId)
            boxEl.textContent = guesses[currentRow][i]
        }
    }

    /*----------------------------- Event Listeners -----------------------------*/
    keyboardLetterEl.forEach(letterEl => {
        letterEl.addEventListener('click', () => addLetter(letterEl))
    });

    howBtnEl.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
        }
    });

    deleteBtnEl.addEventListener('click', removeLetter)
    submitBtnEl.addEventListener('click', checkGuess)
    document.addEventListener('keydown', handleKeyPress)
    resetBtnEl.addEventListener('click', playAgain)
}


document.addEventListener('DOMContentLoaded', init)