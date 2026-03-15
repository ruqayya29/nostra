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


// Filter Logic
var checkboxes = document.querySelectorAll("input[type='checkbox']");
var cards = document.querySelectorAll(".imgsection");

var selected = {
  occasion: [],
  color: [],
  arrival: []
};

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    var group = this.name;   // "occasion", "color", or "arrival"
    var value = this.value;

    if (this.checked) {
      selected[group].push(value.toLowerCase());
    } else {
      selected[group] = selected[group].filter(v => v !== value.toLowerCase());
    }

    filterCards();
  });
});

function filterCards() {
  cards.forEach(function (card) {
    var title = card.querySelector("h4").textContent.toLowerCase();

    var occasionMatch = selected.occasion.length === 0 ||
      selected.occasion.some(v => title.includes(v));

    var colorMatch = selected.color.length === 0 ||
      selected.color.some(v => title.includes(v));

    var arrivalMatch = selected.arrival.length === 0 ||
      selected.arrival.some(v => title.includes(v));

    if (occasionMatch && colorMatch && arrivalMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
