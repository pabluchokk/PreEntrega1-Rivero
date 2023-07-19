const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

let valorProducto = 0;
let presupuesto = prompt("Ingrese su presupuesto")
let valorFinal = 0;

alert(`El presupuesto máximo para gastar es de $${presupuesto}. Por favor, no te excedas.`);

let producto = prompt(`Seleccione un producto. El producto A vale $500, el B vale $1000 y el C vale $1500.`);

switch (producto.toLowerCase()) {
case "a":
    valorProducto = 500;
    valorFinal = suma(valorProducto, valorFinal);
    break;
case "b":
    valorProducto = 1000;
    valorFinal = suma(valorProducto, valorFinal);
    break;
case "c":
    valorProducto = 1500;
    valorFinal = suma(valorProducto, valorFinal);
    break;
default:
    alert("No se encontró el producto");
    break;
}

if (valorFinal > presupuesto) {
    alert("Te quedaste sin presupuesto");
}

producto = prompt(`Hay $${valorFinal} en el carrito. ¿Deseas agregar otro producto? Seleccione S/N`);

while (producto.toLowerCase() === "s") {
    producto = prompt(`Seleccione un producto. El producto A vale $500 ARS. El B vale $1000 ARS y el C vale $1500 ARS`);
    let valorNuevoProducto = 0;

    switch (producto.toLowerCase()) {
    case "a":
        valorNuevoProducto = 500;
        break;
    case "b":
        valorNuevoProducto = 1000;
        break;
    case "c":
        valorNuevoProducto = 1500;
        break;
    default:
        alert("No se encontró el producto");
        break;
    }

    if (suma(valorNuevoProducto, valorFinal) > presupuesto) {
        alert("No puedes agregar ese producto, excede tu presupuesto");
    } else {
        valorFinal = suma(valorNuevoProducto, valorFinal);
    }
    producto = prompt(`Hay $${valorFinal} en el carrito. ¿Deseas comprar otro producto? Seleccione S/N`);
}