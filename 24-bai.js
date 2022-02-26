let element = document.getElementById("changeColor");
element.addEventListener("click", myF);
function myF() {
  for (let i = 0; i < 5; i++) {
    document.getElementsByClassName("box")[i].style.background =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}

/*
Кама, салам! Вместо (i < 5 ) как можно по другому записать?
я пробовал "document.getElementsByClassName("box").length" и т.п. и т.д., но не получилось
*/