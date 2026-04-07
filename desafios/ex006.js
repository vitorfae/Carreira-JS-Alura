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
// Usa calback
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