//AT-01
const saudacao = () => console.log('Ola, Seja bem-vindo(a)')
saudacao()

//AT-02
function apresentarPessoa(nome, idade) {
    console.log(`Ola, meu nome e ${nome} e tenho ${idade} anos.`)
}
apresentarPessoa('Vitor', 21)

//AT-03
function calcularIMC(peso, altura){
    return IMC = peso / (altura * altura)
}
console.log(`Seu IMC e: ${calcularIMC(80, 1.77)}`)
//pode usar tambem
let resultadoIMC = calcularIMC(80, 1.77)
console.log(`Seu IMC e: ${resultadoIMC}`)

//AT-04
// TODOS OS CODIGOS ESCRITOS ABAIXO FUNCIONAM
// 1º TESTE
// const verificarAprovacao = (nota) => {
//     if(nota >= 7){
//         console.log('Aprovado')
//     }else{
//         console.log('Reprovado')
//     }
// }
// verificarAprovacao(7)
//-------------------------------------------
//2º TESTE
// const verificarAprovacao = (nota) => {
//     if(nota >= 7){
//         return 'Aprovado'
//     }else{
//         return 'Reprovado'
//     }
// }
// console.log(verificarAprovacao(5))
//-------------------------------------------
//3º TESTE
// const verificarAprovacao = (nota) => (nota >= 7) ? console.log('Aprovado') : console.log('Reprovado') 
// verificarAprovacao(8)
//-------------------------------------------
//4º TESTE
// const verificarAprovacao = (nota) => (nota >= 7) ? 'Aprovado' : 'Reprovado' 
// console.log(verificarAprovacao(10))
//-------------------------------------------
//5º TESTE
function verificarAprovacao(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }  
}
verificarAprovacao(3)

//AT-05
const ehPar = (numero) => (numero % 2 == 0) ? true : false
console.log(ehPar(2))
console.log(ehPar(5))

//AT-06
function soma(numero1, numero2){
    return numero1 + numero2
}
let resultadoSoma = soma(2, 15)
console.log(`A soma dos valores passados e ${resultadoSoma}`)

//AT-07
function calcularTroco(valorCompra, valorPago){
    if (valorPago >= valorCompra){
        return valorPago - valorCompra
    }else{
        return 'Valor insulficiente para compra'
    }
}
//1º valor = preco produto, 2º valor = valor pago
console.log(calcularTroco(120, 150))
console.log(calcularTroco(200, 150))

//AT-08
const arrowSoma = (num1, num2) => num1 + num2
let resultadoArrowSoma = arrowSoma(7, 13)
console.log(resultadoArrowSoma)

//AT-09
function executarAcao(acao){
    acao()
}

executarAcao(function(){
    console.log('Executando acao')
})

//AT-10
function fazerPergunta(pergunta, respostaCorreta) { 

    let respostaUsuario = respostaCorreta; // simulação da resposta 

    if (respostaUsuario === respostaCorreta) { 

        console.log(pergunta, respostaCorreta)
        console.log("Resposta correta!"); 
    
    } else { 
        
        console.log(pergunta, respostaCorreta)
        console.log("Resposta errada!"); 
    
    } 

} 

fazerPergunta("Qual é a capital do Brasil?", "Brasília");