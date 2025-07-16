# Project 1: 'Wordle' 

![Image of the Wordle Page](/assets/wordle.jpg)

### Introduction

If you're not familiar with wordle, it's a game where players have six attempts at guessing a five-letter. The logic of the game will be explained in more details below. I chose to do wordle since it's a game I enjoy playing in my spare time and was facinated with finding out how it fundamentally works

### Technologies Used

- HTML5
- CSS3
- JavaScript
- Git

### Get Started

- Instructions: As stated earlier your goal as a player is to guess a five-letter word in 6 attempts or less, after every guess the game gives you clues by displaying colored tiles showing if the letter is correct and is in the right position or completely absent.

- [play the game here](https://ab-875.github.io/wordle-game/)

### Development

Working on the game was a fun experience, understanding the logic of how every action has a reaction and where to go from there helped me know how to structure the logic in my code as well. The game required a lot of checking statements since the base of the game is comparing and validating. Here is an example of one of the letter comparing functions that checks if the letter is correct and in the right position:


``` 
    for (let i = 0; i < targetchar.length; i++) {
            const guessLetter = guess[i]
            const correctLetter = targetchar[i]
            const guessLetterId = `${currentRow}-${i}`
            const keyEl = document.querySelector(`.keyboardLetter[id="${guessLetter}"]`)
            const boxEl = document.getElementById(guessLetterId)

            boxEl.classList.remove('correct-letter', 'present-letter', 'absent-letter')

            if (guessLetter === correctLetter) {

                boxEl.classList.add('correct-letter')
                letterCount[guessLetter]--
                console.log(boxEl)

                if (keyEl && !keyEl.classList.contains('correct-letter')) {
                    keyEl.classList.remove('present-letter', 'absent-letter')
                    keyEl.classList.add('correct-letter')
                }
                console.log(`${guessLetter}: green`)
            }
        }
```

Here is an example of what visual queues look like in the game:

![color queues example](/assets/wordle-game-example.PNG)

From there the players win condition is getting all tiles in a row to be green (guessing right word) or running out of all six attempts and losing 

### Word List

Generally speaking I included 480 accepted words, and to make it easier I made sure they are gramatically easy words that are commonly used to teach children and as a whole English beginner friendly 

### References

- Bootstrap CSS 
    - [CSS Modal](https://getbootstrap.com/docs/4.0/components/modal/) 

- Bootstrap JavaScript
    - [JS Bootstrap](https://getbootstrap.com/docs/3.4/javascript/)

### Next Step

- Add Dark Mode
- A 6 or more letter words gamemode
- Expand word list to cover more user inputs

### Conclusion

After finishing this project I had a chance to reflect on what I learned and applied as well as achieving my initial goal of better understanding how the logic of wordle works. I would say this was a fun experience and a useful one as well.