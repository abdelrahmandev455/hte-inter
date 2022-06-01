function home(){
    let cofirm = confirm("Are you really want to leave the page?")
    if(cofirm){
      location.href = "Index.html"
    }
  }
    let wit = document.querySelector(".wait")
    let width = 100;
    setInterval(()=>{
      if(width == 10){
        wit.style.display ='none'
      }
      wit.style.opacity = width+"%"
      width -= 1
    },10)
    function deletealert(alerter){
      alerter.style.display = 'none'
    }