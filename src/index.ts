import { preguntar } from "./lib/consola.ts"; 
import { cifrar, descifrar } from "./lib/funcionesCriptográficas.ts"; 

let palabra: string  = preguntar("Ingresa la palabra a CIFRAR o DESCIFRAR"); 
let claveTexto: number = parseInt( preguntar("Ingresa la clave de cifrado"));
let accion: string  = preguntar("Ingresa si quieres CIFRAR o DESCIFRAR"); 

let resultado: string | undefined;

switch (accion) {
    case "CIFRAR":
            resultado = cifrar(palabra, claveTexto);
        
        break;
    case "DESCIFRAR":
            resultado = descifrar(palabra, claveTexto);
        
        break;
    default:
        console.log("Acción no válida");
}

if (resultado) {
    console.log("Resultado: ", resultado);
}