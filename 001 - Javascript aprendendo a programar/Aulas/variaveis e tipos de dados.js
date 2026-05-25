//formas diferentes de criar variaveis
// 1 - variavel global, so especificando o nome, pode ser alterada em qualquer parte do codigo
// 2 - var   -> maneira antiga
// 3 - let   -> maneira nova de declarar a partir do ecma script
// 4 - const -> imutavel, mas posso apenas adicionar. Valores que nao mudam. O PI tambem e uma variavel constante


//essa variavel armazena a minha idade
var idade = 21
//essa variavel armazena o dia do meu aniversario
const dataAniversario = "17 de agosto"
//esses consoles exibem a mensagem e a minha idade e o vazio e para quebrar a linha(pular)
console.log('minha idade atual: ')
console.log(idade)
console.log('')
// um console.log com virgula para unir os elementos em uma unica linha

console.log('Minha idade atual:', idade)
console.log('Data de aniversario:', dataAniversario)
console.log('')
idade = 22

console.log('Minha idade apos o aniversario:', idade)