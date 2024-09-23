/*-------------- Constants -------------*/

const gridWidth = 25;

const gridHeight = 25;

const totalCellCount = gridHeight * gridWidth;

const snakeInit = [2, 1, 0];

/*---------- Variables (state) ---------*/

let gameOver = false;

let winState = false;

let snake = [...snakeInit];

let fruit = Math.floor(Math.random() * totalCellCount);

let snakeDirection = 1;

let intervalTime = 200;

let gameInterval

let currentScore = 0;

let highScore = localStorage.getItem("highScore") ? Number(localStorage.getItem("highScore")) : 0

/*----- Cached Element References  -----*/

const grid = document.getElementById("grid")

const currentScoreBoard = document.getElementById("currentScoreValue")

const highScoreBoard = document.getElementById('highScoreValue')

const newGameButton = document.getElementById("gameResetBtn")

const resetHighScoreButton = document.getElementById("highScoreResetBtn")

/*-------------- Functions -------------*/

function createGrid(){
    grid.innerHTML = ''
    const snakeSet = new Set(snake)
  for (let i = 0; i < totalCellCount; i++) {
    let cell = document.createElement('div')
    cell.className = 'cell'
    cell.setAttribute('cell-index', i)
    
    if (snakeSet.has(i)) {
      cell.style.background = 'green'
    } else if (fruit === i) {
      cell.style.background = 'red'
    }
    grid.appendChild(cell);
  }

  currentScoreBoard.innerText = `Score: ${currentScore}`
  highScoreBoard.innerText = `High Score: ${highScore}`
}

function init() {
    snake = [...snakeInit]
    snakeDirection = 1
    fruit = Math.floor(Math.random() * totalCellCount)
    currentScore = 0
    gameOver = false
    clearInterval(gameInterval)
    createGrid()
    gameInterval = setInterval(snakeMovement, intervalTime)
}

function handleKeyPress(e){
    if (e.key === 'ArrowRight' && snakeDirection !== -1) snakeDirection = 1
    if (e.key === 'ArrowLeft' && snakeDirection !== 1) snakeDirection = -1
    if (e.key === 'ArrowUp' && snakeDirection !== gridWidth) snakeDirection = -gridWidth
    if (e.key === 'ArrowDown' && snakeDirection !== -gridWidth) snakeDirection = gridWidth
}

function snakeMovement(){
    if (!gameOver){
        updateSnake()
    }
}

function updateSnake(){
    let newSnake = [...snake]
    let head = newSnake[0] + snakeDirection 
    if (
        (snakeDirection === -1 && newSnake[0] % gridWidth === 0) || 
        (snakeDirection === 1 && newSnake[0] % gridWidth === gridWidth - 1) || 
        (snakeDirection === -gridWidth && newSnake[0] < gridWidth) || 
        (snakeDirection === gridWidth && newSnake[0] >= totalCellCount - gridWidth) || 
        newSnake.includes(head) 
    ) {
        gameOver = true
        window.alert("Game over!")
        clearInterval(gameInterval)
        return 
    }

    newSnake.unshift(head) 

    if (head === fruit) {
        currentScore++ 
        fruit = Math.floor(Math.random() * totalCellCount) 
    } else {
        newSnake.pop() 
    }

    snake = newSnake 

    if (snake.length === totalCellCount){
        gameOver = true
        winState = true
        window.alert("You win!")
        clearInterval(gameInterval)
        return
    }
    createGrid()
    updateHighScore()
}

function updateHighScore(){
    if (currentScore > highScore) {
        highScore = currentScore
        localStorage.setItem("highScore", highScore)
        highScoreBoard.innerText = `High Score: ${highScore}`
    }
}

function resetHighScore(){
    localStorage.removeItem("highScore")
    highScore = 0
    highScoreBoard.innerText = `High Score: ${highScore}`
}

// /*----------- Event Listeners ----------*/

newGameButton.addEventListener("click", init)
document.addEventListener("keydown", handleKeyPress)
resetHighScoreButton.addEventListener("click", resetHighScore)

init()


