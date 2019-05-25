// JS FUnctions
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const coolBtn = document.getElementById("coolBtn");
coolBtn.addEventListener("click", () => {
  const header = document.getElementById("header");
  header.style.color = getRandomColor();
});
