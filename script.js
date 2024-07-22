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
        throw new Error("Número máximo de intentos alcanzado."); 
    
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
conversion();



let productos = [
    {id: 100, nombre: "Timeless Elegance", categoria: "Looks", subCategoria: "Citas", stock: 6, precio: 420000 * factorDeConversion, rutaImagen: ""},
    {id: 101, nombre: "Eclectic Expression", categoria: "Looks", subCategoria: "Citas", stock: 2, precio: 400000 * factorDeConversion, rutaImagen: ""}, 
    {id: 102, nombre: "Enchanting Evening", categoria: "Looks", subCategoria: "Citas", stock: 6, precio: 480000 * factorDeConversion, rutaImagen: ""}, 
    {id: 103, nombre: "Modern Maven", categoria: "Looks", subCategoria: "Oficina", stock: 7, precio: 500000 * factorDeConversion, rutaImagen: ""}, 
    {id: 104, nombre: "Corporate Sofistication", categoria: "Looks", subCategoria: "Oficina", stock: 8, precio: 300000 * factorDeConversion, rutaImagen: ""}, 
    {id: 105, nombre: "Boardroom Elegance", categoria: "Looks", subCategoria: "Oficina", stock: 2, precio: 305000 * factorDeConversion, rutaImagen: ""}, 
    {id: 106, nombre: "Effortless Cool", categoria: "Looks", subCategoria: "Fiestas", stock: 1, precio: 400400 * factorDeConversion, rutaImagen: ""}, 
    {id: 107, nombre: "Avant-Garde Affair", categoria: "Looks", subCategoria: "Fiestas", stock: 7, precio: 356000 * factorDeConversion, rutaImagen: ""}, 
    {id: 108, nombre: "Sophisticated Soiree", categoria: "Looks", subCategoria: "Fiestas", stock: 7, precio: 480000 * factorDeConversion, rutaImagen: ""}, 
    {id: 109, nombre: "Versátil Chic", categoria: "Looks", subCategoria: "Versátil", stock: 12, precio: 390000 * factorDeConversion, rutaImagen: ""}, 
    {id: 110, nombre: "Effortless Casual", categoria: "Looks", subCategoria: "Versátil", stock: 3, precio: 220000 * factorDeConversion, rutaImagen: ""}, 
    {id: 111, nombre: "Urban Edge", categoria: "Looks", subCategoria: "Versátil", stock: 23, precio: 260000 * factorDeConversion, rutaImagen: ""}, 
    {id: 200, nombre: "Polo Double Black", categoria: "Fragancias", subCategoria: "Aromas de café", stock: 12, precio: 220000 * factorDeConversion, rutaImagen: ""}, 
    {id: 201, nombre: "Halloween x Man", categoria: "Fragancias", subCategoria: "Aromas de café", stock: 11, precio: 120000 * factorDeConversion, rutaImagen: ""}, 
    {id: 202, nombre: "Black Phantom", categoria: "Fragancias", subCategoria: "Aromas de café", stock: 6, precio: 200000 * factorDeConversion, rutaImagen: ""}, 
    {id: 203, nombre: "Scandal", categoria: "Fragancias", subCategoria: "Aromas de caramelo", stock: 4, precio: 280000 * factorDeConversion, rutaImagen: ""}, 
    {id: 204, nombre: "Wanted by Night", categoria: "Fragancias", subCategoria: "Aromas de caramelo", stock: 1, precio: 180000 * factorDeConversion, rutaImagen: ""}, 
    {id: 205, nombre: "Azzaro", categoria: "Fragancias", subCategoria: "Aromas de caramelo", stock: 3, precio: 250000 * factorDeConversion, rutaImagen: ""}, 
    {id: 206, nombre: "Le Beau Le Parfum", categoria: "Fragancias", subCategoria: "Aromas de coco", stock: 3, precio: 100000 * factorDeConversion, rutaImagen: ""}, 
    {id: 207, nombre: "Bottled Pacific", categoria: "Fragancias", subCategoria: "Aromas de coco", stock: 12, precio: 120000 * factorDeConversion, rutaImagen: ""}, 
    {id: 208, nombre: "Coco Vanille", categoria: "Fragancias", subCategoria: "Aromas de coco", stock: 4, precio: 206000 * factorDeConversion, rutaImagen: ""}, 
    {id: 209, nombre: "Éros Versace", categoria: "Fragancias", subCategoria: "Aromas de vainilla", stock: 3, precio: 190000 * factorDeConversion, rutaImagen: ""}, 
    {id: 210, nombre: "Layton Parfums", categoria: "Fragancias", subCategoria: "Aromas de vainilla", stock: 2, precio: 300000 * factorDeConversion, rutaImagen: ""}, 
    {id: 211, nombre: "212VIP Black", categoria: "Fragancias", subCategoria: "Aromas de vainilla", stock: 7, precio: 222000 * factorDeConversion, rutaImagen: ""}, 
    {id: 300, nombre: "Ray-Ban", categoria: "Accesorios", subCategoria: "Gafas", stock: 2, precio: 200000 * factorDeConversion, rutaImagen: ""},
    {id: 301, nombre: "Professional Chic", categoria: "Accesorios", subCategoria: "Gafas", stock: 3, precio: 240000 * factorDeConversion, rutaImagen: ""}, 
    {id: 400, nombre: "Sleek Sophistication", categoria: "Accesorios", subCategoria: "Relojes", stock: 3, precio: 160000 * factorDeConversion, rutaImagen: ""},
    {id: 401, nombre: "Avant-Garde Artistry", categoria: "Accesorios", subCategoria: "Relojes", stock: 4, precio: 140000 * factorDeConversion, rutaImagen: ""}, 
    {id: 500, nombre: "Minimalist Mastery", categoria: "Accesorios", subCategoria: "Collares", stock: 7, precio: 100000 * factorDeConversion, rutaImagen: ""},
    {id: 501, nombre: "Urban Edge", categoria: "Accesorios", subCategoria: "Collares", stock: 5, precio: 80000 * factorDeConversion, rutaImagen: ""} 
];
let carrito = [];






function mostrarMenu() {
    let resumenCarrito = mostrarResumenCarrito();
    let opcion = Number(prompt(`${resumenCarrito}\n\nSeleccionar una opción:\n1 Comprar\n2 Finalizar compra\n3 Salir`));
    while (opcion !== 3) {
        if (opcion === 1) {
            comprar();
        } else if (opcion === 2) {
            finalizarCompra();
        } else {
            alert("Opción incorrecta");
        }
        // Mostrar el resumen actualizado después de cada acción
        resumenCarrito = mostrarResumenCarrito();
        opcion = Number(prompt(`${resumenCarrito}\n\nSeleccionar una opción:\n1 Comprar\n2 Finalizar compra\n3 Salir`));
    }
}
mostrarMenu();



function mostrarResumenCarrito() {
    if (carrito.length === 0) {
        return "Aún no tienes productos agregados al carrito.";
    } else {
        let resumen = carrito.map(p => `Nombre: ${p.nombre}, Cantidad: ${p.unidades}, Subtotal: ${simbolo}${p.subtotal.toFixed(2)}`).join('\n');
        let totalCarrito = carrito.reduce((acc, p) => acc + p.subtotal, 0);
        return `Resumen del carrito:\n${resumen}\n\nTotal: ${simbolo}${totalCarrito.toFixed(2)}`;
    }
}




function listar(productos) {
    return productos.map(p => `ID: ${p.id} - ${p.nombre} - Precio: ${simbolo}${p.precio.toFixed(2)}`).join('\n'); 
}





function comprar() {
    const categoria = Number(prompt("Seleccione una categoría:\n1 Looks\n2 Fragancias\n3 Accesorios\n4 Ver todos"));
    let productosFiltrados;
    switch (categoria) {
        case 1:
            productosFiltrados = productos.filter(p => p.categoria === "Looks");
            break;
        case 2:
            productosFiltrados = productos.filter(p => p.categoria === "Fragancias");
            break;
        case 3:
            productosFiltrados = productos.filter(p => p.categoria === "Accesorios");
            break;
        case 4:
            productosFiltrados = productos;
            break;
        default:
            alert("Opción incorrecta");
            return;
    }
    let idProducto = Number(prompt("Seleccionar ID de producto:\n" + listar(productosFiltrados)));
    if (productos.some(producto => producto.id === idProducto)) {
        let productoBuscado = productos.find(producto => producto.id === idProducto);

        if (productoBuscado.stock === 0) {
            alert("No hay stock disponible");
            return; 
        }

        let unidades;
        while (true) {
            unidades = Number(prompt("Ingrese la cantidad de unidades"));
            if (unidades === 0) {
                alert("No puede agregar 0 unidades al carrito. Por favor, ingrese una cantidad válida.");
            } else if (isNaN(unidades) || unidades < 0) {
                alert("Cantidad inválida. Por favor, ingrese un número positivo.");
            } else if (unidades > productoBuscado.stock) {
                let respuesta = Number(prompt(`Stock insuficiente. Solo hay ${productoBuscado.stock} unidades disponibles. ¿Qué desea hacer?\n1 Comprar las unidades disponibles\n2 Introducir otra cantidad\n3 Volver al menú principal`));
                switch (respuesta) {
                    case 1:
                        let unidadesDisponibles = productoBuscado.stock;
                        let indiceProductoEnCarrito = carrito.findIndex(producto => producto.id === idProducto);
                        if (indiceProductoEnCarrito === -1) {
                            carrito.push({
                                id: productoBuscado.id,
                                nombre: productoBuscado.nombre,
                                precioUnitario: productoBuscado.precio,
                                unidades: unidadesDisponibles,
                                subtotal: productoBuscado.precio * unidadesDisponibles
                            });
                        } else {
                            carrito[indiceProductoEnCarrito].unidades += unidadesDisponibles;
                            carrito[indiceProductoEnCarrito].subtotal += productoBuscado.precio * unidadesDisponibles;
                        }
                        productoBuscado.stock -= unidadesDisponibles;
                        alert("Producto agregado al carrito con la cantidad disponible.");
                        return; 
                    case 2:
                        continue;
                    case 3:
                        return; 
                    default:
                        alert("Opción incorrecta");
                        break;
                }
            } else {
                break; 
            }
        }
        let indiceProductoEnCarrito = carrito.findIndex(producto => producto.id === idProducto);
        if (indiceProductoEnCarrito === -1) {
            carrito.push({
                id: productoBuscado.id,
                nombre: productoBuscado.nombre,
                precioUnitario: productoBuscado.precio,
                unidades: unidades,
                subtotal: productoBuscado.precio * unidades
            });
        } else {
            carrito[indiceProductoEnCarrito].unidades += unidades;
            carrito[indiceProductoEnCarrito].subtotal += productoBuscado.precio * unidades;
        }
        productoBuscado.stock -= unidades;
        alert("Producto agregado al carrito.");
    } else {
        alert("El ID ingresado no corresponde a un producto de nuestra cartera");
    }
}





function finalizarCompra() {
    let descuento= 0.15; 
    total = 0;
    for (let i=0; i < carrito.length; i++){
        total=total+carrito [i].subtotal
    }
    let formaPago;
    do {
        formaPago = Number(prompt(`Tienes un total de: ${total.toFixed(2)}${simbolo}. Elija forma de pago:\n1 Débito\n2 Crédito`));
        switch (formaPago) {
            case 1:
                total *= (1 - descuento);
                alert(`Tienes un descuento del ${descuento * 100}%, su total a abonar es de ${total.toFixed(2)} ${simbolo}. \n¡Muchas gracias por su compra ${nombreCliente}!`);
                carrito = [];
                return; 
            case 2:
                let opcionesCredito;
                do {
                    opcionesCredito = Number(prompt("Elija la opción de pago:\n1 En tres cuotas\n2 En seis cuotas"));
                    switch (opcionesCredito) {
                        case 1:
                            let cuotaTres = total / 3;
                            alert(`Debes abonar ${cuotaTres.toFixed(2)} ${simbolo} por cuota. Muchas gracias por su compra ${nombreCliente}`);
                            carrito = [];
                            return; 
                        case 2:
                            let cuotaSeis = total / 6;
                            alert(`Debes abonar ${cuotaSeis.toFixed(2)} ${simbolo} por cuota. Muchas gracias por su compra ${nombreCliente}`);
                            carrito = [];
                            return; 
                        default:
                            alert("Opción incorrecta. Por favor, seleccione una opción válida.");
                            break; 
                    }
                } while (opcionesCredito !== 1 && opcionesCredito !== 2);
                break; 
            default:
                alert("Opción de pago incorrecta. Por favor, seleccione una opción válida.");
                break; 
        }
    } while (formaPago !== 1 && formaPago !== 2);
}


