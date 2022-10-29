/* ARRAYS/LISTAS: os arrays são usados para armazenar vários valores em uma única variavel. */
// crie um array de carros!

    const marcaCarros = ["ford", "hyundai", "fiat", "bmw", "etios"]
    console.log(marcaCarros[1]) // exibe o nome hyundai

/* o .lenght apos o nome do array nos da a quantidade de elementos dentro do array */

    console.log(marcaCarros.length) 

/* adicionar elemento no final do array utilizar o PUSH(). */

    marcaCarros.push("fiesta")
    console.log(marcaCarros)

/* adicionar um elemento no inicio do array utilizar o UNSHIFT(). */

    marcaCarros.unshift("gol bolinha")
    console.log(marcaCarros)

/* adicionar um elemento em uma posição especifica utilizar o metedo SPLICE() */

    marcaCarros.splice(2, 3, "VW") /* (primeira posição é a partir da onde q ele vai adicionar (colocar na posição 2) 
                                       segunda posição é quantos elementos a serem excluidos(no caso 3)) */
      
    console.log(marcaCarros) 

/* adicionar um elemento na posição final do array usando .lenght() */

    marcaCarros[marcaCarros.length] = "gol quadrado"
    console.log(marcaCarros)

/* removendo o elemento da ultima posição do array usando .pop() */

    marcaCarros.pop()
    console.log(marcaCarros)