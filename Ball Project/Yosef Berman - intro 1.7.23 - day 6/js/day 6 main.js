// Task 1

// var mult = 1
// for (var i = 0; i < 10; i++){
//     var num = prompt('enter a number')
//     console.log('num:', num);
//     mult = mult * num
// }
// console.log('the mult result of the numbers is: ',mult);

// task 2

// var names = ['Muki','Puki','Bobi','Charlie']
// console.log('array "names" length is: ',names.length)
// console.log(names[1],names[3])
// for(var i = 0; i < names.length; i++){
//     var currName = names[i]
//     if(currName == 'Puki'){
//         console.log('Hey ' + currName + '!, ' + 'i know you!')
//     }else{
//         console.log(currName);
//     }
// }

//task 3

// var numbers = [30,6,22,8,13,90]
// for(var i = 0; i < numbers.length; i++){
//     console.log('input numbers: ',numbers[i])
//     if(numbers[i] > 10){
//         console.log(numbers[i]);
//     }else{
//         console.log('(multiplied)',numbers[i]*10);
//     }
// }

// task 4

// var nameArray = getArrayFromUser(4)
// console.log('nameArray:', nameArray);

// function getArrayFromUser(length) {
//     var names = []
//     for (var i = 0; i < length; i++) {
//         names[i] = prompt('name?')
//         console.log('i:', i, names[i])
//     }
//     return names
// }

// // task 5

// var arraySum = getSum([1,2,3,6,7])
// console.log('the array sum is:',arraySum);

// function getSum(nums){
//     var sum = 0
//     for(var i = 0; i < nums.length; i++){
//         sum = sum + nums[i]
//     }
//     return sum
// }