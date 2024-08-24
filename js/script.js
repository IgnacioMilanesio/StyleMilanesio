

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const floatingBox = document.querySelector('#floatingBox');
const verCarritoBtn = floatingBox;
const paginaCarrito = document.getElementById("paginaCarrito");
const paginaProductos = document.getElementById("paginaProductos");

let carrito = obtenerCarrito(); // Inicializa el carrito desde localStorage
let totalCarrito = carrito.reduce((total, p) => total + p.subtotal, 0); // Calcula el total inicial

fetch("../info.json")
    .then(response => response.json())
    .then(productos => encierraTodo(productos));

function encierraTodo(productos) {

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
    
        
    document.getElementById("buscar").addEventListener("click", realizarBusqueda);

    document.getElementById("buscador").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            realizarBusqueda();
        }
    });

    function realizarBusqueda() {
        let terminoBusqueda = document.getElementById("buscador").value.toLowerCase();
        let resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(terminoBusqueda));

        if (resultados.length === 0) {
            document.getElementById("productos").innerHTML = `
                <h4 class="productoNoEncontrado">Lamentamos no tener el producto que deseas para embellecer tu persona.<br><br>¡Puedes volver a intentarlo!<br><br>¡Descubre looks, fragancias, accesorios y todo lo que necesitas!</h4>
            `;
        } else {
            crearTarjetasProductos(resultados);
        }
    }


    crearTarjetasProductos(productos);
    actualizarMensajeCarrito();

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
        setearCarrito(carrito); 
        actualizarMensajeCarrito();
        Toastify({
            text: "Producto Agregado",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "left", 
            offset: {
                y: '5rem' 
            },
            style: {
                background: "#FFD700" ,
                color: "#A81818",
            },
        }).showToast();
    
    }


    function renderizarCarrito() {
        let contenedorCarrito = document.getElementById("contenedorCarrito");
        contenedorCarrito.innerHTML = "";
    
        carrito.forEach((producto, index) => {
            contenedorCarrito.innerHTML += `
                <div class="tarjetaCarrito">
                    <h6>${producto.nombre}</h6>
                    <p>$${producto.precioUnitario.toLocaleString()}</p>
                    <p>${producto.unidades} unidades</p>
                    <p>$${producto.subtotal.toLocaleString()}</p>
                    <button class="btn-eliminar" data-index="${index}">Eliminar</button>
                </div>
            `;
        });
    
        document.querySelector(".totalCarrito").innerHTML = `
            <h3 class="fianalCompra">Total: $${totalCarrito.toLocaleString()}</h3>
        `;
    
        document.querySelectorAll(".btn-eliminar").forEach(button => {
            button.addEventListener("click", (event) => {
                const productoIndex = event.target.getAttribute("data-index");
                eliminarProductoDelCarrito(productoIndex);
            });
        });
    
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
            setearCarrito(carrito); // Limpia el carrito en localStorage
            actualizarMensajeCarrito();
        });
    }
    
    function eliminarProductoDelCarrito(index) {
        // Restar el subtotal del producto al totalCarrito
        totalCarrito -= carrito[index].subtotal;
    
        // Eliminar el producto del array carrito
        carrito.splice(index, 1);
    
        // Guardar el carrito actualizado en localStorage
        setearCarrito(carrito);
    
        // Volver a renderizar el carrito
        renderizarCarrito();
        
        // Actualizar el mensaje del carrito flotante
        actualizarMensajeCarrito();
    }
    


    

    document.getElementById("seguirComprando").addEventListener("click", () => {
        paginaCarrito.classList.add("oculto");
        paginaProductos.classList.remove("oculto");
    });

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
        if (carrito.length === 0) {
            Swal.fire({
                title: 'CARRITO VACÍO!',
                text: 'Debes agregar un producto al carrito antes de continuar',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else {
            paginaCarrito.classList.remove("oculto");
            paginaProductos.classList.add("oculto");
            renderizarCarrito();
        }
    });


}

function obtenerCarrito() {
    return localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
}

function setearCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
















