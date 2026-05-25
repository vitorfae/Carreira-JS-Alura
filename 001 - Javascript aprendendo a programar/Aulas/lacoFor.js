//Estrutura do laco de repeticao for
for(let contador = 1;contador <= 5 ;contador++){
    console.log(`Numero atual: ${contador}`)
}

for(let numero = 0; numero <= 15; numero++){
    if (numero % 2 == 0){
        console.log(`O numero ${numero} e par`)
    }else{
        console.log(`O numero ${numero} e impar`)
    }
}

const palavra = 'calopsita'
//palavra.length indica quantos caracteres uma string possui
//palavra[1] -- pega a letra na posicao indicada, sempre comeca com 0
for(let cont = 0; cont < palavra.length; cont++){
    console.log(palavra[cont])
}