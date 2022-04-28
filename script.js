// 1. Solicita al usuario que elija entre la opción 1 o 2:
// - Se le debe pedir dos número al usuario e indicar si son pares y múltiplos de 7 ambos, 
//     uno de ellos o ninguno.
// - Se le debe pedir una palabra y comprobar si empieza o termina por a.

const iniciar = prompt("Escribe un 1 o un 2 para elegir opción");


do {
    const firstNum = prompt("Escribe un número");
    const secondNum = promt("Escribe un segundo número");

    if(firstNum % 2 === 0 && secondNum % 2 === 0 && firstNum % 7 === 0 && secondNum % 7 === 0) {
        alert("Ambos números son pares y multiplos de 7");
    } else if (firstNum % 2 === 0 && secondNum % 2 !== 0 && firstNum % 7 === 0 && secondNum % 7 !== 0) {
        alert("Solo el primer número es par y multiplo de 7");
    } else if (firstNum % 2 !== 0 && secondNum % 2 === 0 && firstNum % 7 !== 0 && secondNum % 7 === 0) {
        alert("Solo el segundo número es par y multiplo de 7");
    } else (firstNum % 2 !== 0 && secondNum % 2 !== 0 && firstNum % 7 !== 0 && secondNum % 7 !== 0); {
        alert("Ningún número es par o multiplo de 7");
    }
} while (iniciar == 1) 


while (iniciar == 2) {
    const frase = prompt("Escribe una frase").toLocaleLowerCase();

    for (let i = 0; i < frase.length;  i++) {
        if (frase[0] == "a" || frase[i].length - 1 == "a");
        alert("Tú frase empieza o acaba por A");
    }
}   
    
 
