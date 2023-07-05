function changeTextColor() {
    var elBall = document.querySelector('.ball')
    elBall.style.color = 'green'
}

function changeTextSize() {
    var elBall = document.querySelector('.ball')
    var size = prompt('Size?')
    if(size <= 50){
    elBall.style.fontSize = size + 'px'
    }
    else{
        console.log('Too Big!')
    }
}

var isRound = true

function toggleBallShape() {
    var elBall = document.querySelector('.ball')
    var elBtn = document.querySelector('.toggle-btn')

    if (isRound) {
        isRound = false
        elBtn.innerText = 'Chane to Round'
        elBall.style.borderRadius = '0px'
    } else {
        isRound = true
        elBtn.innerText = 'Change to Square'
        elBall.style.borderRadius = '50%'
    }
}

var margin = 20
function moveBallDown() {
    var elBall = document.querySelector('.ball')
    margin = margin + 10
    elBall.style.marginTop = margin +'px'
}
