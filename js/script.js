const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const floatingBox = document.querySelector('#floatingBox');
const verCarritoBtn = floatingBox;
const paginaCarrito = document.getElementById("paginaCarrito");
const paginaProductos = document.getElementById("paginaProductos");

let productos = [
    {id: 100, nombre: "Timeless Elegance", categoria: "Looks", subCategoria: "Citas", stock: 6, precio: 420000, rutaImagen: "/looks/elegancia-clasica.jpg"},
    {id: 101, nombre: "Eclectic Expression", categoria: "Looks", subCategoria: "Citas", stock: 2, precio: 400000, rutaImagen: "/looks/expresion-artistica.jpg"}, 
    {id: 102, nombre: "Enchanting Evening", categoria: "Looks", subCategoria: "Citas", stock: 6, precio: 480000 , rutaImagen: "/looks/fantasia-romantica.jpg"}, 
    {id: 103, nombre: "Modern Maven", categoria: "Looks", subCategoria: "Oficina", stock: 7, precio: 500000, rutaImagen: "/looks/profesional-innovador.jpg"}, 
    {id: 104, nombre: "Corporate Sofistication", categoria: "Looks", subCategoria: "Oficina", stock: 8, precio: 300000 , rutaImagen: "/looks/sofisticacion-corporativa.jpg"}, 
    {id: 105, nombre: "Boardroom Elegance", categoria: "Looks", subCategoria: "Oficina", stock: 2, precio: 305000 , rutaImagen: "/looks/clasico-empresarial.jpg"}, 
    {id: 106, nombre: "Effortless Cool", categoria: "Looks", subCategoria: "Fiestas", stock: 1, precio: 400400, rutaImagen: "/looks/fiesta-informal.jpg"}, 
    {id: 107, nombre: "Avant-Garde Affair", categoria: "Looks", subCategoria: "Fiestas", stock: 7, precio: 356000, rutaImagen: "/looks/declaraciones-audaces.jpg"}, 
    {id: 108, nombre: "Sophisticated Soiree", categoria: "Looks", subCategoria: "Fiestas", stock: 7, precio: 480000, rutaImagen: "/looks/vida-nocturna-elegante.jpg"}, 
    {id: 109, nombre: "Versátil Chic", categoria: "Looks", subCategoria: "Versátil", stock: 12, precio: 390000, rutaImagen: "/looks/transición-del-dia-a-la-noche.jpg"}, 
    {id: 110, nombre: "Effortless Casual", categoria: "Looks", subCategoria: "Versátil", stock: 3, precio: 220000, rutaImagen: "/looks/informal-sin-esfuerzo.jpg"}, 
    {id: 111, nombre: "Urban Edge", categoria: "Looks", subCategoria: "Versátil", stock: 23, precio: 260000, rutaImagen: "/looks/estilo-callejero-elegante.jpg"}, 
    {id: 200, nombre: "Polo Double Black", categoria: "Fragancias", subCategoria: "Aromas de café", stock: 12, precio: 220000, rutaImagen: "/fragancias/polo-double-black.jpg"}, 
    {id: 201, nombre: "Halloween x Man", categoria: "Fragancias", subCategoria: "Aromas de café", stock: 11, precio: 120000, rutaImagen: "/fragancias/halloween-x-man.jpg"}, 
    {id: 202, nombre: "Black Phantom", categoria: "Fragancias", subCategoria: "Aromas de café", stock: 6, precio: 200000 , rutaImagen: "/fragancias/black-phantom.jpg"}, 
    {id: 203, nombre: "Scandal", categoria: "Fragancias", subCategoria: "Aromas de caramelo", stock: 4, precio: 280000, rutaImagen: "/fragancias/scandal.jpg"}, 
    {id: 204, nombre: "Wanted by Night", categoria: "Fragancias", subCategoria: "Aromas de caramelo", stock: 1, precio: 180000, rutaImagen: "/fragancias/wanted-by-night.jpg"}, 
    {id: 205, nombre: "Azzaro", categoria: "Fragancias", subCategoria: "Aromas de caramelo", stock: 3, precio: 250000, rutaImagen: "/fragancias/azzaro.jpg"}, 
    {id: 206, nombre: "Le Beau Le Parfum", categoria: "Fragancias", subCategoria: "Aromas de coco", stock: 3, precio: 100000, rutaImagen: "/fragancias/le-beau-le-parfum.jpg"}, 
    {id: 207, nombre: "Bottled Pacific", categoria: "Fragancias", subCategoria: "Aromas de coco", stock: 12, precio: 120000, rutaImagen: "/fragancias/bottled-pacific.jpg"}, 
    {id: 208, nombre: "Coco Vanille", categoria: "Fragancias", subCategoria: "Aromas de coco", stock: 4, precio: 206000, rutaImagen: "/fragancias/coco-vanille.jpg"}, 
    {id: 209, nombre: "Éros Versace", categoria: "Fragancias", subCategoria: "Aromas de vainilla", stock: 3, precio: 190000, rutaImagen: "/fragancias/eros-versace.jpg"}, 
    {id: 210, nombre: "Layton Parfums", categoria: "Fragancias", subCategoria: "Aromas de vainilla", stock: 2, precio: 300000, rutaImagen: "/fragancias/layton-parfums.jpg"}, 
    {id: 211, nombre: "212VIP Black", categoria: "Fragancias", subCategoria: "Aromas de vainilla", stock: 7, precio: 222000, rutaImagen: "/fragancias/212vip-black.jpg"}, 
    {id: 300, nombre: "Ray-Ban", categoria: "Accesorios", subCategoria: "Gafas", stock: 2, precio: 200000 , rutaImagen: "/accesorios/ray-ban-classic-elegance.jpg"},
    {id: 301, nombre: "Professional Chic", categoria: "Accesorios", subCategoria: "Gafas", stock: 3, precio: 240000, rutaImagen: "/accesorios/professional-chic-sleek-metal.jpg"}, 
    {id: 400, nombre: "Sleek Sophistication", categoria: "Accesorios", subCategoria: "Relojes", stock: 3, precio: 160000 , rutaImagen: "/accesorios/sleek-sophistication-titanium-elegance.jpg"},
    {id: 401, nombre: "Avant-Garde Artistry", categoria: "Accesorios", subCategoria: "Relojes", stock: 4, precio: 140000, rutaImagen: "/accesorios/avant-gardeartistry-abstract-fusion-chronograph.jpg"}, 
    {id: 500, nombre: "Minimalist Mastery", categoria: "Accesorios", subCategoria: "Collares", stock: 7, precio: 100000 , rutaImagen: "/accesorios/minimalist-mastery-geometric-harmony.jpg"},
    {id: 501, nombre: "Urban Edge", categoria: "Accesorios", subCategoria: "Collares", stock: 5, precio: 80000, rutaImagen: "/accesorios/urban-edge-steel-manifesto.jpg"} 
];

let carrito = [];
let totalCarrito = 0;



function crearTarjetasProductos(productos) {
    let contenedorProductos = document.getElementById("productos");
    contenedorProductos.innerHTML = "";
    productos.forEach(producto => {
        let tarjetaProducto = document.createElement("div");
        tarjetaProducto.className = "producto";
        tarjetaProducto.innerHTML = `
            <img src=./assets/img${producto.rutaImagen}>
            <h5>${producto.nombre}</h5>
            
            <h6>$${producto.precio.toLocaleString()}</h6>
            <p>Quedan ${producto.stock} Unidades</p>
            <button id=${producto.id} class="agregarAlCarrito">Añadir al carrito</button>
        `;
        contenedorProductos.appendChild(tarjetaProducto);

        let botonAgregarAlCarrito = document.getElementById(producto.id);
        botonAgregarAlCarrito.addEventListener("click", (e) => agregarAlCarrito(e, productos));
    });
}


// Filtrar productos por categoría
document.querySelectorAll("#nav button").forEach(boton => {
    boton.addEventListener("click", () => {
        let categoria = boton.innerText;
        if (categoria === "Todos") {
            crearTarjetasProductos(productos);
        } else {
            let productosFiltrados = productos.filter(producto => producto.categoria === categoria);
            crearTarjetasProductos(productosFiltrados);
        }
    });
});

// Buscar productos por nombre
document.getElementById("buscar").addEventListener("click", function() {
    let terminoBusqueda = document.getElementById("buscador").value.toLowerCase();
    let resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(terminoBusqueda));

    if (resultados.length === 0) {
        document.getElementById("productos").innerHTML = `
            <h4 class="productoNoEncontrado">Lamentamos no tener el producto que deseas para embellecer tu persona.<br><br>¡Puedes volver a intentarlo!<br><br>¡Descubre looks, fragancias, accesorios y todo lo que necesitas!</h4>
        `;
    } else {
        crearTarjetasProductos(resultados);
    }
});

// Inicializar productos en la página
crearTarjetasProductos(productos);





function actualizarMensajeCarrito() {
    let mensajeCarrito = document.querySelector("#floatingBox h5");
    if (carrito.length === 0) {
        mensajeCarrito.textContent = "CARRITO VACIO";
    } else {
        mensajeCarrito.textContent = `TIENES $${totalCarrito.toLocaleString()}`;
    }
}

function agregarAlCarrito(event, productos) {
    
    let idProducto = parseInt(event.target.id);
    let producto = productos.find(p => p.id === idProducto);

    
    let productoEnCarrito = carrito.find(p => p.id === idProducto);

    if (productoEnCarrito) {
        productoEnCarrito.unidades += 1;
        productoEnCarrito.subtotal = productoEnCarrito.unidades * productoEnCarrito.precioUnitario;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precioUnitario: producto.precio,
            unidades: 1,
            subtotal: producto.precio
        });
    }

    totalCarrito = carrito.reduce((total, p) => total + p.subtotal, 0);
    actualizarMensajeCarrito();

}









// Función para renderizar el carrito de compras
function renderizarCarrito() {
    let contenedorCarrito = document.getElementById("contenedorCarrito");
    contenedorCarrito.innerHTML = "";

    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <div class="tarjetaCarrito">
                <h6>${producto.nombre}</h6>
                <p>$${producto.precioUnitario.toLocaleString()}</p>
                <p>${producto.unidades} unidades</p>
                <p>$${producto.subtotal.toLocaleString()}</p>
            </div>
        `;
    });

    document.querySelector(".totalCarrito").innerHTML = `
        <h3 class="fianalCompra">Total: $${totalCarrito.toLocaleString()}</h3>
    `;
    document.getElementById("finalizarCompra").addEventListener("click", () => {
        paginaCarrito.classList.add("oculto");
        paginaProductos.classList.remove("oculto");
        document.getElementById("productos").innerHTML = `
            <h4 class="mensaje-compra">Muchas gracias por su compra</h4>
        `;
        setTimeout(() => {
        paginaProductos.classList.remove("oculto");
        crearTarjetasProductos(productos);
    }, 800);
        carrito = [];
        totalCarrito = 0;
        actualizarMensajeCarrito();
    });
}

document.getElementById("seguirComprando").addEventListener("click", () => {
    paginaCarrito.classList.add("oculto");
    paginaProductos.classList.remove("oculto");
});








// Evento para el botón "VER RESUMEN"
floatingBox.addEventListener("mouseover", () => {
    let mensajeCarrito = document.querySelector("#floatingBox h5");
    if (carrito.length > 0) {
        mensajeCarrito.textContent = "VER RESUMEN";
    }
});
floatingBox.addEventListener("mouseout", () => {
    actualizarMensajeCarrito();
});
floatingBox.addEventListener("click", () => {
    paginaCarrito.classList.remove("oculto");
    paginaProductos.classList.add("oculto");
    renderizarCarrito();
});
