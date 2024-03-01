var input=document.getElementById("input")
var listcontainer=document.getElementById("list-container")
//Add the Todo Lists
function add()
{
    //modify - if else concept
    if(input.value.length>0){
        var list=document.createElement("li")
        list.innerHTML=input.value +"<button onclick='del(event)'>Delete</button>"
        listcontainer.append(list)
        store();//modify
    }
    else
    {
        input.classList.add("alert")
        input.style.border="1px solid red"
        setTimeout(()=>{
            input.classList.remove("alert")
            input.style.border="1px solid #747786"
        },1000)
    }
    input.value="";
    
}
//Delete the Todo Lists
function del(event)
{
    event.target.parentElement.remove()
    store();//modify
}
// modify scroll
var todo=document.querySelector(".todo")
todo.addEventListener('wheel',(event)=>{
    event.preventDefault()
    todo.scrollLeft=event.deltaY
})
//modify end
//modify store the values
function store()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}
function get()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
get();
//modify end