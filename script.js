let inputBox = document.getElementById("inputBox");
let list = document.getElementById("list");
let btn = document.querySelector(".btn");

inputBox.addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        addItem(this.value)
        this.value = ""
    }
})

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }else{
        addItem(inputBox.value)
        inputBox.value = ""
    }
}

let addItem =(inputBox)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputBox}<i></i>`;

    listItem.addEventListener("click", function(){
        this.classList.toggle("done");
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })
    list.appendChild(listItem);
}