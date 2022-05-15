//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click

let handleClick = function (event) {
	console.log("Acabas de hacer click", event);
};
document.getElementById("btnToClick").addEventListener("click", handleClick);

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let focusEvent = function (event) {
	console.log("Valor del input en el evento focus", inputValue.value);
};

let inputValue = document.getElementById("inputToGetValue");
inputValue.addEventListener("focus", focusEvent);

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let handleInput = function (event) {
	console.log("valor del input", inInput.value);
};

let inInput = document.querySelector(".value");
inInput.addEventListener("input", handleInput);
