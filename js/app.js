function init(){
/*-------------------------------- Constants --------------------------------*/
const acceptedWords = [
    'ABOUT',
    'ALERT',
    'ARGUE',
    'BEACH',
    'ABOVE',
    'ALIKE',
    'ARISE',
    'BEGAN',
    'ABUSE',
    'ALIVE',
    'ARRAY',
    'BEGIN',
    'ACTOR',
    'ALLOW',
    'ASIDE',
    'BEGUN',
    'ACUTE',
    'ALONE',
    'ASSET',
    'BEING',
    'ADMIT',
    'ALONG',
    'AUDIO',
    'BELOW',
    'ADOPT',
    'ALTER',
    'AUDIT',
    'BENCH',
    'ADULT',
    'AMONG',
    'AVOID',
    'BILLY',
    'AFTER',
    'ANGER',
    'AWARD',
    'BIRTH',
    'AGAIN',
    'ANGLE',
    'AWARE',
    'BLACK',
    'AGENT',
    'ANGRY',
    'BADLY',
    'BLAME',
    'AGREE',
    'APART',
    'BAKER',
    'BLIND',
    'AHEAD',
    'APPLE',
    'BASES',
    'BLOCK',
    'ALARM',
    'APPLY',
    'BASIC',
    'BLOOD',
    'ALBUM',
    'ARENA',
    'BASIS',
    'BOARD',
    'BOOST',
    'BUYER',
    'CHINA',
    'COVER',
    'BOOTH',
    'CABLE',
    'CHOSE',
    'CRAFT',
    'BOUND',
    'CALIF',
    'CIVIL',
    'CRASH',
    'BRAIN',
    'CARRY',
    'CLAIM',
    'CREAM',
    'BRAND',
    'CATCH',
    'CLASS',
    'CRIME',
    'BREAD',
    'CAUSE',
    'CLEAN',
    'CROSS',
    'BREAK',
    'CHAIN',
    'CLEAR',
    'CROWD',
    'BREED',
    'CHAIR',
    'CLICK',
    'CROWN',
    'BRIEF',
    'CHART',
    'CLOCK',
    'CURVE',
    'BRING',
    'CHASE',
    'CLOSE',
    'CYCLE',
    'BROAD',
    'CHEAP',
    'COACH',
    'DAILY',
    'BROKE',
    'CHECK',
    'COAST',
    'DANCE',
    'BROWN',
    'CHEST',
    'COULD',
    'DATED',
    'BUILD',
    'CHIEF',
    'COUNT',
    'DEALT',
    'BUILT',
    'CHILD',
    'COURT',
    'DEATH',
    'DEBUT',
    'ENTRY',
    'FORTH',
    'GROUP',
    'DELAY',
    'EQUAL',
    'FORTY',
    'GROWN',
    'DEPTH',
    'ERROR',
    'FORUM',
    'GUARD',
    'DOING',
    'EVENT',
    'FOUND',
    'GUESS',
    'DOUBT',
    'EVERY',
    'FRAME',
    'GUEST',
    'DRAFT',
    'EXIST',
    'FRAUD',
    'HAPPY',
    'DRAMA',
    'EXTRA',
    'FRESH',
    'HARRY',
    'DRAWN',
    'FAITH',
    'FRONT',
    'HEART',
    'DREAM',
    'FALSE',
    'FRUIT',
    'HEAVY',
    'DRESS',
    'FAULT',
    'FULLY',
    'HENCE',
    'DRILL',
    'FIBRE',
    'FUNNY',
    'NIGHT',
    'DRINK',
    'FIELD',
    'GIANT',
    'HORSE',
    'DRIVE',
    'FIFTH',
    'GIVEN',
    'HOTEL',
    'DROVE',
    'FIFTY',
    'GLASS',
    'HOUSE',
    'DYING',
    'FIGHT',
    'GLOBE',
    'HUMAN',
    'EAGER',
    'FINAL',
    'GOING',
    'IDEAL',
    'EARLY',
    'FIRST',
    'GRACE',
    'IMAGE',
    'EARTH',
    'FIXED',
    'GRADE',
    'INDEX',
    'EIGHT',
    'FLASH',
    'GRAND',
    'INNER',
    'ELITE',
    'FLEET',
    'GRANT',
    'INPUT',
    'EMPTY',
    'FLOOR',
    'GRASS',
    'ISSUE',
    'ENEMY',
    'FLUID',
    'GREAT',
    'IRONY',
    'ENJOY',
    'FOCUS',
    'GREEN',
    'JUICE',
    'ENTER',
    'FORCE',
    'GROSS',
    'JOINT',
    'JUDGE',
    'METAL',
    'MEDIA',
    'NEWLY',
    'KNOWN',
    'LOCAL',
    'MIGHT',
    'NOISE',
    'LABEL',
    'LOGIC',
    'MINOR',
    'NORTH',
    'LARGE',
    'LOOSE',
    'MINUS',
    'NOTED',
    'LASER',
    'LOWER',
    'MIXED',
    'NOVEL',
    'LATER',
    'LUCKY',
    'MODEL',
    'NURSE',
    'LAUGH',
    'LUNCH',
    'MONEY',
    'OCCUR',
    'LAYER',
    'LYING',
    'MONTH',
    'OCEAN',
    'LEARN',
    'MAGIC',
    'MORAL',
    'OFFER',
    'LEASE',
    'MAJOR',
    'MOTOR',
    'OFTEN',
    'LEAST',
    'MAKER',
    'MOUNT',
    'ORDER',
    'LEAVE',
    'MARCH',
    'MOUSE',
    'OTHER',
    'LEGAL',
    'MUSIC',
    'MOUTH',
    'OUGHT',
    'LEVEL',
    'MATCH',
    'MOVIE',
    'PAINT',
    'LIGHT',
    'MAYOR',
    'NEEDS',
    'PAPER',
    'LIMIT',
    'MEANT',
    'NEVER',
    'PARTY',
    'PEACE',
    'POWER',
    'RADIO',
    'ROUND',
    'PANEL',
    'PRESS',
    'RAISE',
    'ROUTE',
    'PHASE',
    'PRICE',
    'RANGE',
    'ROYAL',
    'PHONE',
    'PRIDE',
    'RAPID',
    'RURAL',
    'PHOTO',
    'PRIME',
    'RATIO',
    'SCALE',
    'PIECE',
    'PRINT',
    'REACH',
    'SCENE',
    'PILOT',
    'PRIOR',
    'READY',
    'SCOPE',
    'PITCH',
    'PRIZE',
    'REFER',
    'SCORE',
    'PLACE',
    'PROOF',
    'RIGHT',
    'SENSE',
    'PLAIN',
    'PROUD',
    'RIVAL',
    'SERVE',
    'PLANE',
    'PROVE',
    'RIVER',
    'SEVEN',
    'PLANT',
    'QUEEN',
    'QUICK',
    'SHALL',
    'PLATE',
    'SIXTH',
    'STAND',
    'SHAPE',
    'POINT',
    'QUIET',
    'ROMAN',
    'SHARE',
    'SHEET',
    'SPARE',
    'STYLE',
    'TIMES',
    'SHELF',
    'SPEAK',
    'SUGAR',
    'TIRED',
    'SHELL',
    'SPEED',
    'SUITE',
    'TITLE',
    'SHIFT',
    'SPEND',
    'SUPER',
    'TODAY',
    'SHIRT',
    'SPENT',
    'SWEET',
    'TOPIC',
    'SHOCK',
    'SPLIT',
    'TABLE',
    'TOTAL',
    'SHOOT',
    'SPOKE',
    'TAKEN',
    'TOUCH',
    'SHORT',
    'SPORT',
    'TASTE',
    'TOUGH',
    'SHOWN',
    'STAFF',
    'TAXES',
    'TOWER',
    'SIGHT',
    'STAGE',
    'TEACH',
    'TRACK',
    'SINCE',
    'STAKE',
    'TEETH',
    'TRADE',
    'SIXTY',
    'START',
    'TEXAS',
    'TREAT',
    'SIZED',
    'STATE',
    'THANK',
    'TREND',
    'SKILL',
    'STEAM',
    'THEFT',
    'TRIAL',
    'SLEEP',
    'STEEL',
    'THEIR',
    'TRIED',
    'SLIDE',
    'STICK',
    'THEME',
    'TRIES',
    'SMALL',
    'STICK',
    'THERE',
    'TRUCK',
    'SMART',
    'STOCK',
    'THESE',
    'TRULY',
    'SMILE',
    'STONE',
    'THICK',
    'TRUST',
    'SMITH',
    'STOOD',
    'THING',
    'TRUTH',
    'SMOKE',
    'STORE',
    'THINK',
    'TWICE',
    'SOLID',
    'STORM',
    'THIRD',
    'UNDER',
    'SOLVE',
    'STORY',
    'THOSE',
    'UNDUE',
    'SORRY',
    'STRIP',
    'THREE',
    'UNION',
    'SOUND',
    'STUCK',
    'THREW',
    'UNITY',
    'SOUTH',
    'STUDY',
    'THROW',
    'UNTIL',
    'SPACE',
    'STUFF',
    'TIGHT',
    'UPPER',
    'UPSET',
    'WHOLE',
    'WASTE',
    'WOUND',
    'URBAN',
    'WHOSE',
    'WATCH',
    'WRITE',
    'USAGE',
    'WOMAN',
    'WATER',
    'WRONG',
    'USUAL',
    'TRAIN',
    'WHEEL',
    'WROTE',
    'VALID',
    'WORLD',
    'WHERE',
    'YIELD',
    'VALUE',
    'WORRY',
    'WHICH',
    'YOUNG',
    'VIDEO',
    'WORSE',
    'WHILE',
    'YOUTH',
    'VIRUS',
    'WORST',
    'WHITE',
    'WORTH',
    'VISIT',
    'WOULD',
    'VITAL',
    'VOICE'
]
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
let winner = false
let message = ''
let numberOfWords = acceptedWords.length
let target = acceptedWords[Math.floor(Math.random() * numberOfWords)]
console.log(target)
/*------------------------ Cached Element References ------------------------*/
const keyboardLetterEl = document.querySelectorAll(".keyboardLetter")
const deleteBtnEl = document.querySelector(".delete")
const submitBtnEl = document.querySelector(".submit")
const howBtnEl = document.querySelector('.how-button')
const tutorialEl = document.getElementById('tutorial')
const closeTutorialBtnEl = document.getElementById('close-tutorial')
const resetBtnEl = document.getElementById('playAgain')
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

function checkDoubleLetter(){
    const targetchar = target.split('')
    let isDoubleLetter = false
    let doubleLetterIndexOne 
    let doubleLetterIndexTwo
    for (i = 0; i < guesses[currentRow].length; i++){
        for (j = 0; j < guesses[currentRow].length; j++){
            if (targetchar[i] === targetchar[j]){
                isDoubleLetter = true
                doubleLetterIndexOne = i
                doubleLetterIndexTwo = j
                return 
            }
        }
    }
}

function checkGuess(){
    const targetchar = target.split('')
    const guess = guesses[currentRow]
    const guessedWord = guesses[currentRow].join('')
    if (guess.includes('')){
        message = 'Fill out the entire row'
        document.getElementById('message').textContent = message
        return
    }

    if (!acceptedWords.includes(guessedWord)){
        message = 'Unaccepted word'
        document.getElementById('message').textContent = message
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
    message = ''
    document.getElementById('message').textContent = message
    checkWinCondition()
    currentRow++
}

function handleKeyPress(event){
    const keyLetter = event.key.toUpperCase();

    if (/^[A-Z]$/.test(keyLetter)){
        addLetterKeyboard(keyLetter)
    }

    else if (event.key === 'Backspace'){
        removeLetter()
    }
    else if (event.key === 'Enter') {
        checkGuess()
    }
}

function checkWinCondition(){
    const guessedWord = guesses[currentRow].join('')

    if (guessedWord === target) {
        message = `You guessed the word correctly! it took you ${currentRow+1} attempts`
        document.getElementById('message').textContent = message
        winner = true
        console.log(winner)
    }
    if (currentRow === 5 && !winner){
        message = `You ran out of attempts, the word was ${target}`
        document.getElementById('message').textContent = message
        winner = false
        console.log(winner)
    }
}

function displayTutorial(){
    tutorialEl.classList.remove('hidden')
}

function removeTutorial(){
    tutorialEl.classList.add('hidden')
}

function playAgain(){
    target = acceptedWords[Math.floor(Math.random() * numberOfWords)]
    console.log(target)
    currentRow = 0
    winner = false 
    for (let i = 0; i < guesses.length; i++){
        for (let j = 0; j < guesses[i].length; j++){
            guesses[i][j] = ''
        }
    }
    console.log(guesses)
    document.querySelectorAll('.guess-letter').forEach(element => {
        element.textContent = ''
        element.className = 'guess-letter'
    })

    keyboardLetterEl.forEach(element => {
        element.classList.remove('correct-letter', 'present-letter', 'absent-letter')
    })
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
resetBtnEl.addEventListener('click',playAgain)
howBtnEl.addEventListener('click',displayTutorial)
closeTutorialBtnEl.addEventListener('click',removeTutorial)
}


document.addEventListener('DOMContentLoaded',init)