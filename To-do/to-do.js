
    const input = document.getElementById("input")
    const button = document.getElementById("btn")
    const taskDiv= document.querySelector(".tasks")
    
    button.addEventListener("click", function() {
     const task =document.createElement("p")
     const deleteBtn = document.createElement("button")
     deleteBtn.innerText = "❌"
     deleteBtn.classList.add("deleteBtn")

     const completeBtn = document.createElement("button")
     completeBtn.innerText = "✅"
     completeBtn.classList.add("completeBtn")
 
    task.innerText= "-" + input.value
    taskDiv.append(task) 
    task.append(completeBtn)
    task.append(deleteBtn)
    input.value = " "

    completeBtn.addEventListener("click", function() {
        task.style.textDecoration = "line-through"
    })

    deleteBtn.addEventListener("click", function() {
        taskDiv.removeChild(task)
    })






    })
    
   
  
