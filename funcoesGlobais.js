function saudacao() { //Nome e um PARAMETRO da funcao saudacao
    console.log(`E ai, beleza?`)
}

setTimeout(saudacao, 2000) // milissegundos, ou seja, 2000 == 2 segundos

// testando contador
let contador = 0

//Ordem dos argumentos
//1º o que quer fazer, 2º de quanto em quanto tempo
const id = setInterval(() => {
    contador++
    console.log(`Tempo decorrido (em segundos): ${contador}`)
    //limpar intervalo = parar de executar.
    if (contador == 10){
        clearInterval(id)
    }    
}, 1000)