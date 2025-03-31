let array=[3,2,4,5,6,7,2,5]

/*1*/
console.log("1) Hello world");

/*2*/
function mostrarArrayTradicional(arr){
    arr.forEach((elem)=>console.log(elem));
}
const mostrarArrayFlecha=(arr)=>{
    arr.forEach((elem)=>console.log(elem));
}

//mostrarArrayTradicional(array);
//mostrarArrayFlecha(array);

/*3*/

const agregarValorArray=(arr, val)=>{
    arr.push(val);
    mostrarArrayFlecha(arr);
}

agregarValorArray(array,5);

/*4*/

const encontrarUltPosicion=(arr,val)=>arr.lastIndexOf(val);
console.log(`Esta en ${encontrarUltPosicion(array,2)}`);

/*5*/
const sumarValoresArray=(arr)=>{
    let suma=0;
    arr.forEach((num)=>suma+=num);
    return suma
}
console.log(`La suma es ${sumarValoresArray(array)}`);

/*6*/

const reverseArray=(arr)=>arr.reverse();

mostrarArrayFlecha(reverseArray(array));

/*7*/

const comparar=(a, b) =>{
    return a - b;
  }

const ordenarArray=(arr)=>arr.sort(comparar);

console.log("-------------------");
mostrarArrayFlecha(ordenarArray(array));

/*8*/

const filtrarArray=(arr, numero)=>arr.filter((num)=>num>numero);

console.log("-----------------");
mostrarArrayFlecha(filtrarArray(array,4));
console.log("-------------");

/*9*/

const contarRepetidos=(arr,elem)=>{
    let cont=0;
    arr.forEach((numero)=>{
        if(numero==elem){cont++}
    });
    return cont;
}
console.log(`Se repite ${contarRepetidos(array,5)} veces`);