/*
  Concatenar é o ato de juntar textos 
  e/ou variáveis em uma unica string.
  Primeiro Nome
  Ultimo Nome
  Ano de Nascimento
  Cor preferida
  Hobbie
  Um sentimento
*/

const primeiroNome = "Eduarda";
const ultimoNome = "Brotto";
const nascimentoAno = 2000;
const corPreferida = "amarelo";
const hobbie = "desenhar";
const umSentimento = "felicidade";

const anoAtual = 2022
const minhaIdade = anoAtual - nascimentoAno

// modo tradicional de concatenação
console.log("meu hobbie é " + hobbie + " minha cor favorita é " + corPreferida)

// template string (voce usa crase para escrever a frase e ${} para adicionar a const)
console.log(`eu me chamo ${primeiroNome} e gosto de ${hobbie} no meu tempo livre`)
console.log(`gosto da cor ${corPreferida} e ultimamente o sentimento que mais sinto é ${umSentimento}`)

// realizar concatenação utilizando as consts ja criadas e sem novas consts para informar quantos anos eu tenho.

console.log(`nasci em ${nascimentoAno} e tenho ${2022 - nascimentoAno} anos`)
console.log(minhaIdade)

