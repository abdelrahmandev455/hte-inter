let btn = '<button onclick="nextGuide()">》</button>'
let btndel = '<button onclick="delGuide()">×</button>'
let xy = 0
let guide = document.querySelector(".guide")
let position = [
  {
    t: window.innerHeight - 180,
    r: 5,
    l: 5,
    text: "click the plus button to add a page" + btn
    },
  {
    t: window.innerHeight - 180,
    r: 5,
    l: 5,
    text: "click the start button to beginn a preview" + btn
    },
  {
    t: window.innerHeight * 0.5,
    r: 5,
    l: 5,
    text: "Double click to end the preview" + btn
     },
  {
    t: window.innerHeight * 0.5,
    r: 5,
    l: 5,
    text: "Double click to delete a page" + btn
      },
  {
    t: window.innerHeight * 0.1,
    r: 5,
    l: 5,
    text: "click the formates button" + btn
       },
  {
    t: window.innerHeight * 0.1,
    r: 5,
    l: 5,
    text: "click the fc input to add a font color" + btn
        },
  {
    t: window.innerHeight * 0.1,
    r: 5,
    l: 5,
    text: "Now select a text" + btn
    },
  {
    t: window.innerHeight * 0.1,
    r: 5,
    l: 5,
    text: "click the Fc button to add the font color to the selected text" + btn
   },
  {
    t: window.innerHeight * 0.1,
    r: 5,
    l: 5,
    text: "The same thing by bg input" + btn
   },
  {
    t: window.innerHeight * 0.1,
    r: 5,
    l: 5,
    text: "Guide end! Enjoy.." + btndel
       }
    ]

function nextGuide() {
  console.log(xy)
  if (xy != 10) {
    guide.style.top = position[xy].t + "px"
    guide.style.right = position[xy].r + "rem"
    guide.style.left = position[xy].l + "rem"
    guide.innerHTML = position[xy].text

    xy++
  } else {
    alert("finish")
  }
}

function delGuide() {
  guide.style.display = 'none'
}
