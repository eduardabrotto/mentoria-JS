/*  estrutura condicional é usada para tratar casos em que a condição testada
    é FALSA, assim caso a condição IF não seja atendida teremos ELSE para que outra coisa seja feita
    Dessa forma sempre que tivermos um ELSE ou IF podemos dizer que o codigo vai executar algo */

 /* ATIVIDADE
    1. declare um valor numérico
    2. vamos analisar se esse numero é ou não maior que 10
        a) se for, vamos escrever na tela a frase "esse numero é maior que 10"
        b) se nao for, vamos escrever na tela a frase "esse numero é menor que 10" */

    
    let numero = 4

    if(numero > 10) {
        console.log("esse numero é maior que 10")
    } else {
        console.log("esse numero é menor que 10")
    }

    /*  estrutura condicional aninhada: usada quando precisamos testar mais de uma condição para o mesmo valor de entrada
        ou seja fazer varias verificações com diferentes condições, fazemos isso utilizando ELSE IF. */

/* ATIVIDADE ELSE IF:
    Crie um programa que receba 2 numeros calcule a soma deles e em seguida verifique se essa soma é maior que 100 
    Caso seja MAIOR QUE 100, retornar "esse numero é maior que 100" 
    Caso seja IGUAL A 100, retornar "esse numero é igual que 100" 
    Caso seja MENOR QUE 100, retornar "esse numero é menor que 100" */

    let a = 50
    let b = 55
    let x = a + b

    if(x > 100) {
        console.log("esse numero é maior que 100")
    } 
    else if (x == 100) {
        console.log("esse numero é igual a 100")
    }
    else {
        console.log("esse numero é menor que 100")
    }
    console.log(x)

    
