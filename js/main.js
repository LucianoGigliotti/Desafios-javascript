debugger

let tipoPrenda = prompt("Ingrese el tipo de prenda(short, remera, pantalon, buzo)")

switch (tipoPrenda.toLowerCase()){
    case"short":
        console.log("si, tenemos", tipoPrenda)
        break
    case "remera":
        console.log("si, tenemos ", tipoPrenda)
        break
    case "pantalon":
        console.log("si, tenemos", tipoPrenda)
        break
    case "buzo":
        console.log("si, tenemos", tipoPrenda)
        break
    default:
        console.warn("no tenemos en stock")    
}



debugger

let talle = prompt("Ingrese el talle que desea(s, m, l, xl, xxl")

switch (talle.toLowerCase()){
    case"s":
        console.log("si, tenemos el talle", talle)
        break
    case "m":
        console.log("si, tenemos el talle", talle)
        break
    case "l":
        console.log("si, tenemos el talle", talle)
        break
    case "xl":
        console.log("si, tenemos el talle", talle)
        break
    case "xxl":
        console.log("si, tenemos el talle", talle)
        break
    default:
        console.warn("no trabajamos ese talle")    
        
}

debugger

let cantidadPrendas = parseInt(prompt("Ingrese cantidad de prendas que quiera comprar"))

for (let i = 0; i < cantidadPrendas; i++) {
    console.log("Iteracion Nro.", i)
}