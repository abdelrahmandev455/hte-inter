function changeFont() {
  const fonthanger = document.querySelector("#fontchanger")
  document.execCommand("fontName", false, fonthanger.value)
}

function changeColor() {
  const colorhanger = document.querySelector("#colorchanger")
  document.execCommand("foreColor", false, colorhanger.value)
}

function changeBackColor() {
  const colorbackhanger = document.querySelector("#colorbackchanger")
  document.execCommand("backColor", false, colorbackhanger.value)
}

function undo() {
  document.execCommand("undo")
}

function redo() {
  document.execCommand("redo")
}

function copy() {
  document.execCommand("copy")
}

function paste() {
  document.execCommand("paste")
}
