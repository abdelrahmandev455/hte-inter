let alerter3 = document.querySelector(".alerter")

function preview() {
  let c = document.querySelector(".conpreview")
  let cpages = document.querySelector(".conofbody")
  c.innerHTML += cpages.innerHTML
  //loop
  for(var i =0;i<c.childElementCount;i++){
    c.children[i].removeAttribute("contenteditable")
    c.children[i].removeAttribute("ondblclick")
  }
  
  c.style.display = 'flex'
}

function endview() {
  let cofirm = confirm("Are you sure you want to end the presentation?")
  let c = document.querySelector(".conpreview")
  c.innerHTML = ""
  if (cofirm) {
    page.setAttribute("contenteditable","true")
    page.setAttribute("ondblclick","deletepage(this.id)")
    let c = document.querySelector(".conpreview").style.display = 'none'
    alerter3.style.display = 'block'
    alerter3.innerText = "Presantation terminated succefully"
  }
}
