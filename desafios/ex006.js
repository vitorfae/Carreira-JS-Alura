//AT-01
const nomes = ['Vitor', 'Lucia', 'Camila', 'Getulio', 'Luis']
for(let i = 0; i < nomes.length; i++){
    console.log(`Indice ${i}: ${nomes[i]}`)
}

console.log('---------------------------------------')

//AT-02
let frutas = ['Morango', 'Uva', 'Abacaxi', 'Pera', 'Abacate']
//Imprime frutas iniciais
console.log('Frutas sem alteracao no array', frutas)
//Adiciona frutas ao final
frutas.push('Banana')
//Imprime frutas apos adicionar a banana ao final da array
console.log('Frutas apos adicionar banana ao final', frutas)
//Removendo a primeira fruta do array usando SHIFT que remove apenas o primeiro item da array
frutas.shift()
//Imprime frutas apos remover morango do inicio da array usando shift
console.log('Frutas apos remover morango do inicio', frutas)

//AT-03
const cidades = ['Campos Novos', 'Ibicare', 'Capinzal']
console.log(`Total de cidades na array cidades: ${cidades.length}`)

//AT-04
let resultado = 0
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < numeros.length; i++){
    resultado += numeros[i]
}
console.log(resultado)

//AT-05
const notas = [7, 8, 6, 8]
let somaNotas = 0
let media = 0
for(let nota of notas){
    somaNotas += nota
}
media = somaNotas / notas.length
if(media >= 7){
    console.log(`Aprovado com media ${media}`)
}else{
    console.log(`Reprovado com media ${media}`)
}

//AT-06
const nomesAt06 = ['Vitor', 'Lucia', 'Camila', 'Getulio', 'Luis']
// Usa calback - nome é igual ao valor do array, se deixar o mouse sobre o froEach ele explica
nomesAt06.forEach((nome) => {
    console.log(`Ola, ${nome}`)
})

//AT-07
let valoresOriginal = [10, 20, 100, 50]
console.log(`Os valores sem descontos sao: ${valoresOriginal}`)
// Map usa callback
const valoresComDesconto = valoresOriginal.map((valor) => valor * 0.9)
console.log(`Os valores com descontos sao: ${valoresComDesconto}`)

//AT-08
//FUNCIONANDO, MAS EXIBE SÓ OS NUMEROS
//const idades = [20, 17, 18, 15, 11, 8, 27]

//idades.filter((idade) =>{
//    if (idade >= 18){
//        console.log(idade)
//    }
//})

// Funcionando, exibe a mensagem pois está passando a idade via return.
//const idades = [20, 17, 18, 15, 11, 8, 27]
//
//const maioresDeIdade = idades.filter((idade) =>{
//    if (idade >= 18){
//        return idade
//    }
//})
//console.log(`As idades maiores ou igual a 18 sao: ${maioresDeIdade}`)

//Funcionando e usando if ternario com return
const idades = [20, 17, 18, 15, 11, 8, 27]
// explicando:
//const maiorDeIdade recebe o array idades com o metodo filter, onde o mesmo recebe idade como parametro de valor, onde é feito
//um if ternario que vai ver as idades maiores ou iguais a 18 anos e retornar se verdadeiro. Nulo é usado para nao retornar nada
const maiorDeIdade = idades.filter((idade) => idade >= 18 ? idade : null)
console.log(`As idades maiores ou igual a 18 sao: ${maiorDeIdade}`)

//AT-09
const precoProdutos = [100, 50, 35, 40, 20]
// Armazenando valor total da compra
let valorSomaProdutos = 0

for(preco of precoProdutos){
    valorSomaProdutos += preco
}
//Aplicando desconto de 20% sobre o valor final da compra
let valorFinalComDesconto = valorSomaProdutos * (80 / 100) // valor toral * percentual de desconto que é 20% -> por isso 80/100 -> que corresponde a 0,8.

//Exibindo na tela o resultado do valor final com desconto
console.log(`O valor final é R$${valorSomaProdutos}, mas com os 20% de desconto fica: R$${valorFinalComDesconto}`)


//AT-10
//Criando tarefas
const tarefas  =  ['Caminhar', 'Lavar a louça', 'Tomar banho', 'Academia', 'Estudar']
//Criando valores booleanos para saber se foram executas as tarefas ou não
const executadas = [0, 1, 1, 0, 0]
// tarefas nao executadas vai receber o array tarefas filtrado com tarefa = nome da tarefa (valor) e o indice do array
// temos um callback onde esta sendo feito um if ternario testando se no mesmo indice mas na outra tabela for igual a 0 ele vai retornar a tarefa
// pois se na outra tabela no mesmo indice estiver 0 a tarefa ainda não foi executada.
const tarefasNaoExecutas = tarefas.filter((tarefa, indice) => executadas[indice] == 0 ? tarefa : null)

console.log(`As tarefas a serem executas são: ${tarefasNaoExecutas}`)