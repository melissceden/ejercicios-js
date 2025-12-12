// Lista de ejercicios de makeitrealcamp

// Contraseña válida - Ejercicio #1
function contrasenaValida (contrasenaIngresada) {
    let contrasenaValida1= '2Fj(jjbFsuj';
    let contrasenaValida2= 'eoZiugBf&g9';
    if ((contrasenaIngresada === contrasenaValida1) || (contrasenaIngresada === contrasenaValida2) ) {
        return true;
    } else {
        return false;
    }
};   

console.log (contrasenaValida('hola'))

// Otra solucion
function contrasenaValida1(contrasenaIngresada) {
    const validas = ['2Fj(jjbFsuj', 'eoZiugBf&g9']
    return validas.includes(contrasenaIngresada) // Revisa si validas esta incluido es contrasenaIngresada
}

console.log (contrasenaValida1('hoola'))



// Calcular impuestos - Ejercicio #2
function calcularImpuestos (edad, ingresos) {
    let impuestoTotal = (40 / 100) * ingresos;
    if ((edad >= 18) && (ingresos >= 1000)) {
        return impuestoTotal;
    } else {
        return 0
    }
}
console.log(calcularImpuestos(40, 10000)) // 4000


// 3. IMC (ïndice de masa corporal) - Ejercicio #3

function bmi (peso, altura) {
    const valor= peso / altura ** 2
    if (valor< 18.5) {
        return "Bajo de peso";
    } else if (valor <= 24.9) {
        return "Normal";
    } else if (valor <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
console.log(bmi(65, 1.8));


// Imprimir un arreglo - Ejercicio #4

function imprimirArreglo(arreglo) {
    let cadaArreglo = '';
    for (let i = 0; i < arreglo.length; i++) { 
        cadaArreglo += arreglo[i] + "\n";      
    }
    return cadaArreglo;
}

console.log(imprimirArreglo([1, 'hola', 3, 4]));

// Número de Likes - Ejercicio #5

function conversorLikes(likesCompletos) {
    let likesConvertidos = '';
    likesCompletos = likesCompletos.toString();
    let cantidadCaracteresLikes = likesCompletos.length;

    if ((cantidadCaracteresLikes >= 7) && (cantidadCaracteresLikes <= 9)) {
        likesConvertidos = likesCompletos.slice(0, -6);
        likesConvertidos = likesConvertidos + 'M';     
    } else if ((cantidadCaracteresLikes <= 6) && (cantidadCaracteresLikes >= 4)) {
        likesConvertidos = likesCompletos.slice(0, -3);
        likesConvertidos = likesConvertidos + 'K';
    } else {
        return likesCompletos;
    }
    return likesConvertidos;
}
console.log(conversorLikes(2000))


// Otra solucion

function conversorlikes2(likesCompletos) {
    const cantidadCaracteres = likesCompletos.toString().length;
    const texto = likesCompletos.toString();

    if (cantidadCaracteres >=7 ) { // Millones
        return texto.slice(0, -6) + 'M';
    } else if (cantidadCaracteres >= 4) { // Miles
        return texto.slice(0, -3) + 'K';
    } else {
        return texto;
    }
}

console.log(conversorlikes2(2000000))


// FizzBuzz - Ejercicio #6

function FizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    } else if (numero % 3 === 0) {
        return 'Fizz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    } else {
        return numero;
    }
}

console.log(FizzBuzz(15));


// Contar cuantos numeros hay entre dos numeros - Ejercicio #7
function contarRango(num1, num2) {
    let contador= 0;
    for (let i=num1 + 1; i<num2; i++ ) {
        contador++;
    }
    return contador;
}

console.log(contarRango(1, 9))

// Otra solucion

function contarRango2(num1, num2) {
    return num2 - num1 - 1;
}

// Sumar rango de numeros - Ejercicio #8

function sumarRango (numInicial, numFinal) {
    let sumaRango = 0
    for (let i = numInicial; i <= numFinal; i++ ) {
        sumaRango += i; // Corregido
    }
    return sumaRango;
}

console.log(sumarRango(12, 14));

// Numero de aes (letra "a") - Ejercicio #9

function numeroDeAes(string) {
    let cantidadLetraA= 0
    for (let i=0; i<string.length; i++) {
        if (string[i]=== 'a') {
            cantidadLetraA ++;
        }
    }
    return cantidadLetraA;
}
console.log(numeroDeAes('Holaaaa'))

// Numero de caracteres de un string - Ejercicio #10

function numeroDeCaracteres(string, caracter) {
        let cantidadCaracteres= 0
        for (let i=0; i<string.length; i++) {
            if (string[i]=== caracter) {
            cantidadCaracteres ++;
        }
    }
    return cantidadCaracteres;
}

console.log(numeroDeCaracteres("eeee", "e"))
