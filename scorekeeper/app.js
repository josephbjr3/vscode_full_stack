const p1ScoreDisplay = document.querySelector("#p1ScoreDisplay")
const p2ScoreDisplay = document.querySelector("#p2ScoreDisplay")
let winningScoreMenu = document.querySelector('#winningScoreMenu')
let winningScore = parseInt(winningScoreMenu.value)
const p1ScoreBtn = document.querySelector('#p1ScoreBtn')
let p1score = 0
const p2ScoreBtn = document.querySelector('#p2ScoreBtn')
let p2score = 0
const reset = document.querySelector('#resetBtn')



function setP1ScoreSpan() {
    p1ScoreDisplay.textContent = p1score
}

function setP2ScoreSpan() {
    p2ScoreDisplay.textContent = p2score
}

function p1WonColors() {
    p1ScoreDisplay.classList.add("has-text-success")
    p2ScoreDisplay.classList.add("has-text-danger")
}

function p2WonColors() {
    p1ScoreDisplay.classList.add("has-text-danger")
    p2ScoreDisplay.classList.add("has-text-success")
}

function makeScoresBlk() {
    p1ScoreDisplay.classList.remove("has-text-success", "has-text-danger")
    p2ScoreDisplay.classList.remove("has-text-success", "has-text-danger")
}

function enablePlayerBtns() {
    p1ScoreBtn.disabled = false
    p2ScoreBtn.disabled = false
}

function disablePlayerBtns() {
    p1ScoreBtn.disabled = true
    p2ScoreBtn.disabled = true
}

winningScoreMenu.addEventListener("change", function (e) {
    winningScore = parseInt(this.value)
    if (p1score >= winningScore || p2score >= winningScore) {
        disablePlayerBtns()
        if (p1score > p2score) {
            p1WonColors()
        }
        else if (p2score > p1score) {
            p2WonColors()
        }
        else {
            alert("Are you trying to break my code? :)")
        }
    }
    else if (p1score < winningScore || p2score < winningScore) {
        enablePlayerBtns()
        makeScoresBlk()
    }
})

p1ScoreBtn.addEventListener('click', function (e) {
    p1score++
    setP1ScoreSpan()
    if (p1score >= winningScore) {
        disablePlayerBtns()
        p1WonColors()

    }
})

p2ScoreBtn.addEventListener('click', function (e) {
    p2score++
    setP2ScoreSpan()
    if (p2score >= winningScore) {
        disablePlayerBtns()
        p2WonColors()

    }
})

reset.addEventListener('click', function (e) {
    p1score = 0
    p2score = 0
    setP1ScoreSpan()
    setP2ScoreSpan()
    makeScoresBlk()
    enablePlayerBtns()
})