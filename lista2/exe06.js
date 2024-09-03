const prompt = require('prompt-sync')()


const funcionarios = [
    { nome: 'Maria', cargo: "estagiario", salario: 3500 },
    { nome: 'José', cargo: "gerente", salario: 6000 },
    { nome: 'Pedro', cargo: "supervisor", salario: 4500 },
    { nome: 'Ana', cargo: "junior", salario: 3000 }
]

const funcionarioFilter = []

const salarioMinimo = Number(prompt("digite o valor do salario: "))

for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.table(funcionario)
    }
}