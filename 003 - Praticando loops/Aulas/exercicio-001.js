//FOR

//Gerar numeros aleatorios de 1 a 50
//Interromper o laco, caso o numero seja 15.
//Interromper depois de 30 tentativas e contar a quantidade de tentativas.

//const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)

for(let contador = 1; contador <= 30; contador++){
    //Math.floor, desconsidera depois da virgula, arredonda para baixo, ou para o numero antes da virgula
    //Math.random gera numeros aleatorios, como esta multiplicado por 50 - 1 + 1 ele vai trazer numeros entre 0 e 49
    // mas como tem o +1 apos o calculo ele vai trazer numeros de 1 a 50
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
    if (numero === 15){
        console.log(`${numero} em ${contador} tentativas`);
        break;
    }
}