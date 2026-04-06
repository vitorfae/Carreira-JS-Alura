const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem-vindo(a) ao Quiz de JavaScript')
console.log('Responda com a letra correta: A, B ou C\n')

let acertos = 0

rl.question('1) Qual palavra usamos para criar uma funcao?\n(A) define\n(B) function\n(C) create\n> ', (resposta1) => {
    if (resposta1 == 'b'){
        acertos++
    }
    rl.question('2) Qual dessas e uma estrutura de repeticao?\n(A) loopar()\n(B) repeat\n(C) for\n> ', (resposta2) => {
        if (resposta2 == 'c'){
            acertos++
        }
        rl.question('3) Qual valor e considerado falsy em JavaScript?\n(A) 1\n(B) 0\n(C) "texto"\n> ', (resposta3) => {
            if (resposta3 == 'b'){
            acertos++
            }
            //Acredito que daria para usar switch case aqui tambem.
            if (acertos == 3){
                console.log(`Parabens! voce acertou todas as respostas!`)
            }else if(acertos == 2){
                console.log('Muito bom!, voce acertou 2 respostas. Continue assim!')
            }else if(acertos == 1){
                console.log('Muito bom! voce acertou 1 resposta. Continue melhorando!')
            }else{
                console.log('Voce nao acertou nenhuma, continue praticando!')
            }
            rl.close();
        });
    });  
});