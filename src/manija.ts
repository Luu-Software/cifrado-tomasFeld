import { preguntar } from './lib/consola.ts';

function obtenerPrefijo(numero: number, tamañoPrefijo: number): number {
   

  const resultado: number = Number(numero.toString().substring(0, tamañoPrefijo));

  return resultado; 
}

let tarjeta: number = parseInt(preguntar('Ingresa el numero de tarjeta: '));

let primerosDigitos: number = obtenerPrefijo(tarjeta, 2);


switch (primerosDigitos)
{

  case 34:
    console.log("AMEX");
      break;
    case 37:
      console.log("AMEX");
      break;
      case 51:
        console.log("MASTER");
        break;
        case 52:
          console.log("MASTER");
          break;
          case 53:
            console.log("MASTER");
            break;
            case 54:
              console.log("MASTER");
              break;
              case 55:
                console.log("MASTER");
                break;

                default:
          let primerDigito: number = obtenerPrefijo(tarjeta, 1);
          if(primerDigito === 4)
          {
            console.log("Visa");

          }
          else
          {
            console.log("Prefijo desconocido");


          }
          break;

}

