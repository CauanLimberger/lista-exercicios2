const produtos = [
    {nome: 'camisa', preco: 150, desconto: 10},
    {nome: 'calça', preco: 250, desconto: 10},
    {nome: 'casaco', preco: 450, desconto: 10},
]


produtos.forEach((produtos) => {
    const precoDesconto = produtos.preco * (1- produtos.desconto / 100)
    console.log(`${produtos.nome}: R$ ${precoDesconto.toFixed(2)}`)
    
})