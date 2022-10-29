/* OBJETOS = objeto é uma coleção de propriedades, uma propriedade é uma associação entre uma chave e um valor */


// criando o objeto

const pessoa = { nome: "eduarda", idade: 21, cargo: "desenvolvedora", cidade: "vitória"}

// acessando os elementos do objeto:

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cargo)
console.log(pessoa.cidade)

const aluna = {nome: "eduarda", idade: 21, gosta: "de programar"}
const professora = {nome: "Lisandra Cruz", cargo: "professora", signo: "leão"}
const disciplinaLP = ["LP1", "LP2", "LP3"]


console.log(`a aluna ${aluna.nome} tem ${aluna.idade} anos e gosta ${aluna.gosta} e ela tem uma prof chamada ${professora.nome} que 
é do signo de ${professora.signo}`)