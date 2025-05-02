let task = document.querySelector(".task")
let add = document.querySelector(".btn")
let container = document.querySelector(".cont")
localStorage.clear()
let rn = Math.floor(Math.random() * 10000) + 1
add.addEventListener("click", () => {
  rn = Math.floor(Math.random() * 10000) + 1
  if(task.value == ""){
    alert("Please enter a task")
  }
  else{
  localStorage.setItem(`text${rn}`, task.value)
  task.value = ""
  let data = localStorage.getItem(`text${rn}`)
  let c1 = Math.floor(Math.random() * 255) + 1
  let c2 = Math.floor(Math.random() * 255) + 1
  let c3 = Math.floor(Math.random() * 255) + 1
  let div = document.createElement("div")
  let cancel = document.createElement("span")
  cancel.innerHTML = "X"
  cancel.className = "cancel"
  cancel.classList.add("text")
  div.className = "items"
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
  div.innerHTML = `<b>${data}</b>`
  container.append(div)
  div.append(cancel)
  
  cancel.addEventListener("click", () => {
    div.classList.add("deleted")
    setTimeout(()=>{
      div.remove()
    },800)
  })
}
})