// Criando o objeto carrinho
const carrinho = {
    itens: [
      { nome: 'Camiseta', quantidade: 2, precoUnitario: 25 },
      { nome: 'Calça Jeans', quantidade: 1, precoUnitario: 80 },
      { nome: 'Tênis', quantidade: 1, precoUnitario: 120 },
    ]
  }
  
  let valorTotalCarrinho = 0
  carrinho.itens.forEach((item) => {
    const subtotal = item.quantidade * item.precoUnitario
    valorTotalCarrinho += subtotal
  })
  
  console.log(`Valor total do carrinho: R$ ${valorTotalCarrinho.toFixed(2)}`)
  