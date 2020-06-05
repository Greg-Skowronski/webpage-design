window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mobilenavbar").style.top = "0";
  } else {
    document.getElementById("mobilenavbar").style.top = "-100px";
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showDropMenu() {
  document.getElementById("dropdownmenu").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.menuicon') && !event.target.matches('.iconbar')) {
    this.closeDropMenu();
  }
}

function closeDropMenu() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}

var i = 0;
var txthtml = '://html';
var txtcss = '://css';
var speed = 100;

window.onload = function () {typeWriter()}

function typeWriter() {
  if(document.getElementById("codehtml"))
  if (i < txthtml.length) {
    document.getElementById("codehtml").innerHTML += txthtml.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if(document.getElementById("codecss"))
  if (i < txtcss.length) {
    document.getElementById("codecss").innerHTML += txtcss.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function toogleEffect() {
  if(document.getElementById("tabletscreencss"))
  {
    document.getElementById("tabletscreencss").classList.toggle("showeffect");
    document.getElementById("tabletscreen").classList.toggle("hideeffect");
  }
  if(document.getElementById("tabletscreenhtml"))
  {
    document.getElementById("tabletscreenhtml").classList.toggle("showeffect");
    document.getElementById("tabletscreen").classList.toggle("hideeffect");
  } 
  if(document.getElementById("toogle-button").innerHTML == "Turn Off")
  document.getElementById("toogle-button").innerHTML = "Turn On"
  else 
  document.getElementById("toogle-button").innerHTML = "Turn Off"
}

function showError() {
  document.getElementById("errorwindow").classList.toggle("show");
}