const input=document.querySelector(".todo-inp")
const btn=document.querySelector(".todo-btn")
const list=document.querySelector(".list-ul")
btn.addEventListener("click",function(e){
    const toDoDiv=document.createElement("div")
    e.preventDefault()
    toDoDiv.classList.add("cls-div")

    let list1=document.createElement("li")
    list1.classList.add("unaiz")
    list1.innerText=input.value
    toDoDiv.appendChild(list1)
    
    const toDel=document.createElement("button")
    toDel.classList.add("classDel")
    toDel.innerText="- DEL"
    toDoDiv.appendChild(toDel)


    list.appendChild(toDoDiv)
    input.value=""


    
// const deltTo=document.querySelector(".classDel")

// console.log(deltTo)
})
list.addEventListener("click",function(e){
    console.log("click of list occured")
    const del =e.target
    console.log("click target", del)
    
    if(del.classList[0]==="classDel"){
        console.log("delete button clicked ")
        const toDoDel=del.parentElement
        toDoDel.remove()
    }
})


