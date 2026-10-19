// 1 e 2: Conexao, instrucoes, comentario e calculo simples
// Primeiro script
console.log("Tentativa de um primeiro script");
console.log("Projeto To-Do");
console.log(20 + 50);

// Ex 3: const e let (com alteracao de valor)
const aluno = "Mariana";
let tarefas = 3;
tarefas = 3;
console.log(tarefas);

// 4: var
var tentativajs = "antigo vas para tentativa";
console.log(tentativajs);

// 5: Tipos de dados (string, number, boolean, null)
const item = "Estudar JavaScript";
const qtd = 1;
const ativo = true;
const obs = null;
console.log(item, qtd, ativo, obs);

// 6: Operadores (+, -, *, /, comparacao)
const soma = 6 + 3;
const sub = 100 - 62;
const mult = 5 * 6;
const div = 10 / 2;
const comp = tarefas >= 2;
console.log(soma, sub, mult, div, comp);

// 7: Template literal
console.log(`O aluno ${aluno} tem ${tarefas} tarefas no item ${item}.`);

// 8: Decisao com if/else
if (tarefas === 0) {
  console.log("Sem tarefas pendentes");
} else {
  console.log("Existem tarefas pendentes");
}

// 10: Desafio integrador (const/let, 2 calculos, template literal, if/else, console)
const total = 10;
const feito = 4;
const falta = total - feito;             // Calculo 1
const porcentual = (feito / total) * 100;       // Calculo 2

const resumo = `Progresso: ${porcentual}% concluido. Faltam ${falta} tarefas.`;
console.log(resumo);

if (porcentual >= 50) {
  console.log("Meta adiantada");
} else {
  console.log("Meta no inicio");
}