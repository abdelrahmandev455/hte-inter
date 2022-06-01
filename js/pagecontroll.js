let conofbody = document.querySelector(".conofbody")
function heightget(input) {
  let elements = conofbody.children
  for(i=0;i<elements.length;i++){
    conofbody.children[i].style.height = input.value + "px"
  }
}


function widthget(input) {
  let elements = conofbody.children
  for(i=0;i<elements.length;i++){
    conofbody.children[i].style.width = input.value + "px"
  }
}
