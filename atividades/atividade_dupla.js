/* Crie um programa que leia a idade do nadador e o classifique em uma das categorias:
"Infantil A": 5 a 7 anos
"Infantil B": 8 a 11 anos
"Juvenil A": 12 a 13 anos
"Juvenil B": 14 a 17 anos
"Adulto": maiores de 18 anos

Caso a pessoa não tenha idade para nenhuma das categorias
o programa deve retornar "Você ainda não pode competir!" */

let idade = 15

if (idade >= 5 && idade <= 7) {
    console.log("infantil A")
} 
    else if (idade >=  8 && idade <= 11) {
        console.log("infantil B")
} 
    else if (idade >=  12 && idade <= 13) {
        console.log("juvenil A")
} 
    else if (idade >=  14 && idade <= 17) {
        console.log("juvenil B")
} 
    else if (idade >=  18) {
        console.log("adultos") 
} 
    else {
     console.log("desculpa, ainda nao pode competir")
}