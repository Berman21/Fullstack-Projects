//assignment part 1-5

console.log('Hello JS!');

var firstName = prompt('First name?');
var lastNAme = prompt('Last name?')
var fullName = firstName + ' ' + lastNAme;
console.log('Hello '+ fullName + '!');                                                      //greeting
var countryName = prompt('Counrty name pleas?');
var cityName = prompt('city name pleas?');
var adress = countryName + ", " + cityName;
console.log('The adress is:' + adress);
var age = prompt('What is your age?')
if (age >= 18){                                                                                //check age
    alert('Welcome '+ fullName + ', you are ' + age +', so you are old enough to buy Beer')    //alert if legal age
}
else{
    alert('We are sorry ' + fullName + ', you are ' + age +',you are too young to buy beer.')  //alert if illegal age
}

//assignment part 6

// var score = '6';
// if (score >= 10) {
//     console.log('excellent');
// }
// else if(score >= 6 && score<=9){
//     console.log('good');
// }
// else {
//     console.log('not enough');
// }

//assignment part 7

// var numberOne = prompt('First Number?');
// var numberTwo = prompt('Second Number?');
// if (numberOne < 10 && numberTwo <10 && numberTwo>0 && numberOne > 0){                              //conditions for checking if BOTH numbers are between 1 and 9 
//     if (numberOne > numberTwo){                                                                    // check if the first number is bigger
//         console.log('The bigger number is ' + numberOne);
//     }
//     else if(numberOne < numberTwo){                                                                // check if the first number is smaller
//         console.log('The bigger number is ' + numberTwo);
//     }
//     else{                                                                                          // declare even if both numbers are 1-9 but none is bigger/smaller then the other
//         console.log('same number/even');
//     }
// }
// else{
//     console.log('Please select numbers between 1 and 9');
// }


