//variables
const rollButton = document.getElementById("rollTheDice")
const outcome = document.getElementById("gameOutcome")
let displayTotal = document.getElementById('scoredisplay')
const score = document.getElementById("score")
const diceImage = document.getElementById("diceImage")
let text = document.createTextNode('')


let playerScore
let scoreArray = []
let totalScore
displayTotal.appendChild(text)
outcome.appendChild(text)
score.appendChild(text)
//syling

const Firstheader = document.getElementById("headingOne")
const paragraph = document.getElementById("explain")

Firstheader.style.color = "white";
Firstheader.style.textAlign = "center";
Firstheader.style.fontSize = "130px";

paragraph.style.color = "white";
paragraph.style.textAlign = "center";

diceImage.align = "center";




rollButton.addEventListener("click", () => {
   
    generateNumber(1, 6)
})






const generateNumber = (min, max) => {

    
    max = Math.floor(max)
    playerScore = Math.floor(Math.random() * (max - min + 1)) + min
    score.textContent = 'Player rolled a ' + playerScore
    score.classList.add('score')
    console.log(playerScore)
    scoreArray.push(playerScore)
    console.log(scoreArray)
    totalScore = scoreArray.reduce((a, b) => {
        return a + b
    }, 0)
    console.log('score', totalScore) 

    //how to get images
    
    let dice = document.createElement("img")
    dice.src = `./img/dice${playerScore}.png`
    diceImage.appendChild(dice) 
    
    
    //IF IF IF IF IF THIS WORKS
    
    if (playerScore > 1 && totalScore < 20) {
        outcome.textContent = ''
        displayTotal.textContent = ' score is ' + totalScore +' . You need to get 20 or more to win. Keep going!'
    }
    else if (totalScore > 20) {
        score.textContent = ''
        outcome.textContent = "Congratulations, you win!"
        displayTotal.textContent = ''
    }
    
}








