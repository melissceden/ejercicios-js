// Ejercicio #1 – Precio total de una compra
function sumaCompra(compras) {
    let totalCompra = 0;

    for (let i = 0; i < compras.length; ++i) {
        totalCompra += compras[i];
    }

    console.log('El total de la compra es:', totalCompra);
    return totalCompra;
}

let total = sumaCompra([1000, 500, 1500, 2000, 1000]);


// Ejercicio #2 – Contar números mayores a 10
function numerosMayores10(listaNumeros) {
    let listaNumerosMayores10 = [];

    for (let i = 0; i < listaNumeros.length; ++i) {
        if (listaNumeros[i] > 10) {
            listaNumerosMayores10.push(listaNumeros[i]);
        }
    }

    return listaNumerosMayores10;
}

const listaNums = numerosMayores10([6, 17, 2, 7, 12, 15, 10, 19]);
console.log('Números mayores:', listaNums);


// Ejercicio #3 – Contar números pares
function contarPares(listaNumerosNoPares) {
    let listaNumerosPares = [];

    for (let i = 0; i < listaNumerosNoPares.length; ++i) {
        if (listaNumerosNoPares[i] % 2 === 0) {
            listaNumerosPares.push(listaNumerosNoPares[i]);
        }
    }

    return listaNumerosPares.length;
}

const listaNumerosPares1 = contarPares([10, 13, 20, 24, 35, 99, 12]);
console.log('Cantidad números pares:', listaNumerosPares1);


// Ejercicio #4 – Sumar números mayores que un límite
function sumarMayoresQueFunct(lista, limite) {
    let total = 0;

    for (let i = 0; i < lista.length; ++i) {
        if (lista[i] > limite) {
            total += lista[i];
        }
    }

    return total;
}

console.log(sumarMayoresQueFunct([4, 12, 20, 9, 100], 10));


// Ejercicio #4 (extra) – Contar cuántos números son mayores que el promedio
function contarNumerosMayoresPromedio(listaNumeros) {
    let sumaNumerosLista = 0;
    let listaMayoresPromedio = [];

    for (let i = 0; i < listaNumeros.length; ++i) {
        sumaNumerosLista += listaNumeros[i];
    }

    let promedio = sumaNumerosLista / listaNumeros.length;

    for (let i = 0; i < listaNumeros.length; ++i) {
        if (listaNumeros[i] > promedio) {
            listaMayoresPromedio.push(listaNumeros[i]);
        }
    }

    return listaMayoresPromedio;
}

console.log(contarNumerosMayoresPromedio([10, 20, 24, 3, 30, 5]));


// Ejercicio #5 – Filtrar números mayores al doble del promedio
function filtrarMayoresDoblePromedio(listaNums) {
    let suma = 0;
    let listaMayores = [];

    for (let i = 0; i < listaNums.length; ++i) {
        suma += listaNums[i];
    }

    let promedio = suma / listaNums.length;
    let doblePromedio = promedio * 2;

    for (let i = 0; i < listaNums.length; ++i) {
        if (listaNums[i] > doblePromedio) {
            listaMayores.push(listaNums[i]);
        }
    }

    return listaMayores;
}

console.log(filtrarMayoresDoblePromedio([10, 20, 30, 40, 45, 50, 55, 12, 14]));
