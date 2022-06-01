let href = window.location.search
let URLpramaters = new URLSearchParams(href)
let conpage = document.querySelector(".conofbody")
let HTECode = "<!--HTECode:hte editor-->"

if (URLpramaters.has("read")) {
  
  conpage.innerHTML = ""
  let result = URLpramaters.get("read")
  if (result.includes(HTECode)){

    let spliter = result.split("<hr>")
    
    for (i = 0; i < spliter.length; i++) {
      conpage.innerHTML += `
   <div class="page" id="${i}" contenteditable="true" ondblclick="deletepage(this.id)">
     ${spliter[i]}
    </div>
      `
    }
  } else {
    alert("The file doesnot include a HTE code")
  }
  
}
