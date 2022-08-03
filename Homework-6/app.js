// ДЗ№1 посмотреть hw.html



// ДЗ№2

    function buttonClick() {
	let elem = document.getElementById('elem');
    let subButton = document.getElementById("subButton");
    
	elem.innerHTML = 'Пока!';
    subButton.addEventListener("click", () => {
        alert('Changed!')
    });
}


