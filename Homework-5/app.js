// ДЗ №1

// let getSum;
// let number1 = prompt("First?");
// let number2 = prompt("Second?");

// if(number1>number2) {
//     getSum = function () {
//         let sum = 1 + 6;
//         console.log(sum)
//     } 
// console.log(number1 + " > " + number2)
// } else if(number1 < number2) {
//   console.log(number1 + " < " + number2)
// } else {
//   console.log(number1 + " = " + number2)
// }
// getSum();



// // ДЗ №2
const user1 = prompt("First Word")
const user2 = prompt("Second Word")

function showWord(word1, word2){
    word1 = user1
    word2 = user2
    if(word1.length > word2.length){
        console.log(word1); 
        
    }else{
        console.log(word2); 
       
    }
}

showWord();
