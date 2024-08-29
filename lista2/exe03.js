const prompt = require('prompt-sync')()


function filtrarPropriedades(objeto, valorMinimo) {
    const novoObjeto = {};

    for (const propriedade in objeto) {
        if (typeof objeto[propriedade] === 'number' && objeto[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }

    return novoObjeto;
}

const produto = {
    nome: 'Celular',
    preco: 1600,
    estoque: 1000,
    marca: 'Samsung',
    categoria: 'Eletrônicos',
    cor: 'Preto',
    peso: 0.3
};

const valorMinimo = Number(prompt("digite o valor minimo: "))
const novoProduto = filtrarPropriedades(produto, valorMinimo);

console.log(novoProduto);

