let page = document.querySelector(".page")
let container = document.querySelector(".conofbody")

function changebackground(src) {
  
  for(i=0;i<container.childElementCount;i++){
  container.children[i].style.background = 'transparent'
  container.children[i].innerHTML += `
    <img src="${src}" alt="" class="pageimg">
  `
  }
}
