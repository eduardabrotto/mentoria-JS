/* voce vai abrir um restaurante, crie 4 pratos para seu restaurante
ele deve ser criado no formato de objeto contendo os seguintes dados
nome, descriçao, quantidade em gramas, notas do chef
e em seguida adicione esses pratos num array chamado cardapio */



/*
const prato1 = {
    nome: "risoto de cogu",
    descricao: "risoto vegano delicia",
    quantidade: 400,
    notaDoChef: 10,
}

const prato2 = {
    nome: "sopa de abobora",
    descricao: "sopinha leve",
    quantidade: 800,
    notaDoChef: 9,
}

const prato3 = {
    nome: "arroz com tofu",
    descricao: "prato para as veggy",
    quantidade: 400,
    notaDoChef: 8,
}

const prato4 = {
    nome: "feijoada",
    descricao: "tempero brasileiro",
    quantidade: 1000,
    notaDoChef: 10,
}

const prato5 = {
    nome: "bolinho de chuva",
    descricao: "gostinho de infancia",
    quantidade: 10,
    notaDoChef: 6,
}

const cardapio = [prato1, prato2, prato3, prato4, prato5]
*/





// Usem o for ou o while para exibir de uma maneira agradável 
// o seu cardápio para a sua cliente


/* console.log("bem vindo ao restaurante tudo-de-bom")

for(let i = 0; i < cardapio.length; i++) {

    console.log(`prato:  ${cardapio[i].nome}`)
} */



function adicionarPrato(nome, descricao, quantidade,notaDoChef) {
    const prato = {
        nome: nome, 
        descricao: descricao,
        quantidade: quantidade,
        notaDoChef: notaDoChef,
    }
    console.log(prato)
}
adicionarPrato("bolinho de aipim", "gostoso demais", 500, 10)

adicionarPrato("feijoada","tempero brasileiro", 1000, 10)

adicionarPrato("bolinho de chuva", "gostinho de infancia", 10, 9)   
