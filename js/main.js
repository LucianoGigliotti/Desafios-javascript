let bienvenido = alert("¡Bienvenidos a #SerMensana Store! A continuación podrá seleccionar los productos que quiera comprar")

let productos = prompt("Consulte el stock de la prenda que usted quiera comprar (Buzo, Campera, Pantalon, Chomba, Remera de algodon, Remera de entrenamiento, Short)")

switch (productos.toLowerCase()){
    case "buzo":
        console.log("si, tenemos", productos)
        break
    case "campera":
        console.log("si, tenemos ", productos)
        break
    case "pantalon":
        console.log("si, tenemos", productos)
        break
    case "chomba":
        console.log("si, tenemos", productos)
        break
    case "remera de algodon":
        console.log("si, tenemos", productos)
        break
    case "remera de entrenamiento":
        console.log("si, tenemos", productos)
        break
    case "short":
        console.log("si, tenemos", productos)
        break
    default:
        console.warn("no tenemos en stock")    
}


let tipoProducto = parseInt(prompt("¿Que desea comprar?(Ingrese solamente el número de la opción): 1-Buzo, 2-Campera, 3-Pantalon, 4-Chomba, 5-Remera de algodon, 6-Remera de entrenamiento, 7-Short"))
venta () 

function venta() {
    switch (tipoProducto){
        case 1:  
            alert("Perfecto, tu Buzo Mensana se ha añadido al carrito. El valor es de $5000")
            break   
        case 2:
            alert("Perfecto, tu Campera Mensana se ha añadido al carrito. El valor es de $6000")
            break
        case 3:
            alert("Perfecto, tu Pantalon Mensana se ha añadido al carrito. El valor es de $4000")
            break
        case 4:
            alert("Perfecto, tu Chomba Mensana se ha añadido al carrito. El valor es de $1500")
            break
        case 5:
            alert("Perfecto, tu Remera de algodón Mensana se ha añadido al carrito. El valor es de $1250")
            break
        case 6:
            alert("Perfecto, tu Remera de entrenamiento Mensana se ha añadido al carrito. El valor es de $1000")
            break
        case 7:
            alert("Perfecto, tu Short de entrenamiento Mensana se ha añadido al carrito. El valor es de $750")
            break
    }
}