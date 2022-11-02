/* 

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma (21, 10))

//outra forma

function testeSoma(a, b) {
    return a + b
}

console.log(testeSoma(10, 10))

*/

/* ATIVIDADE 1) crie um programa para cadastrar pessoas (nome, cpf, idade, saldo, confiabilidade de 0 a 10.
    (crie um array Cliente e crie uma função que adiciona cliente) */


    const clientes = []
    const cadastraCliente = (nome, cpf, idade, saldo, confiabilidade) => {
        const cliente = {
            nome: nome,
            cpf: cpf,
            idade: idade,
            saldo: saldo,
            confiabilidade: confiabilidade,
        }
        clientes.push(cliente)
    }

cadastraCliente("duda", 123, 22, 218973, 10)
cadastraCliente("zeca", 888, 1, 10, 8)
cadastraCliente("cris", 726, 29, 1100, 7)
cadastraCliente("vivi", 182, 27, 400, 10)
      console.log(clientes)


// crie uma função que verifica pelo cpd se a pessoa é sua cliente
const verificaCPF = (cpf) => {
    for (let i = 0; i < clientes.lenght; i++) {
        console.log(clientes[i].cpf)
    }
}

verificaCPF(12)
