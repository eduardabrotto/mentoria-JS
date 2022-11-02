/* FOR (PARA) - ESTRUTURA DE REPETIÇÃO

for(let i = 0; i <= 10; i++) {
    console.log(`i = ${i}`)
}

*/


//anatomia do FOR: contador; comparador; incrementador (++)

/*exercicio com string: mostre todos os nomes
 e mantenha apenas a letra inicial maiscula. */

const alunas = ["jessica", "Bruna", "eduarda", "Leide", "luiza"]

    i = alunas.length // 4 posições

    for(let i = 0; i < alunas.length; i++) {
        
        const tratarNome = alunas[i].charAt(0).toUpperCase() +  alunas[i].substring(1) //aq eu tratei a PRIMEIRA LETRA de cada string deixando maiuscula e tratei as demais letras deixando elas sem a primeira letra a partir da posição 1 (substring (1))
                                                                                       

        console.log(tratarNome) 
        
        
    }

   //tentando novamente sozinha

   const frutas = ["pera", "Maça", "abacaxi", "Melancia"] // isso é um array ou lista "const xxx [ ]""

   for(let i = 0; i < frutas.length; i++) {

    const nomeCerto = frutas[i].charAt(0).toUpperCase() + frutas[i].substring(1)
    console.log(nomeCerto)

   }

//Mostrar todos os itens da lista de frutas com a estrutura de repetição de laço FOR.

const listaFrutas = [
    "Banana",
    "Maça",
    "Manga",
    "Pera",
    "Abacaxi",
    "Banana",
    "Jabuticaba",
    "Ameixa",
]

for(let i = 0; i < listaFrutas.length; i++) {
    
    console.log(listaFrutas[i])
    
}