const ul=document.getElementById("ul")
const input=document.getElementById("input")
const addBtn=document.getElementById("add-btn")
const saveBtn=document.getElementById("save-btn")
const darkBtn=document.getElementById("dark-btn")
const sun=document.getElementById("sun")
const moon=document.getElementById("moon")
darkBtn.addEventListener("click",()=>{

    if(document.body.classList.contains("dark")){
        sun.style.display="none";
        moon.style.display="block";
    }
    else{
        sun.style.display="block";
        moon.style.display="none";
    }
    document.body.classList.toggle("dark");
});
addBtn.addEventListener("click",()=>{
    if(input.value.trim().length<1){
        alert("Malumot kiriting");
    }
    else{
        addTodo()
    }
})
function addTodo(){
    const li=document.createElement("li");
    li.innerHTML=`
         <div class="left">
                <input type="checkbox" id="check" onclick="checkTodo(this)">
                <p>${input.value}</p>
            </div>
            <div class="right">
                <button class="edit-btn" onclick="editTodo(this)"><i class="fa-solid fa-pen"></i></button>
                <button class="delete-btn" onclick="delTodo(this)"><i class="fa-solid fa-trash"></i></button>
            </div>
            `
            ul.appendChild(li);
            input.value=""
}

function delTodo(e){
    ul.removeChild(e.parentNode.parentNode);
}

function checkTodo(e){
    if(e.checked==true){
        e.parentNode.children[1].style.textDecoration="line-through";
        e.parentNode.parentNode.children[1].style.display="none";
    }    
    else{
        e.parentNode.parentNode.children[1].style.display="block";
        e.parentNode.children[1].style.textDecoration="none"
    }
}

function editTodo(e){
    input.value=e.parentNode.parentNode.children[0].children[1].textContent;
    ul.removeChild(e.parentNode.parentNode);
}