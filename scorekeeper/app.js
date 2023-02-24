const h2 = document.querySelector('h2')
let winningScoreMenu = document.querySelector('#winningScoreMenu')
let winningScore = parseInt(winningScoreMenu.value)
const p1ScoreBtn = document.querySelector('#p1ScoreBtn')
let p1score = 0
const p2ScoreBtn = document.querySelector('#p2ScoreBtn')
let p2score = 0
const reset = document.querySelector('#resetBtn')


winningScoreMenu.addEventListener("change", function(e){
    winningScore = parseInt(winningScoreMenu.value)
    if (p1score >= winningScore || p2score >= winningScore){
        p1ScoreBtn.disabled = true
        p2ScoreBtn.disabled = true
    }
    else if (p1score < winningScore || p2score < winningScore){
        p1ScoreBtn.disabled = false
        p2ScoreBtn.disabled = false
    }
})

p1ScoreBtn.addEventListener('click', function(e){
    p1score++
    h2.innerText = `${p1score} to ${p2score}`
    if (p1score >= winningScore){
        p1ScoreBtn.disabled = true
        p2ScoreBtn.disabled = true
    }
})
p2ScoreBtn.addEventListener('click', function(e){
    p2score++
    h2.innerText = `${p1score} to ${p2score}`
    if (p2score >= winningScore){
        p1ScoreBtn.disabled = true
        p2ScoreBtn.disabled = true
    }
})
reset.addEventListener('click', function(e){
    p1score = 0
    p2score = 0
    h2.innerText = `${p1score} to ${p2score}`
    p1ScoreBtn.disabled = false
    p2ScoreBtn.disabled = false
})
