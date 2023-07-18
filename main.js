const suma = (a,b) => a + b
const resta = (a,b) => a - b

let valorProducto = 0
let presupuesto = 3000
let valorFinal = 0

let aviso = alert(`El presupuesto máximo para gastar es de $${presupuesto}, no te excedas por favor...`)
let producto = prompt(`Seleccione un producto. El producto A vale $500, El B vale $1000 y el C vale $1500.`)

switch (producto) {
    case "a":
        valorProducto = 500
        valorFinal = suma (valorProducto, valorFinal)
        break;
    case "b":
            valorProducto = 1000
            valorFinal = suma (valorProducto, valorFinal)
            break;
    case "c":
        valorProducto = 1500
        valorFinal = suma (valorProducto, valorFinal)
        break;
    default:
        alert("No se encontro el producto")
        break;
}
if (valorFinal > presupuesto) {
    alert("Te quedaste sin presupuesto")
} 

producto = prompt(`Hay $${valorFinal} en el carrito, desea realizar agregar otro producto? Seleccione S/N`)

while (producto === "s") {
    if (valorFinal >= presupuesto) {
        alert("¡Te quedaste sin fondos!")
    }  else {
        let producto = prompt(`Seleccione un producto. El producto A vale $500 ARS. El B vale $1000 ARS y el C vale $1500 ARS`)
    switch (producto) {
        case "a":
            valorProducto = 500
            valorFinal = suma (valorProducto, valorFinal)
            break;
        case "b":
                valorProducto = 1000
                valorFinal = suma (valorProducto, valorFinal)
                break;
        case "c":
            valorProducto = 1500
            valorFinal = suma (valorProducto, valorFinal)
            break;
        default:
            alert("No se encontro el producto")
            break;
    }
} 
producto = prompt(`Hay $${valorFinal} en el carrito, desea comprar otro producto? Seleccione S/N`)
}
