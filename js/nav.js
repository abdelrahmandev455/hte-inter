let showbuttons = document.querySelector('.showbuttons')
let alerter2 = document.querySelector(".alerter")

function showStart() {
  showbuttons.innerHTML = `
     <!--start-->
      <div class="start">
        <input list="sizes" value="7" id="sizeschanger" class="input">
       <button class="unlist" onclick="changeSize()">use</button>
        <datalist id="sizes">
          <option value="1">
          <option value="2">
          <option value="3">
          <option value="4">
          <option value="5">
          <option value="6">
          <option value="7">
          <option value="8">
          <option value="9">
          <option value="10">
        </datalist>
        <button onclick="bold()" class="bold">B</button>
        <button onclick="underline()" class="underline">U</button>
        <button onclick="lineth()" class="linethrought">T</button>
        <button onclick="unorderdlist()" class="unlist">
          •—
        </button>
        <button onclick="orderdlist()" class="unlist">
          1—
        </button>
        <button onclick="left()" class="unlist">
          <img src="img/right.jpg" alt="">
        </button>
        <button onclick="center()" class="unlist">
          <img src="img/center.jpg" alt="">
        </button>
        <button onclick="right()" class="unlist">
          <img src="img/left.jpg" alt="">
        </button>
      </div>
  `
}

function showFormates() {
  showbuttons.innerHTML = `
    <!--formates-->
    <div class="formates">
          <input list="fontNames" class="input" id="fontchanger" value="sans-serif">
          <datalist id="fontNames">
            <option value="sans-serif">
            <option value="cursive">
            <option value="Haettenschweiler">
            <option value="Impact">
            <option value="Times New Roman">
            <option value="Georgia">
            <option value="Tahoma">
            <option value="Segoe UI">
            <option value="Write Your Font">
          </datalist>
          <button class="unlist" onclick="changeFont()">use</button>
          <label for="colorchanger">FC</label>
          <input type="color" onclick="changeColor()" id="colorchanger" class="input color">
          <label for="colorbackchanger">BG:</label>
          <input type="color" onclick="changeBackColor()" id="colorbackchanger" class="input color">
  
          <button onclick="redo()" class="unlist">
            <img src="img/redo.jpg" alt="">
          </button>
          <button onclick="undo()" class="unlist">
            <img src="img/undo.jpg" alt="">
          </button>
          <button onclick="copy()" class="unlist">
            Copy
          </button>
          <button onclick="paste()" class="unlist">
            Paste
          </button>
        </div>
  `
}

function showPage() {
  showbuttons.innerHTML = `
        <div class="pages">
          <img src="img/img1.jpg" onclick="changebackground(this.src)" alt="">
          <img src="img/img2.jpg" onclick="changebackground(this.src)" alt="">
          <img src="img/img3.jpg" onclick="changebackground(this.src)" alt="">
          <img src="img/img4.jpg" onclick="changebackground(this.src)" alt="">
          <img src="img/img5.jpg" onclick="changebackground(this.src)" alt="">
          <img src="img/img6.jpg" onclick="changebackground(this.src)" alt="">
        </div>
  `
}

function showPageController() {
  showbuttons.innerHTML = `
     <div class="code">
      Height:
       <input type="range" onchange="heightget(this)" max='580' min="560">
      Width:
       <input type="range" onchange="widthget(this)" max='290' min='288'>
      </div>
  `
}

function showDown() {

  showbuttons.innerHTML = `
     <div class="download">
          <input type="text" id="file" placeholder="write the file name like xxx.html">
          <button class="custbutton" id="btn">Download</button>
        </div>
  `

  document.getElementById("btn").addEventListener("click", function() {

    let c = document.querySelector(".conofbody")
    let htmltext = '<!--HTECode:hte editor-->'

    for (var i = 0; i < c.childElementCount; i++) {
      htmltext += c.children[i].innerHTML + "<hr>"
    }

    download(document.querySelector("#file").value, htmltext)
  }, false);
}

function download(filename, textInput) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
  element.setAttribute('download', filename);
  document.body.appendChild(element);
  element.click(); //
  document.body.removeChild(element);
}
