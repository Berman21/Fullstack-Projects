/////////////     task 1         //////////////////////

var person = {
    name: 'Bobi',
    age: 25,
    adress: 'soomsoom street',
}
console.log('person:', person);           // print obj
console.log('*' + person.name + '*');     // print name incased by * 
console.log('age',person.age);            // print age before change
person.age = 26                           // assign new age
console.log('age',person.age);            // print age after chanfe

//////////////     task 2 - 5        /////////////////////

var person1 = {
    name: 'Bobi',
    age: 18,
    adress: 'soomsoom street 1',
}
var person2 = {
    name: 'Puki',
    age: 30,
    adress: 'soomsoom street 2',
}
var person3 = {
    name: 'Charlie',
    age: 80,
    adress: 'soomsoom street 3',
}

var people = [person1, person2, person3]            // array of objects
// console.log('the 2nd person is: ',people[1]);
// console.log('the 2nd person name is: ',people[1].name);

////////////////////////////     task 3 - check older than 18     ///////////////////

// for(var i = 0; i < people.length; i++){
//     var currPerson = people[i]
//     // console.log(currPerson);
//     if(currPerson.age >= 18){                        //check if older than 18
//         console.log('welcome ' + currPerson.name);
//     }else{
//         console.log('maybe next time ' + currPerson.name + '...');
//     }
// }

/////////////    task 4 - check oldest person age    ////////////////////

// var oldestPerson = 0
// var oldestPersonName = undefined
// for(var i = 0; i < people.length; i++){
//     var currPerson = people[i]                  // assign person in current index to currPerson
//     if(currPerson.age > oldestPerson){
//         oldestPerson = currPerson.age            
//         oldestPersonName = currPerson.name
//     }
// }
// console.log('the oldest person is: '+ oldestPersonName + ' ,he is ' + oldestPerson + ' years old!');

///////////    task 5 - function get object by persom name    ///////////

// var personObj = getPersonByName('Charlie')
// function getPersonByName(name) {
//     for (var i = 0; i < people.length; i++) {
//         var currPerson = people[i]
//         // console.log(currPerson);
//         if (currPerson.name === name) {
//             return currPerson
//         }
//     }
// }
// console.log(personObj);

//////////////////    task 6 = print avg num of num array   ///////////

// var numAVG = printAVG([5,10,12])
// console.log('the array AVG is: '+ numAVG);

// function printAVG(numbers){
//     var sum = 0
//     for(var i = 0; i < numbers.length; i++){
//         sum = sum + numbers[i]
//     }
//     sum = sum / numbers.length
//     return sum
// }

////////////////////   task 7 - print multiplication of array nums   ///////////////////

// var arrayMult = getMult([1,2,3,6,7])
// console.log('the array mult is:',arrayMult);

// function getMult(nums){
//     var mult = 1
//     for(var i = 0; i < nums.length; i++){
//         mult = mult * nums[i]
//     }
//     return mult
// }