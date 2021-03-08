var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

function myFunction() {
  let menu = document.getElementById("res-topnav");
  // let logo = document.getElementsById("logo");
  if (menu.className === "res-menu") {
    menu.className += " responsive";
    // logo.className += "men";
  } else {
    menu.className = "res-menu";
  }
  let icon = document.getElementById("fas");
  if (icon.className === "fas fa-bars") {
    icon.className = " fas fa-chevron-left";
  } else {
    icon.className = "fas fa-bars";
  }
}
