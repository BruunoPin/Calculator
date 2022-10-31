const calculator = document.querySelector(".calculator");
const placeNumber = document.getElementById("place-number");
const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const sum = document.getElementById("+");
const sub = document.getElementById("-");
const divide = document.getElementById("/");
const mult = document.getElementById("*");
const percent = document.getElementById("%");
const equal = document.getElementById("=");
const clear = document.getElementById("ac");

calculator.addEventListener("click", (event) => {
  const valor = event.target.value;
  let teste = [];
  placeNumber.innerText += valor;

  if (valor === "ac") {
    placeNumber.innerText = "";
  }
  teste.push(placeNumber.innerText);
  console.log(teste);

  const calculadora = () => {
    if (event.target.textContent === "=") {
      console.log(teste);
    }
  };

  calculadora();

  // console.log(placeNumber.textContent);

  // console.log(placeNumber.textContent=event.target.value);
});
