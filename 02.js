// ---------- LISTA EJERCICIOS #2 -------------

// Contar cuantos numeros estan entre dos limites - Ejercicio #1
function contarNumerosEntre(lista, minimo, maximo) {
    let listaNumsEntre = [];
    for (let i= 0; i<lista.length; i++) {
        if ((lista[i] >= minimo) && (lista[i] <= maximo)) {
            listaNumsEntre.push(lista[i]);
        }

    }
    return listaNumsEntre;
}
console.log(contarNumerosEntre([9, 10, 12, 14,19, 20, 21], 10, 20));



// Devolver los números que son múltiplos de la suma total - Ejercicio #2
function filtrarMultiplosDeSuma(lista) {
    let sumaNumerosMultiplos = 0;
    let numerosMultiplos = [];

    for (let i = 0; i < lista.length; i++) { // SUMA
        sumaNumerosMultiplos = sumaNumerosMultiplos + lista[i];
    }

    for (let i = 0; i < lista.length; i++) {
        if ((lista[i] % sumaNumerosMultiplos) === 0 ) {
            numerosMultiplos.push(lista[i]);
        }
    }
    return numerosMultiplos;
}
    console.log (filtrarMultiplosDeSuma([50, 100, 300]));



// Calcular cuántos números son mayores que el promedio, pero solo contando los impares - Ejercicio #3
function contarImparesMayoresPromedio(lista) {
    let sumaPromedioImpares = 0;
    let promedio = 0;
    let numsImparesMayoresPromedio = [];

    for (let i= 0; i < lista.length; i++) {
        sumaPromedioImpares += lista[i];
    }
    promedio = sumaPromedioImpares /  lista.length;
    
    for (let i= 0; i < lista.length; i++) {
        if (((lista[i] % 2) === 1) && (lista[i] > promedio)) {
            numsImparesMayoresPromedio.push (lista[i]);
        }
    }
    numsImparesMayoresPromedio = numsImparesMayoresPromedio.length

    return numsImparesMayoresPromedio
}

console.log (contarImparesMayoresPromedio([18, 19, 20, 21, 22, 23, 25, 26]))



// Sumar solo los numeros que esten entre dos limites, pero ignorando los que sean multiplos de 3 - Ejercicio #4
function sumarEntreIgnorando(lista, minimo, maximo) {
    let resultadoSuma = 0;
    for (let i = 0; i< lista.length; i++) {
        if ((lista[i] >= minimo) && (lista[i] <= maximo ) && ((lista[i] % 3) !== 0 )) {
            resultadoSuma += lista[i];
        }
    }
    return resultadoSuma;
}

console.log(sumarEntreIgnorando([10, 12, 14, 15, 18, 20], 10, 20));



// Calcular el porcentaje de números mayores al promedio - Ejercicio #5
function extraerPorcentajeMayoresPromedio(lista) {
    let sumaNumeros_PorcentajeMayoresPromedio = 0;
    let promedio_PorcentajeMayoresPromedio = 0;
    let numerosMayoresPromedio = [];
    let porcentajeMayoresPromedio = 0;

    for (let i= 0; i< lista.length; i++ ) {
        sumaNumeros_PorcentajeMayoresPromedio += lista[i]; 
    }
    promedio_PorcentajeMayoresPromedio = sumaNumeros_PorcentajeMayoresPromedio / lista.length

    for (let i= 0; i< lista.length; i++ ) {
        if (lista[i] > promedio_PorcentajeMayoresPromedio) {
        }
    }
    porcentajeMayoresPromedio = (numerosMayoresPromedio.length / lista.length) * 100;

    return porcentajeMayoresPromedio;
}

console.log(extraerPorcentajeMayoresPromedio([10, 20, 30, 40]))

// Devolver el numero mas pequeño del array - Ejercicio #6.3

function numeroPequenoInfinity(lista) {
    let minimoInfty = Infinity; // Infinity como valor inicial
        if (lista[i] < minimoInfty)
            minimoInfty= lista[i];
    }
    return minimoInfty;

console.log (numeroPequenoInfinity([10,20,30,1,2,3]));

// Devolver el número más cercano al promedio - Ejercicio #6.5 










