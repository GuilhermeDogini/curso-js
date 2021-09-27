// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
//delete produto.preco
//delete produto['marca do produto']//é possivel deletar apartir do codigo 'delete'
console.log(produto) 

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 321
        }
    },
    condutor: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],

}

carro.proprietario.endereco,numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. andre luiz'
console.log(carro)