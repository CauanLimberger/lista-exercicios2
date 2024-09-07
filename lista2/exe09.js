const clientes = [
    { nome: 'Cauan', idade: 19, cidade: 'Porto Alegre' },
    { nome: 'Carlos', idade: 42, cidade: 'Rio de Janeiro' },
    { nome: 'Mariana', idade: 35, cidade: 'Belo Horizonte' },
  ];
  
  let clientesMaisDe30Anos = 0
  clientes.forEach((cliente) => {
    if (cliente.idade > 30) {
      clientesMaisDe30Anos++
    }
  })
  
  console.log(`Total de clientes com mais de 30 anos: ${clientesMaisDe30Anos}`)
  