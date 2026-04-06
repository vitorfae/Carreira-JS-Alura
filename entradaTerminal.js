//usado para entrada de usuarios para interagir com o terminal
//REQUIRE -> recebe o parametro do nome da biblioteca que queremos carregar (reqire = importa uma funcionalidade) 
//o const armazena a biblioteca readline
//readline = ler da linha
const readline = require('readline')

// estamos dizendo que o leitor cai usar o processo do terminal.
// Dizendo de onde vem a entrada e para onde vai a saida, ou seja,
//os dois no terminal. 
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Faz uma pergunta
leitor.question('Qual e o seu nome? ', (nome) => {
    console.log(`Ola, ${nome}`)
    console.log(`Boas vindas ao nosso sistema!`)


    leitor.question('Qual e a sua idade? ', (idade) => {
        if (idade >= 18) {
           console.log('Uau! voce ja pode tirar a sua CNH') 
        }else{
            console.log('Voce ainda nao pode tirar a sua CNH')
        }
        leitor.close()
    })
    //fechando o leitor, se tiver na primeira apenas uma question 
    //leitor.close()
})