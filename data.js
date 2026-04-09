 // Data seguindo a ISO8601
const agora = new Date()

//exibindo a data
console.log('Exibe a data conforme a ISO8601:', agora)

//usando o metodo getFullYear para pegar apenas o ano da const agora que armazena a data e hora atual
console.log('Ano: ', agora.getFullYear())

//Usando o metodo getMonth para pegar apenas o mes da const agora que armazena a data e hora atual
console.log('Mês de 0 a 11, ou seja, 0 = Janeiro e 11 = dezembro:', agora.getMonth())

//Usando o metodo getDate para pegar apenas o dia da const agora que armazena a data e hora atual
console.log('Dia do Mês:', agora.getDate())

//Usando o metodo gethours para pegar apenas a hora da const agora que armazena a data e hora atual
console.log('hora atual:', agora.getHours())

//Usando o metodo getMinutes para pegar apenas os minutos da const agora que armazena a data e hora atual
console.log('Minuto atual:', agora.getMinutes())


//Pegando data especifica
//funciona as vezes. O ideal é usar o texto todo. Pois muda conforme local 
const nascimento = new Date(2004, 8, 17)
//Exibindo data de nascimento - com ajustes simples, mas errado
console.log('Data de nascimento diferente por conta de fusos horarios: ', nascimento)


//Definindo data de maneira correta
const nascimentoCorreto = new Date('2004-08-17T00:00:00.000Z')
//Exibindo data de nascimento completa e correta
console.log('Data de nascimento correta, pois usei todo o texto da ISO8601',nascimentoCorreto)


//Formatando data de nascimento
console.log('Data formatada (BR):', nascimentoCorreto.toLocaleDateString('pt-BR'))
console.log('Data formatada (USA):', nascimentoCorreto.toLocaleDateString('en-US'))