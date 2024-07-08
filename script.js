//Ingresar usuario//





let nombreCliente;
const maxIntentos = 5;
const nombreRegla = /^[a-zA-Z\s]+$/;

for (let intentos = 0; intentos < maxIntentos; intentos++) {
    nombreCliente = prompt("Ingrese su Nombre");
    if (nombreCliente && nombreRegla.test(nombreCliente) && nombreCliente.trim() !== "") {
        break;
    }
    if (intentos === maxIntentos - 1) {
        alert("Demasiados intentos. Por favor, inténtelo más tarde.");
    } else {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
    }
}








// conversion de moneda //

let factorDeConversion;
let simbolo;
function conversion() {
    let seleccionarPais = Number(prompt("Ingrese el país:\n1 Argentina \n2 Estados Unidos \n3 Brasil \n4 Chile \n5 Otro "))
            switch (seleccionarPais) {
                case 1:
                    factorDeConversion = 1;
                    simbolo = "$";
                    break;
                case 2:
                    factorDeConversion = 0.0011;
                    simbolo = "US$";
                    break;
                case 3:
                    factorDeConversion = 0.0060;
                    simbolo = "R$";
                    break;
                case 4:
                    factorDeConversion = 1.02;
                    simbolo = "$";
                    break;
                case 5:
                    factorDeConversion = 1;
                    simbolo = "$";
                    break;
                default:
                    factorDeConversion = 1;
                    simbolo = "$";
                    break;
            }
            return factorDeConversion
}

conversion()

const tipoConjuntos ={
    productoA:{
        nombre: "Timeless Elegance",
        precioUnitario: 250000 * factorDeConversion
    },
    productoB:{
        nombre: "Eclectic Expression",
        precioUnitario: 450000 * factorDeConversion
    },
    productoC:{
        nombre: "Enchanting Evening" ,
        precioUnitario: 350000 * factorDeConversion
    }

};
const tipoFragancias ={
    productoA:{
        nombre: "Polo Double Black",
        precioUnitario: 130000 * factorDeConversion
    },
    productoB:{
        nombre: "Halloween x Man",
        precioUnitario: 180000 * factorDeConversion
    },
    productoC:{
        nombre: "Black Phantom" ,
        precioUnitario: 190000 * factorDeConversion
    }

};


const tipoAccesorios ={
    productoA:{
        nombre: "Gafa:Ray-Ban, Classic Elegance ",
        precioUnitario: 250000 * factorDeConversion
    },
    productoB:{
        nombre: "Reloj: Sleek Sophistication, Titanium Elegance",
        precioUnitario: 320000 * factorDeConversion
    },
    productoC:{
        nombre: "Collar: Urban Edge Steel Manifesto" ,
        precioUnitario: 180000 * factorDeConversion
    }

};



let opcion =  Number(prompt("Seleccionar una opcion:\n1 Comprar\n2 Finalizar compra\n3 Salir"))
let total = 0
while (opcion !== 3) {
    if (opcion === 1) {
        total += comprar();
    } else if (opcion === 2) {
        finalizarCompra();
    } else {
        alert("Opción incorrecta")
    }
    opcion = Number(prompt("Seleccionar una opcion:\n1 Comprar\n2 Finalizar compra\n3 Salir"))
} 


function finalizarCompra() {
    let formaPago = Number(prompt("Elija forma de pago:\n1 Débito\n2 Crédito"));
    let descuento= 0.15; 
    switch (formaPago) {
        
        case 1:
            total *= (1-descuento);
            alert("Tienes un descuento del " + (descuento *100 )+" %, su total a abonar es de " + total.toFixed(2) + " " + simbolo + ". \n ¡Muchas gracias por su compra "+ nombreCliente + "!");
            break;
        case 2:
            let opcionesCredito = Number(prompt("Elija la opción de pago:\n1 En tres cuotas\n2 En seis cuotas"));
            switch (opcionesCredito) {
                case 1:
                    let cuotaTres = total / 3;
                    alert("Debes abonar " + cuotaTres.toFixed(2) + " " + simbolo + " por cuota. Muchas gracias por su compra "+ nombreCliente);
                    break;
                case 2:
                    let cuotaSeis = total / 6;
                    alert("Debes abonar " + cuotaSeis.toFixed(2) + " " + simbolo + " por cuota. Muchas gracias por su compra "+ nombreCliente);
                    break;
                default:
                    alert("Opción incorrecta");
                    break;
            }
            break;
        default:
            alert("Opción de pago incorrecta");
            break;
    }
    total = 0;
}






function comprar() {
    let seleccionarCategoria = Number(prompt("Ingrese el producto que desea comprar:\n1 Conjuntos \n2 Fragancias \n3 Accesiros "))
    let subtotal = 0;         
    switch (seleccionarCategoria) {
                case 1:
                    subtotal = conjuntos ();
                    break;
                case 2:
                    subtotal = fragancias ();
                    break;
                case 3:
                    subtotal = accesorios ();
                    break;
                default:
                    alert("Categoría no válida");
                    break;
            }
            return subtotal;     
}



function conjuntos() {
    let opcionCompra = Number(prompt("Ingrese el producto que desea comprar:\n1 - " + tipoConjuntos.productoA.nombre + " " + simbolo + tipoConjuntos.productoA.precioUnitario + "\n2 - " + tipoConjuntos.productoB.nombre +  " " + simbolo + tipoConjuntos.productoB.precioUnitario + "\n3 - " + tipoConjuntos.productoC.nombre + " " + simbolo + tipoConjuntos.productoC.precioUnitario  ))        
        let unidades, subtotal = 0;
            switch (opcionCompra) {
                case 1:
                    unidades = Number(prompt("Ingrese cantidad de unidades"))
                    subtotal = unidades * tipoConjuntos.productoA.precioUnitario
                    break;
                case 2:
                    unidades = Number(prompt("Ingrese cantidad de unidades"))
                    subtotal = unidades * tipoConjuntos.productoB.precioUnitario
                    break;
                case 3:
                    unidades = Number(prompt("Ingrese cantidad de unidades"))
                    subtotal = unidades * tipoConjuntos.productoC.precioUnitario
                    break;
                default:
                    alert("Opción no válida");
                    break;
            }
            return subtotal
}


function fragancias() {
    let opcionCompra = Number(prompt("Ingrese el producto que desea comprar:\n1 - " + tipoFragancias.productoA.nombre + " " + simbolo + tipoFragancias.productoA.precioUnitario + "\n2 - " + tipoFragancias.productoB.nombre +  " " + simbolo + tipoFragancias.productoB.precioUnitario + "\n3 - " + tipoFragancias.productoC.nombre + " " + simbolo + tipoFragancias.productoC.precioUnitario  ))        
        let unidades, subtotal = 0;
            switch (opcionCompra) {
                case 1:
                    unidades = Number(prompt("Ingrese cantidad de unidades"))
                    subtotal = unidades * tipoFragancias.productoA.precioUnitario
                    break;
                case 2:
                    unidades = Number(prompt("Ingrese cantidad de unidades"))
                    subtotal = unidades * tipoFragancias.productoB.precioUnitario
                    break;
                case 3:
                    unidades = Number(prompt("Ingrese cantidad de unidades"))
                    subtotal = unidades * tipoFragancias.productoC.precioUnitario
                    break;
                default:
                    alert("Opción no válida");
                    break;
            }
            subtotal *= factorDeConversion;
            return subtotal
}

function accesorios() {
    let opcionCompra = Number(prompt("Ingrese el producto que desea comprar:\n1 - " + tipoAccesorios.productoA.nombre + " " + simbolo + tipoAccesorios.productoA.precioUnitario + "\n2 - " + tipoAccesorios.productoB.nombre +  " " + simbolo + tipoAccesorios.productoB.precioUnitario + "\n3 - " + tipoAccesorios.productoC.nombre + " " + simbolo + tipoAccesorios.productoC.precioUnitario  ))        
        let unidades, subtotal = 0;
            switch (opcionCompra) {
                case 1:
                    unidades = Number(prompt("Ingrese cantidad de unidades"))
                    subtotal = unidades * tipoAccesorios.productoA.precioUnitario
                    break;
                case 2:
                    unidades = Number(prompt("Ingrese cantidad de unidades"))
                    subtotal = unidades * tipoAccesorios.productoB.precioUnitario
                    break;
                case 3:
                    unidades = Number(prompt("Ingrese cantidad de unidades"))
                    subtotal = unidades * tipoAccesorios.productoC.precioUnitario
                    break;
                default:
                    alert("Opción no válida");
                    break;
            }
            subtotal *= factorDeConversion;
            return subtotal
}




