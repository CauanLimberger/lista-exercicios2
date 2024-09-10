// Criando o objeto empresa
const empresa = {
    nome: 'Rylloth',
    departamentos: [
      {
        nome: 'Recursos Humanos',
        funcionarios: ['Lucas', 'Cleiton', 'Mariana'],
      },
      {
        nome: 'Desenvolvimento',
        funcionarios: ['Cauan', 'Lúcia', 'Gabrieli'],
      },
    ],
  };
  
  for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`);
    for (const funcionario of departamento.funcionarios) {
      console.log(`${funcionario}`);
    }
  }
  