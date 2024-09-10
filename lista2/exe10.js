const vendas = [
    { produto: 'Camiseta', quantidade: 5, valor: 30 },
    { produto: 'Calça Jeans', quantidade: 3, valor: 80 },
    { produto: 'Tênis', quantidade: 2, valor: 120 }
  ]
  
  let valorTotalVendas = 0;
  vendas.forEach((venda) => {
    valorTotalVendas += venda.quantidade * venda.valor
  })
  
  console.log(`Valor total das vendas: R$ ${valorTotalVendas.toFixed(2)}`)
  