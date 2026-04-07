const frutas = ['Uva', 'Banana', 'Kiwi', 'Maca', 'Morango']

// Exibindo o array
console.log(frutas)

// Exibindo a primeira fruta
console.log(`Primeira fruta: ${frutas[0]}`)

// Exibindo a primeira fruta
console.log(`Primeira fruta: ${frutas[4]}`)

// Contando quantas frutas tem
console.log(`Total de fruta: ${frutas.length}`)

//Adicionando frutas ao final do array, usando o metodo PUSH
frutas.push('Melancia')

// Total de frutas apos adicionar melancia
console.log(`Total de fruta apos adicionar melancia: ${frutas.length}`)

// Exibindo o array apos adicionar melancia
console.log(frutas)

// exibindo ultima fruta com length
console.log(`Ultima fruta com length: ${frutas[frutas.length - 1]}`)

// Removendo itens do array - frutas.splice(1º posicao, 2º quantos itens quer remover)
frutas.splice(2, 1) //removendo o kiwi

// Exibindo apos excluir o kiwi
console.log('Depois de remover kiwi: ', frutas)

// Removendo primeiro item da array usando shift
frutas.shift() //shift remove apenas o primeiro item do indice

// Exibindo apos excluir o uva que e o primeiro elemento da array
console.log('Depois de remover o primeiro item da array (Uva): ', frutas)