/* ATIVIDADE 1
armazenen na variavel nome colaboradora o nome maria e em seguida utilize
o console.log para ver o valor */

const nomeColaboradora = "maria"
console.log(nomeColaboradora)

/* ATIVIDADE 2
armazene uma soma entre dois números e mostre no console.log o resultado obtido */

let numero1 = 20
let numero2 = 10
let resultado = (numero1 + numero2)

console.log(resultado)

/* ATIVIDADE 3
armazene separadamente todos os tipos de dados que vocês aprenderam até o momento */

const frase = "frase" //string
const numero = 10    // number

console.log(typeof(frase))
console.log(typeof(numero))

let meuNome = "duda"
let nomeViviane = "viviane"

if(meuNome == "viviane") {
    console.log("meu nome está certo")
} else {
    console.log("meu nome não é esse")
}

const string = "nome string"
const inteiro = 11
const float = 11.3
const booleanoTrue = true
const booleanoFalse = false

/* ATIVIDADE 4
armazene o nome chamado Eduarda em uma variavél e use a notação de colchete para encontrar
o primeiro caractere do nome armazendo. */

const nome = "jessica"
console.log(nome[3]) //aparece o "S" que é a terceira letra
console.log(nome.length) //aparece o numero de letras que a string tem "7"
console.log(nome[nome.length-1]) // aparece a letra "A"

/* ATIVIDADE 5 - IF E ELSE 
    crie duas variáveis e compare os valores:
    1. a variavel x é maior que a variavel y?
     se for VERDADEIRA, retornar a mensagem no console.log(o maior numero é X)
     se NÃO for verdadeira, retornar a mensagem no console.log(o numero maior é Y) */

     let x = 10
     let y = 20

     if(x > y) {
        console.log("o maior numero é x")
     } else {
        console.log("o maior numero é y")
     }