let nav = document.querySelector(".nav")
let body = document.querySelector(".body") 

function navopen(){
  if (nav.style.display == 'none') {
    nav.style.display = "flex"
  } else {
    nav.style.display = 'none'
  }
}

function dark(c1){
  document.body.style.background = c1
}
function yellow(){
  body.style.background = "yellow"
}
function skyblue(){
  body.style.background = "skyblue"
}
function orange(){
  body.style.background = "orchid"
}
function purple(){
  body.style.background = 'plum'
}
function light(){
  body.style.background = '#f2f2f2'
}
