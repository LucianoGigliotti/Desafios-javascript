const productos = [
    {nombre: "buzo", precio: 5000},
    {nombre: "campera", precio: 6000},
    {nombre: "pantalon", precio: 4000},
    {nombre: "chomba", precio: 1500},
    {nombre: "remera", precio: 1250},
    {nombre: "entrenamiento", precio: 1000},
    {nombre: "short", precio: 750},
];

let carrito = []

let seleccion = prompt("Hola, ¿desea comprar algún producto? si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola ¿desea comprar algun producto? si o no")
}

if(seleccion == "si"){
    alert("A continuación nuestra lista de productos")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " - " + producto.precio + "$"
    );
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert ("Gracias por visitar nuestra WebStore")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "buzo" || producto == "campera" || producto == "pantalon" || producto == "chomba" || producto == "remera" || producto == "entrenamiento" || producto == "short"){
        switch(producto){
            case "buzo":
                precio = 5000;
                break;
            case "campera":
                precio = 6000;
                break;
            case "pantalon":
                precio = 4000;
                break;
            case "chomba":
                precio = 1500;
                break;
            case "remera":
                precio = 1250;
                break;
            case "entrenamiento":
                precio = 1000;
                break;
            case "short":
                precio = 750;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert ("No tenemos ese producto")      
    }

    seleccion = prompt("¿Desea seguir comprano?")

    while(seleccion === "no"){
        alert("Gracios por su compra ")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }    
}

const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.unidades, 0)
console.log(`El total a pagar por su compra es : ${total}`)
