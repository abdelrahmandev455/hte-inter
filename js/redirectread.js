let p = document.getElementById("text")
let kop = document.getElementById("kop")


function redirect(input) {
  p.innerText = "Connection building"
  kop.innerText = input.value
  setTimeout(() => {
    p.innerText = "Insert to HTE build "
    setTimeout(() => {
      p.innerText = "Converting file to HTE"
      setTimeout(() => {
        p.innerText = "Secure File"
        setTimeout(() => {
          p.innerText = "Make it up"
          setTimeout(() => {
            p.innerText = "Redirect"
            let file = input.files[0];
            let fileReader = new FileReader();
            fileReader.readAsText(file);

            fileReader.onload = function() {
              location.href = "editor.html?read=" + fileReader.result
            };
            fileReader.onerror = function() { alert(fileReader.error); };
            p.innerText = ''
            input.value = ''
          }, 100)
        }, 1100)
      }, 500)
    }, 2000)
  }, 1000)
}
