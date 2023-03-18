const p1 = {
    score: 0,
    display: document.querySelector("#p1ScoreDisplay"),
    button: document.querySelector('#p1ScoreBtn')
}
const p2 = {
    score: 0,
    display: document.querySelector("#p2ScoreDisplay"),
    button: document.querySelector('#p2ScoreBtn')
}
let winningScoreMenu = document.querySelector('#winningScoreMenu')
let winningScore = parseInt(winningScoreMenu.value)
const reset = document.querySelector('#resetBtn')

function updateScore(player, opponent) {
    player.score ++
    player.display.textContent = player.score
    if (player.score === winningScore) {
        setWinLoseScoreColors(player, opponent)
        disablePlayerBtns()
    }

}

function setWinLoseScoreColors(player, opponent) {
    player.display.classList.add("has-text-success")
    opponent.display.classList.add("has-text-danger")
}

function setBlkScoreColor(){
    for (let p of [p1,p2]) {
        p.display.classList.remove("has-text-success", "has-text-danger")
    }
}

function disablePlayerBtns() {
    for (let p of [p1,p2]) {
        p.button.disabled = true
    }
}

function enablePlayerBtns() {
    for (let p of [p1,p2]) {
        p.button.disabled = false
    }
}

winningScoreMenu.addEventListener("change", function (e) {
    winningScore = parseInt(this.value)
    if (p1.score >= winningScore || p2.score >= winningScore) {
        disablePlayerBtns()
        if (p1.score > p2.score) {
            setWinLoseScoreColors(p1, p2)
        }
        else if (p2.score > p1.score) {
            setWinLoseScoreColors(p2, p1)
        }
        else {
            alert("Are you trying to break my code? :)")
        }
    }
    else if (p1.score < winningScore || p2.score < winningScore) {
        enablePlayerBtns()
        setBlkScoreColor()
    }
})

p1.button.addEventListener('click', function (e) {
    updateScore(p1,p2)
})

p2.button.addEventListener('click', function (e) {
    updateScore(p2,p1)
})

reset.addEventListener('click', function (e) {
    for (let p of [p1,p2]) {
        p.score = 0
        p.display.textContent = 0
    }
    setBlkScoreColor()
    enablePlayerBtns()
})