// Criando o array de estoque
const estoque = [
    { produto: 'Camiseta', quantidade: 10, minimo: 4 },
    { produto: 'Calça Jeans', quantidade: 3, minimo: 4 },
    { produto: 'Tênis', quantidade: 2, minimo: 4 }
  ]
  
  estoque.forEach((item) => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2
    }
  })
  
  console.log('Estoque atualizado:')
  estoque.forEach((item) => {
    console.log(`${item.produto}: ${item.quantidade} unidades`)
  })
  