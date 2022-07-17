const name = "Animals"
console.log(name)

let cow = {
    name: "Burenka",
    age: 10,
    calf: "Mumu"
  };
  console.log(cow);
  
  let cat = {
      name: "Murka",
      age: 5,
      kitty: "Senseya"
  };
  console.log(cat);
  
  let dog = {
      name: "Reks",
      age: 7,
      puppy: "Bruno"
  };
  console.log(dog);

  

  let user = prompt("Год независимости Кыргызстана?");

if(user<1991 || user>1991) {
    console.log("Ваш ответ неверный!")
} 

if(user == 1991) {
    console.log("Ваш ответ верный!")
}



