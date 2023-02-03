// 1
const a = [1, 45, 90, 23, 14]
console.log(a)

// 2
a.unshift('nome')
console.log(a)

// 3
a.pop()
console.log(a)

// 4
a.push('mateus', 'lucas')
console.log(a)

// 5
a.shift()
console.log(a)

// 6
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
numbers.sort()
console.log(numbers)

// 7
eu = {
    nome:'Mateus',
    idade: 24,
    altura: 1.88
}
console.log(eu)

// 8
eu.corDaCamiseta = 'preta'
console.log(eu)

// 9
delete eu.nome
console.log(eu)

// 10
for (let par in eu)
    console.log(`${par}: ${eu[par]}`)

// 11
class Pessoa {
    constructor(nome, idade, telefone, amigos) {
        this.nome = nome
        this.idade = idade
        this.telefone = telefone
        this.amigos = amigos
    }
}
amigos = ['luiza', 'pedro', 'alberto', 'maria'] // exemplo
p1 = new Pessoa('tiago', 20, 123, amigos)
p2 = new Pessoa('mateus', 24, 123, amigos)
p3 = new Pessoa('lucas', 25, 123, amigos)
p4 = new Pessoa('mariana', 18, 123, amigos)
p5 = new Pessoa('joão', 25, 123, amigos)

cadastro = [p1, p2, p3, p4, p5]
for (pessoa in cadastro)
    console.log(p1.amigos[Math.floor(Math.random()*4)])