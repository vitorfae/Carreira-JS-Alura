const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// consulta, mas nao altera o array original
// Metodo filter para filtrar itens do array, poderia ser para ver quais palavras
// comecam com a letra 'A' no array
const numerosPares = numeros.filter((numero) => {

    return numero % 2 == 0
})

// consulta, mas nao altera o array original, cria outro array
const numerosImpares = numeros.filter((numero) => {

    return numero % 2 == 0
})

// Retorna todos os numeros
console.log(`Todos os numeros: ${numeros}`)

// Retorna apenas os numeros pares
console.log(`Numeros pares: ${numerosPares}`)

// Retorna apenas os numeros impares
console.log(`Numeros impares: ${numerosImpares}`)

// * ---------------------------UTILIZANDO METODO MAP ---------------------------------------

// Map cria uma outra lista semelhante a que ja tem com a funcao que vc deseja que execute

// Nesse caso criamos um callback dentro do map, onde ele dobra o valor da array numeros
// Sendo armazenados na const numerosDobrados
// Percorre e cria outro array

// TODO: EXEMPLO DE MAP COM CALLBACK, EXPLICACAO MELHOR ABAIXO
// const numerosDobrados = numeros.map((numero) =>{
//     return numero * 2
// })

// const numeroDobrado, vai receber uma array com as alteracoes que o estao definidas dentro do metodo map
// ou seja numeros.map(), tem um callback dentro que a funcao calcula o valor que tem dentro do indice * 2
// ou seja, quando chamamos a const o sistema se entende a automaticamente executa o metodo map dentro do array principal
// onde a funcao callback que esta dentro recebe o valor dos indices da array principal e retorna eles *2
// essa e a explicacao 
const numerosDobrados = numeros.map((numero) => numero * 2)

console.log(`Nossa lista mapeada (numeros foram dobrados): ${numerosDobrados}`)