var closepop = document.getElementById("close_pop");
var popup = document.querySelector(".popup");

closepop.addEventListener("click", function () {

  popup.style.display = "none"

})


var sidenav=document.getElementById("sidenav")
var menu=document.getElementById("menu")
var closenav=document.getElementById("closenav")

menu.addEventListener("click",function(){
  sidenav.style.left=0;
})

closenav.addEventListener("click",function(){
  //sidenav.style.display="none"
  sidenav.style.left="-50%";
})