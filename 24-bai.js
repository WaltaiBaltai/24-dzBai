let element = document.getElementById("changeColor");
element.addEventListener("click", myF);
function myF() {
  for (let i = 0; i < document.getElementsByClassName("box").length; i++) {
    document.getElementsByClassName("box")[i].style.background =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}