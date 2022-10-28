/* TABELA DA VEDADE 
TRUE && TRUE = TRUE
TRUE && FALSE = FALSE
FALSE && TRUE = FALSE
FALSE && FALSE = FALSE */

const condicao1 = 5 > 10 // true
const condicao2 = 5 > 2 // true

if (condicao1 && condicao2) {
    console.log("deu certo!!!")
} else {
    console.log("deu ruim")
} 

const nome1 = "duda"
const idade1 = 21
const entregouDocumentos1 = true

console.log("duda " + (idade1 > 18 && entregouDocumentos1)) // true

const nome2 = "viviane"
const idade2 = 27
const entregouDocumentos2 = false

console.log("viviane " + (idade2 > 18 && entregouDocumentos2)) // false

const nome3 = "cris"
const idade3 = 17
const entregouDocumentos3 = true

console.log("cris " + (idade3 > 18 && entregouDocumentos3)) // false