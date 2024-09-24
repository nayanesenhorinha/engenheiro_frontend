// Define a classe Aluno
class Aluno {
    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
};

// Cria um array de alunos
const alunos = [
    new Aluno('Lúcia', 10),
    new Aluno('Maria', 8),
    new Aluno('Laís', 8),
    new Aluno('Bruna', 5),
    new Aluno('Laura', 4)
];

// Função para checar alunos aprovados
function checarAlunos(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
};

// Chama a função checarAlunos com o array de alunos e exibe o resultado no console
const alunosAprovados = checarAlunos(alunos);
console.log(alunosAprovados);