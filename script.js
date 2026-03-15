var closepop = document.getElementById("close_pop");
var popup = document.querySelector(".popup");

closepop.addEventListener("click", function () {

  popup.style.display = "none"

})

const heroimage = document.querySelector(".heroimage")
const btns = document.querySelectorAll(".btn")
const imgList = ["i1","i2", "i3"]

let index=0
btns.forEach((button) => {
  button.addEventListener("click", () => {

    //console.log("clicked")
    if (button.classList.contains("btn-left")) {
      //   console.log("Clicked left")
      index--;
      if(index<0){
        index=imgList.length-1;
      }
      heroimage.style.background=`url("./Image/${imgList[index]}.jpg") center/cover fixed no-repeat`    }
    else {
      //   console.log("clicked-right")
       index++;
      if(index===imgList.length){
        index=0;
      }
      heroimage.style.background=`url("./Image/${imgList[index]}.jpg") center/cover fixed no-repeat`
    }


  })

})


