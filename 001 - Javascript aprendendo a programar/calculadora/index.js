//const readline = require('readline')
// Em arquivos de módulos deve ser usado o import da biblioteca necessária
import {createInterface} from 'readline'
import {divisao, multiplicacao, soma, subtracao} from './operacoesMatematicas.js'

//const leitor = readline.createInterface({
const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

//Questions
leitor.question('Digite o primeiro valor número:', (numero1) => {
    leitor.question('\nDigite a operação:\n + -> Soma\n - -> Subtração\n * -> Multiplicação\n / -> Divisão\n =>', (operacao) => {
        leitor.question('Digite o segundo número:', (numero2) =>{

            //Condições
            const num1 = Number(numero1)
            const num2 = Number(numero2)

            let resultado = null

            if (operacao == '+'){            // precisa configurar o import parecido com o do readline
                resultado = soma(num1, num2) //configurar export função no outro arquivo de operacoes matematicas
            }else if (operacao == '-'){      //Senão não funciona, pois esse arquivo importa e o outro precisa exportar
                resultado = subtracao(num1, num2) //configurar export função no outro arquivo de operacoes matematicas
            }else if(operacao == '*'){
                resultado = multiplicacao(num1, num2)
            }else if(operacao == '/'){
                resultado = divisao(num1, num2)
            }else{                                //Senão não funciona, pois esse arquivo importa e o outro precisa exportar
                console.log('\nOperação inválida')
            }

            if (resultado != null){
                console.log('\nO resultado da operação é:', resultado)
            }


            leitor.close()
        })

    })

})