//HOF -> Higher-Order Function === funcao que recebe outr funcao como parametro
//1º
function calcular(numero1, numero2, operacao) {
    return operacao (numero1, numero2)
}


//2º, depende do argumento passado para a primeira funcao
function soma(num1, num2) {
    return num1 + num2
}
//2º, depende do argumento passado para a primeira funcao
function divisao(num1, num2){
    return num1 / num2
}


//--------------------------------------------
//na const resultado - ela chama funcao calcular e passa os atributos
//dentro da funcao calcular ele retorna o resultado da funcao passada como 
//terceiro atributo, soma ou divisao, que ira fazer as operacoes e retornar
//o resultado.
const resultadoSoma = calcular(3, 8, soma) //soma e um callback
console.log(`Resultado da soma: ${resultadoSoma}`)

const resultadoDivisao = calcular(10, 2, divisao)
console.log(`Resultado da divisao: ${resultadoDivisao}`) //divisao e um callback