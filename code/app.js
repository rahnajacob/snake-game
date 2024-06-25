// User Stories:

// 1. Once the website loads, I want to see the empty board with an empty scoreboard in front of me. 
// 2. I want a prompt or button of some kind to see when/how I can begin playing. 
// 3. Once I start playing, I want the snake to appear from the same place each time. 
// 4. I want the snake, the fruit, the board and its borders to be visually distinct. 
// 5. I want a replay button that doesn't wipe out my high score. 
// 6. I want to see a score in some fashion - either snake length or fruit eaten 
// 7. I want to win if (1) there is no fruit present (2) the snake fills up the the entire board grid 
// 8. I want to lose if the snake (1) runs into itself or (2) runs into one of the borders 
// 9. If I win or lose, I want a message to explain that 
// 10. I want to see (1) the snake move across the board (2) the fruit appear in random places on the board
// 11. I want the fruit to spawn only in empty cells
// 12. Slow increase in speed of snakeArray grid movement corresponding to snakeArray.length

// OPTIONAL: 

// 1. I would like the option to change the colour of the snake and the fruit 
// 2. I would like sounds effects for (1) eating fruit (2) winning (3) losing 
// 3. I would like to enable the option to have a soundtrack playing while the game is running 
// 4. I want to keep track of both my current score as well as my high score 


/*-------------- Constants -------------*/
 const gridWidth = 20;
 const gridHeight = 20;
 const totalGridCount = gridWidth * gridHeight;
 const snakeStartingPosition = //board index of 2, length of three
 const snakeStartingDirection; //board[i + 1]

/*---------- Variables (state) ---------*/

let currentScoreValue;
//starts as zero, +10 for every fruit consumed

//

let gridDisplay;
// starts out empty, then visual of snake movement + length updating plus randomised fruit drops 

let snakeArray = [];
// length = 3 at the start of the game, css styling of bg-color: "colour"

let fruit;
//css styling: 1 cell of colouring, class of fruit

let winState;
//set to false

let loseState;
//set to false

let intervalTime;
//1000 or 1500ms at the beginning?

let snakeColour; //OPT

let fruitColour; //OPT

let highScoreValue = []; //OPT
//starts as zero, PUSH currentScore once game has reached a win or fail state
//look up local storage- JS, use to store the values instead

/*----- Cached Element References  -----*/
 // newGameButton (aka play/reset button)
 // resetHighScoreButton
 // OPT: toggleMusicButton
 // messageDisplay
 // gridWrapper from HTML, needed to append grid created using JS
 // individual gridDivs created using JS

 init()
/*-------------- Functions -------------*/

function createGrid(){
    // for(let i = 0; i < totalGridCount; i++) {
    //     let div = document.createElement("div")
    //     set individual grid square id = [i]
    //     appendChild onto grid wrapper in HTML
    // }
}

function init () {
    // winState = false
    // currentScore = 0
    // toggleMusicButton.audio.mute = true
    // render()
}

function render() {
    //update gridDisplay
    //update messageDisplay
}

function placeFruit() {
    //IF board has empty positions in array
        //THEN Math.random, Math.floor(place one fruit in an empty array position)
    //ELSE return false
}

function snakeEating() {
    //IF current snake array contains class of fruit, remove fruit and +1 to snake array?
    //IF position of snake[0] on the board = position of fruit on the board, add points?
    //snakeArray.push(one more unit)
    //delete fruit from the board index
    //currentScore()
}

function snakeMovement(e) {
    //arrowButton = e.target.key (confirm whether key or keyCode)
    //IF left: snake[0]at grid position moves to board[i - 1]
        //AND board[i] % boardWidth != 0
    //IF right: moves to board[i] +1
        //AND board[i] % boardWidth != boardWidth - 1
    //IF up: moves to board[i] - gridWidth
        //AND board[i] >= 0
    //IF down: moves by board[i] + gridWidth
        //AND board[i] <= totalGridCount - 1
    //ELSE: snake has hit border wall, lose state = true
    //UNSHIFT at head + POP at tail
}

function currentScore() { 
    //adds 10 pts for every fruit
    //placeFruit()
}

function checkForWinning() {
    //IF !empty grid AND placeFruit = false, set winState = true
    //set displayMessage = "Congratulations, you have won"
    //PUSH currentScore.innerText to highScore
}

function checkForLosing() {
    //IF grid movement tries to go out of bounds OR if snake[0] on board array = snake[i] on board array //classList.contains - use to check if grid being moved to contains snake class (use in checkforWalls and checkforfruit?)
    //set displayMessage = "You have lost! Would you like to try again?"
    //PUSH currentScore.innerText to highScore
}

function highScore() {
    //loop through array values to find highest score
    //let highScoreValue = highest score
}

function resetHighScore() {
    //set highScore value = 0
}
/*----------- Event Listeners ----------*/
newGameButton.addEventListener("click", init)
resetHighScoreButton.addEventListener("click", resetHighScore)
document.addEventListener("keyup", snakeMovement)

