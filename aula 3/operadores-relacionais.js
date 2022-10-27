/* 

operadores relacionais são utilizados para comparar valores, o resultado de uma expressão relacional é um 
valor booleano (true or false)
    == igual
    != diferente
    < menor
    > maior
    <= menor igual
    >= maior igual

*/

let x = 3
let y = 10

console.log(x == y)

console.log(x === y) //esse operador "===" diferencia number de string, o resultado vai ser true porque os dois são numbers.

/* atividade: faça um programa que armazena duas frases e compare se elas são iguais */

let frase1 = 22 
let frase2 = 20
let idadeAtual = 21

console.log(`eu tenho ${idadeAtual} minha idade ano que vem vai ser maior que 22? ${frase2 > frase1}`)
console.log(`minha idade é maior que 25 anos? ${idadeAtual > 25}`)

/* CONDICIONAIS

    SE(if)
    SENAO(else)
*/

let chuva = "choveu"
let sol = "sol"

if(sol == "choveu") {
    console.log("hoje choveu demais!")
   } else {
        console.log("hoje fez sol")
   }

   /* if(condição) {
        resultado dessa condição
   } */

//exercicio: criar 3 frases utilizando IF ELSE E ELSE IF//

let lula = "ganhou"
let jair = "perdeu"
let empate = "outro turno"

if(jair == "outro turno") {
    console.log("lula ganhou OBA")
} else if (empate = "outro turno") {
    console.log("terceiro turno meu deus")
} else {
    console.log("lula perdeu socorro")
} 