const btnMenos = document.querySelector("#btn-menos");
const btnMas = document.querySelector("#btn-mas");
let cantidadSpan = document.querySelector("#cantidad");
let totalPagarSpan = document.querySelector("#total-a-pagar");

const precioBase = 400000;
let cantidad = 0;

function actualizar() {
  cantidadSpan.innerHTML = cantidad;
  totalPagarSpan.innerHTML = "$" + cantidad * precioBase;
}

btnMas.onclick = function () {
  cantidad++;
  actualizar();
};

btnMenos.onclick = function () {
  if (cantidad > 0) cantidad--;
  actualizar();
};
