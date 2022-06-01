
function changeSize() {
  const sizehanger = document.querySelector("#sizeschanger")
  document.execCommand("fontSize", false,sizehanger.value)
}

function bold() {
  document.execCommand("bold")
}

function underline() {
  document.execCommand("underline")
}

function lineth() {
  document.execCommand("strikethrough")
}

function unorderdlist() {
  document.execCommand("insertUnorderedList")
}

function orderdlist() {
  document.execCommand("insertOrderedList")
}
function right() {
  document.execCommand("justifyRight")
}

function center() {
  document.execCommand("justifyCenter")
}

function left() {
  document.execCommand("justifyLeft")
}

