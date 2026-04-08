const pessoa = {
    nome : 'Ana',
    idade: 26,
    temCNH: true
}
// Atribuindo sobre =nome ao objeto pessoa
pessoa.sobrenome = 'Paula'
// Exibe nome
console.log(`Nome: ${pessoa.nome}`)
// Exibe sobrenome
console.log(`Sobrenome: ${pessoa.sobrenome}`)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//Criando objeto livro e vinculando atributos ao objeto
const livro = {
    titulo: 'O hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
}
//adicionando a propriedade publicado como verdadeiro, pois esse livro ja foi publicado
livro.publicado = true

//adicionando os idiomas em que o livro foi lançado
livro.idiomas = [
    'ingles', 'Portugues', 'Espanhol'
]

//Exibindo livro para ver idiomas iniciais antes de adicionar
console.log(`Livro antes de adicionar mais idiomas: `, livro)

//Adicionando linguas que foram traduzidas depois
livro.idiomas.push('Mandarim')
livro.idiomas.push('Frances')

//Exibindo livro apos adicionar mais idiomas
console.log(`Livro depois de adicionar mais idiomas: `, livro)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//Exibindo caracteristicas do livro (atributos)
console.log(`Livro antes de remover as páginas: `, livro)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

// Excluindo atributo páginas do objeto livro
delete livro.paginas

// Exibindo caracteristicas de livro após deletar o atributo de numeros de paginas
console.log(`Livro após remover as páginas: `, livro)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//Outras maneiras de acessar acessar as propriedades
console.log('Autor do livro: ',livro['autor'])

// Tentando acessar propriedade que nao existe
console.log('Editora: ',livro['editora']) // Quando não existe retorna undefined

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//Alterando Autor do livro para OBjeto
const autor = {
    nome: 'J R R Tolkien',
    nacionalidade: 'Britanico',
    idade: 98
}

//Exibindo novo objeto -> autor
console.log('Exibindo novo objeto autor:', autor)

//Criando espaçamento entre exibiçao do console.log
console.log('-------------------------------------------')

//Aqui estou passando o novo objeto autor para o atributo/(caracteristica) autor dentro do objeto livro
livro.autor = autor

//Exibindo livro após adicionar o objeto autor no atributo autor do objeto livro, substituino a string com o nome para um objeto completo.
console.log('Verificar autor que foi alterado para um objeto',livro)