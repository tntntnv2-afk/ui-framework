// Tabs
const tabs = document.querySelectorAll(".tab")
const contents = document.querySelectorAll(".tabContent")

tabs.forEach(tab=>{
  tab.onclick=()=>{
    tabs.forEach(t=>t.classList.remove("active"))
    contents.forEach(c=>c.classList.remove("active"))

    tab.classList.add("active")
    document.getElementById(tab.dataset.tab).classList.add("active")
  }
})

// Drag window
const menu = document.getElementById("menu")
const header = document.getElementById("header")

let drag=false, offsetX, offsetY

header.onmousedown=e=>{
  drag=true
  offsetX=e.clientX-menu.offsetLeft
  offsetY=e.clientY-menu.offsetTop
}

document.onmouseup=()=>drag=false

document.onmousemove=e=>{
  if(!drag) return
  menu.style.left=e.clientX-offsetX+"px"
  menu.style.top=e.clientY-offsetY+"px"
  saveState()
}

// Resize window
const handle=document.querySelector(".resize-handle")
let resizing=false, startX, startY, startW, startH

const MIN_W=320, MIN_H=220, MAX_W=900, MAX_H=700

handle.onmousedown=e=>{
  resizing=true
  startX=e.clientX
  startY=e.clientY
  startW=menu.offsetWidth
  startH=menu.offsetHeight
}

document.addEventListener("mousemove",e=>{
  if(!resizing) return

  let newW=startW+(e.clientX-startX)
  let newH=startH+(e.clientY-startY)

  newW=Math.max(MIN_W, Math.min(MAX_W,newW))
  newH=Math.max(MIN_H, Math.min(MAX_H,newH))

  menu.style.width=newW+"px"
  menu.style.height=newH+"px"

  saveState()
})

document.addEventListener("mouseup",()=>resizing=false)

// Save window state
function saveState(){
  const state={
    x:menu.style.left,
    y:menu.style.top,
    w:menu.style.width,
    h:menu.style.height
  }
  localStorage.setItem("uiState",JSON.stringify(state))
}

function loadState(){
  const state=JSON.parse(localStorage.getItem("uiState"))
  if(!state) return
  menu.style.left=state.x
  menu.style.top=state.y
  menu.style.width=state.w
  menu.style.height=state.h
}

loadState()
