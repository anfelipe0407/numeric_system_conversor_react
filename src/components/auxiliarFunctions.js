import { DIGITS } from "./auxiliarConsts";

export const convertDecimalToNBase = (number, base) => {
    const arrayNum = dividirNumPartes(number);
    let [pEntera, pDecimal] = arrayNum;
    let resultado = "";

    if(base > 10){
      // console.log('in')
      // console.log(number)
      // console.log(base)
      let resultado = number.toString(base).toUpperCase();
      return resultado;
    }

    let cociente, residuo
    do{
    [cociente, residuo] = dividirNumPartes(pEntera/base);

    if(residuo !== 0){
        residuo = pEntera - (cociente*base)
    }

    // console.log(cociente)
    // console.log(residuo)

    pEntera = cociente;
    resultado += String(residuo);
    }while(cociente >= base)
    resultado += String(cociente);
    resultado = resultado.split("").reverse().join("");

    if(pDecimal !== 0){
    pDecimal = +("0." + pDecimal.toString())
    resultado += "."
    let contDecimales = 0

    let producto, entero;
    do{
        [entero, producto] = dividirNumPartes(pDecimal * base);
        producto = +("0." + producto);
        
        pDecimal = producto;
        
        resultado += String(entero)
        // console.log("P:" + producto)
        // console.log("E:" + entero)
        contDecimales++;
        
        if(contDecimales > 10) break;
    }while(dividirNumPartes(producto)[1] !== 0);
    }

    return resultado
}
  
export const convertNBaseToDecimal = (number, base) => {
    let [pEntera, pDecimal] = dividirNumPartes(number);
    // console.log(pEntera)
    // console.log(pDecimal)
    let arrayNums = (pEntera + pDecimal).split("")
    // console.log(arrayNums)
    let n = pEntera.length - 1
    
    arrayNums = arrayNums.map((elem,i) => {
      let num = DIGITS[elem] * Math.pow(base, n);
      n--;
      return num
    })
  
    const resultado = arrayNums.reduce((curr, sum) => curr + sum);
    
    return resultado
  }
function dividirNumPartes(number){
    const arrayNum = number.toString().split(".");
    if(!arrayNum[1]) arrayNum[1] = 0;
    
    return arrayNum
  }



