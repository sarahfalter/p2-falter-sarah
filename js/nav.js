/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
var subMenu = document.getElementById("menuDropdown");
var isMouseOver = false;

document.getElementById("dropbtn").addEventListener("mouseover", function() {
  subMenu.style.display = "block";
}
);

subMenu.addEventListener("mouseover", function() {
  subMenu.style.display = "block";
}
);

document.getElementById("menuDropdown").addEventListener("mouseout", function()
{
  subMenu.style.display = "none";
}
);