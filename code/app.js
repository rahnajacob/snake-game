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
 const totalCellCount = gridWidth * gridHeight;


/*---------- Variables (state) ---------*/

let currentScoreValue;
//starts as zero, +10 for every fruit consumed

let gridDisplay;
// starts out empty, then visual of snake movement + length updating plus randomised fruit drops 

let snake = [];
// length = 3 at the start of the game, css styling of bg-color: "colour"

let snakeDirection;

let fruit;
//css styling: 1 cell of colouring, class of fruit

let winState;
//set to false

let loseState;
//set to false

let intervalTime;
// //1000 or 1500ms at the beginning?

// let snakeColour; //OPT

// let fruitColour; //OPT

// let highScoreValue = []; //OPT
// //starts as zero, PUSH currentScore once game has reached a win or fail state
// //look up local storage- JS, use to store the values instead

/*----- Cached Element References  -----*/
const grid = document.getElementById("grid")
const cellEls = []
 // newGameButton (aka play/reset button)
 // resetHighScoreButton
 // OPT: toggleMusicButton
 // messageDisplay
 // gridWrapper from HTML, needed to append grid created using JS (DONE)
 // individual gridDivs created using JS (DONE)

//  init()
/*-------------- Functions -------------*/

function createGrid(){
    for (let i = 0; i < totalCellCount; i++) {
        let cell = document.createElement("div")
        cell.classList.add("cell")
        cell.setAttribute("id", i)
        cell.innerText = i
        cell.style.width = `${100/gridWidth}%` //why temp literal here? why didn't the usual method work?
        cell.style.height = `${100/gridHeight}%`
        cellEls.push(cell)
        grid.appendChild(cell)
        // let cell = document.createElement("div")
        // cell.setAttribute("id", i)

    //     set individual grid square id = [i]
    //     appendChild onto grid wrapper in HTML
    // }
}
}
createGrid()

// /*------------------ Snake and Fruit Constants -------------*/
// snake = cellEls[2, 1, 0] //head at cellEls index of 2, length of three
// snakeDirection = cellEls[3]; //cellEls[i + 1]
// let fruitPosition = -1


// function init () {
//     winState = false
//     currentScore = 0
//     console.log("working init")
//     render()
//     // winState = false
//     // currentScore = 0
//     // toggleMusicButton.audio.mute = true //OPT
//     // render()
// }

// // function render() {
// //     //update gridDisplay
// //     //update messageDisplay
// // }

//generates fruit and makes sure it does not overlap with snake
function makeFruit() {
    do {
        fruit = Math.floor(Math.random() * totalCellCount)
    } while (snake.includes(fruit))
        return fruit
}

//if apple does not exist, generate it
function placeFruit() {
    
    //IF grid has empty positions in array - edit: poor logic, scrap plan
        //THEN Math.random, Math.floor(place one fruit in an empty array position)
    //ELSE return false
}



// function snakeEating() {


//     //IF current snake array contains class of fruit, remove fruit and +1 to snake array?
//     //IF position of snake[0] on the grid = position of fruit on the grid, add points?
//     //snakeArray.push(one more unit)
//     //delete fruit from the board index
//     //currentScore()
// }

// function snakeMovement(e) {





//     //arrowButton = e.target.key (confirm whether key or keyCode)
//     //IF left: snake[0]at grid position moves to grid[i - 1]
//         //AND grid[i] % gridWidth != 0
//     //IF right: moves to board[i] +1
//         //AND grid[i] % gridWidth != gridWidth - 1
//     //IF up: moves to grid[i] - gridWidth
//         //AND grid[i] >= 0
//     //IF down: moves by grid[i] + gridWidth
//         //AND grid[i] <= totalGridCount - 1
//     //ELSE: snake has hit border wall, lose state = true
//     //UNSHIFT at head + POP at tail
// }

// function currentScore() { 
//     //adds 10 pts for every fruit
//     //placeFruit()
// }

// function checkForWinning() {
//     //IF !empty grid AND placeFruit = false, set winState = true
//     //set displayMessage = "Congratulations, you have won"
//     //PUSH currentScore.innerText to highScore
// }

// function checkForLosing() {
//     //IF grid movement tries to go out of bounds OR if snake[0] on grid array = snake[i] on grid array //classList.contains - use to check if grid being moved to contains snake class (use in checkforWalls and checkforfruit?)
//     //set displayMessage = "You have lost! Would you like to try again?"
//     //PUSH currentScore.innerText to highScore
// }

// function highScore() {
//     //loop through array values to find highest score
//     //let highScoreValue = highest score
// }

// function resetHighScore() {
//     //set highScore value = 0
// }
/*----------- Event Listeners ----------*/
newGameButton.addEventListener("click", init)
resetHighScoreButton.addEventListener("click", resetHighScore)
document.addEventListener("keyup", snakeMovement)

