var input=document.getElementById("input")
var listcontainer=document.getElementById("list-container")
//Add the Todo Lists
function add()
{
    var list=document.createElement("li")
    list.innerHTML=input.value +"<button onclick='del(event)'>Delete</button>"
    listcontainer.append(list)
}
//Delete the Todo Lists
function del(event)
{
    event.target.parentElement.remove()
}