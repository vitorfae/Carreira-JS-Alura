const idade = 18

const maiorDeIdade = idade >= 18

const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH //AND

console.log(`Pode dirigir? ${podeDirigir}`)

const podeViajarSozinha = maiorDeIdade || possuiCNH //OR

console.log(`Pode viajar sozinha? ${podeViajarSozinha}`)

const precisaDeAcompanhante = !maiorDeIdade //NEGACAO, verdadeiro vira falso e falso vira verdadeiro
                                            //ou seja, se maior de idade vai ser falso e se for menor de idade verdadeiro para precisa acompanhante
console.log(`Precisa de acompanhante? ${precisaDeAcompanhante}`)

// AND &&
// OR  ||
// NOT  !