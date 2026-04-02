const nome = ''

//PARA COMPARAR SE TEM ALGO DENTRO DA STRING
// if (nome == '') {
    
// }

//MELHOR MANEIRA - interpreta como false por conta de nome estar vazio 
if (nome){
    console.log(`Ola, ${nome}`)
}else{
    console.log(`Ainda nao sei o seu nome`)
}

//Se o valor for nulo nao vai exibir mensagem nenhuma
const idade = null

if (idade != null && idade >= 18){
    console.log(`Maior de idade`)
}else if (idade != null && idade >=0 && idade < 18){
    console.log(`menor de idade`)
}

console.log(`--------------------------------------------------------`)

// maneira mais facil
const idade1 = 21

if (idade1 != null){
    if (idade1 >= 18){
    console.log(`Maior de idade`)
    }else{
    console.log(`menor de idade`)
    }
}