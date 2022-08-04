
const button = document.getElementById('button');
const input = document.getElementById('input');

console.log(button)

button.onclick = () => {
    const tag = document.createElement('div');

    tag.setAttribute('class', 'block');
    tag.innerHTML = input.value;
    document.body.append(tag);
    
const deleteButton = document.createElement('button');
deleteButton.innerText = "Delete"

deleteButton.onclick = () => {
    tag.remove()
}
tag.append(deleteButton);
}



// ДЗ№2

//     function buttonClick() {
// 	let elem = document.getElementById('elem');
//     let subButton = document.getElementById("subButton");
    
// 	elem.innerHTML = 'Пока!';
//     subButton.addEventListener("click", () => {
//         alert('Changed!')
//     });
// }




