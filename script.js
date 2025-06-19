const input = document.querySelector('#myInput');
const todo = document.querySelector('#todo');
const btn=document.querySelector('#addBtn');
localStorage.setItem("name", "Hello");






btn.addEventListener("click", function () {
    if (input.value !== "") {
        const item=document.createElement("li");
        item.innerHTML = ` <button id="check_btn"  > </button>    ${input.value} <i class="delete">✖</i> `;


            todo.appendChild(item);
        saveData();

            input.value = '';
    }

    else{
        alert("Please input something!!");
    }
    count++;
        });



input.addEventListener("keyup", function (e) {
    if (e.key == "Enter" )
        if (input.value != "") {
            const item = document.createElement('li');

            item.innerHTML = ` <button id="check_btn"  > </button>    ${input.value} <i class="delete">✖</i> `;


            todo.appendChild(item);
            console.log(item);
            saveData();

            input.value = '';
        }

        else {
            alert("Please input something!!");
}
count++;
}); 

todo.addEventListener("click", function (e) {


    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("done");
        e.target.querySelector('#check_btn').classList.toggle('tick');
        saveData();

        


    }

    else if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        saveData();
    }

});


function saveData(){
    localStorage.setItem("data",todo.innerHTML);

}

function getData(){
    todo.innerHTML=localStorage.getItem("data");
}
getData();







