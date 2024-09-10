// Criando o array de pedidos
const pedidos = [
    { cliente: 'Ana', produto: 'Camiseta', quantidade: 3 },
    { cliente: 'Cauan', produto: 'Calça Jeans', quantidade: 2 },
    { cliente: 'Ana', produto: 'Tênis', quantidade: 1 }, 
  ]
  
  const quantidadePorCliente = {}
  
  pedidos.forEach((pedido) => {
    const { cliente, quantidade } = pedido
    if (quantidadePorCliente[cliente]) {
      quantidadePorCliente[cliente] += quantidade
    } else {
      quantidadePorCliente[cliente] = quantidade
    }
  })
  
  console.log('Quantidade total de produtos por cliente:')
  for (const cliente in quantidadePorCliente) {
    console.log(`${cliente}: ${quantidadePorCliente[cliente]} unidades`)
  }
  