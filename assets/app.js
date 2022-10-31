const placeNumber = document.getElementById("place-number");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const valor = event.target.value;

    valor === "%" ?
      (placeNumber.value = eval(placeNumber.value / 100)) :
      (placeNumber.value += valor);

    if (valor === "ac") {
      placeNumber.value = "";
    }

    const calculadora = () => {
      if (event.target.textContent === "=") {
        placeNumber.value = eval(placeNumber.value);
      }
    };

    calculadora();
  });
});