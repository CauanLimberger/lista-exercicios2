const alunos = [
    { nome: 'João', nota1: 7.7, nota2: 8.0 },
    { nome: 'Maria', nota1: 6.0, nota2: 7.3 },
    { nome: 'Pedro', nota1: 8.8, nota2: 9.0 }
];

for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome} - Média: ${media.toFixed(2)}`);
}
