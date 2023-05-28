import "./styles.css";

const odiv = document.getElementById("outerdiv");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const idiv = document.getElementById("innerdiv");
console.log(idiv);

btn1.addEventListener("click", changeColor);
btn2.addEventListener("click", changeShape);
console.log(btn2);

function changeColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  odiv.style.backgroundColor = bgColor;
}

function changeShape() {
  var x = Math.random();
  console.log(x);
  if (x < 0.33) {
    idiv.style.borderRadius = "0%";
  } else if (x < 0.67) {
    idiv.style.borderRadius = "50%";
  } else {
    idiv.style.borderRadius = "100px / 50px";
  }
}
