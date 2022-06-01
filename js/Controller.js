let con = document.querySelector(".conofbody")
let alerter = document.querySelector(".alerter")
var x = 2

function add() {

  con.innerHTML += `
      <div class="page" id="${x}" contenteditable="true" ondblclick='deletepage(this.id)'>
      <h1>Title</h1>
      <small>subtitle</small>
      <p>Text</p>
      <div class='number'>
      ${x}
      </div>
    </div>
  `
  return x++
}

function deletepage(idofpage) {
  let ask = prompt("Are you sure you want to delete it? yes or no")

  if (ask == "yes") {
    let page = document.getElementById(`${idofpage}`)

    page.style.display = 'none'
    alerter.style.display = 'block'
    alerter.innerText = "The Page you choose deleted succefully"
  } else {
    alerter.style.display = 'block'
    alerter.innerText = 'The page you choose doesnot deleted'
  }
}
