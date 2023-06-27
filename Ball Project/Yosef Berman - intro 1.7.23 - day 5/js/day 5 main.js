/////////////////////////////////        TASK 1      ////////////////////////////////////////////////
printMult(2, 17) // call function printMukt

function printMult(num1,num2){
    var sum = num1*num2  // declare var to hold the sum
    console.log('task 1 - sum is: ' + sum) //print sum to console
}

/////////////////////////////////         TASK 2     ////////////////////////////////////////////////

var text = prompt('text?')  // get text from user
changeBallText(text) // call function to change the text on the ball to input text

function changeBallText(ballText) {  // inserts user input text to ballText
    var elBall = document.querySelector('.ball')  // select desired element
    elBall.innerText = ballText //change the element inner text to user text 
}

//////////////////////////////////       TASK 3      ///////////////////////////////////////////////

changeElementColor(document.querySelector('h1'), 'lightpink') //call function with selected element and the color to apply

function changeElementColor(selector, color) { //insert selectged element to selector and light-pink to color
    selector.style.backgroundColor = color  //change selected element bgc to selected color
    console.log('task 3 - the element background color changed');
}

///////////////////////////////////      TASK 4       ////////////////////////////////////////////////

var res = getMult(4, 20)                          // declare var res that calls function getMult with two numbers
console.log('task 4 - the returned mult result is: ' + res);    //print result to console

function getMult(num1, num2) {                     // insert to num1 and num2 the numbers
    var sum = num1 * num2                        //declare sum to hold the mult of the two numbers
    return sum                                   // return sum to the var res that called the function getMult
}

////////////////////////////////////      TASK 5 - HIDE LINES 11-12 WHEN CHECKING     //////////////////////////////////////////////

// var msg = getUserMsg(prompt('score?')) // get score from user and call function
// changeBallText(msg) // call task 2 function using var msg instead of var text and print msg on ball

// function getUserMsg(score) {
//     var msg1 = 'excellent'
//     var msg2 = 'very good'
//     var msg3 = 'maybe next time..'
//     if (score >= 100) {
//         return msg1               // return msg1 to msg if score >= 100
//     } else if (score >= 80) {
//         return msg2               // return msg2 to msg if score less than 100 but more than 80
//     } else {
//         return msg3               // return msg3 to msg if less than 80
//     }
// }