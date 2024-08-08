//Verificar se a idade do aluno é maior que 7 anos.

// Para alunos entre 8 e 12: infantil
// Para alunos entre 13 e 17: adolescente
// Para alunos maiores de 18: adulto

let idadeAluno = 13;

if (idadeAluno > 7 && idadeAluno < 13) {
    console.log("Aluno pode ser matriculado e está na categoria INFANTIL!");
} else if (idadeAluno > 12 && idadeAluno < 18) {
    console.log("Aluno pode ser matriculado e está na categoria ADOLESCENTE!")
} else if (idadeAluno > 17) {
    console.log("Aluno pode ser matriculado e está na categoria ADULTO!")
} else {
    console.log("Aluno não pode se matricular!");
}

