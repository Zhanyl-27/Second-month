// ДЗ №1

let getSum;
let one = +prompt("Задайте первое число");
let two = +prompt("Задайте второе число");

if(one > two) {
    console.log(`Первое число больше`)
} else if(one == two) {
    console.log(`Они равны`)
} else {
  console.log(`Второе число больше`)
}

getSum = function(one, two) {
  let sum = one + two;
  console.log(sum)
}
getSum(one, two)



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
