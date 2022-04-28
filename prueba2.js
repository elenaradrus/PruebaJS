//2. Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta.

const frase_2 = prompt("Escribe una frase");
let count = 0;

for (let i = 0; i < frase_2.length; i++) {
  if (frase_2[i] === " ") {
    count ++
  } 
}
if (count >= 1) {
  alert("Tu frase tiene " + (count + 1) + " palabras"); 
} 
  


