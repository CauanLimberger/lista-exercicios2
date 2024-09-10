// Criando o array de transações
const transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saída', valor: 300 },
    { tipo: 'entrada', valor: 550 },
    { tipo: 'saída', valor: 200 },
  ];
  
  let saldoFinal = 0
  transacoes.forEach((transacao) => {
    if (transacao.tipo === 'entrada') {
      saldoFinal += transacao.valor;
    } else if (transacao.tipo === 'saída') {
      saldoFinal -= transacao.valor;
    }
  })
  
  console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`)
  