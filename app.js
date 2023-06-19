var colors = ["pink", "green", "skyblue", "yellow", "orange"];
var index = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

setInterval(changeBackgroundColor, 1000);
