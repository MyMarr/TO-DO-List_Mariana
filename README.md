- Nome do Repositório:TO-DO List_Mariana
- Nome do Projeto: TO-DO List_Mariana
- Tema: TO-DO List de atividades 

---
Descrição do Projeto

O projeto consiste em uma interface web estática para acompanhamento de tarefas de um estudante, integrada a rotinas em JavaScript que executam validações, cálculos e exibições no Console do navegador. 

A aplicação foi estruturada do modo mais leve e direto possível, utilizando **Bootstrap 5.3.3 via CDN** para estilização responsiva sem a necessidade de arquivos CSS adicionais, e **JavaScript moderno (ES6)** para o processamento dos dados.

---

Explicação da Interface Criada

A interface foi projetada com um layout centralizado, utilizando uma paleta de cores inspirada na personagem Mitsuri Kanroji (com tons de roxo escuro, rosa e verde claro) de Kimetsu no Yaiba. A ideia de uma TO-DO List com esse tema foi por uma espontaneidade, uma ideia do nada com um tema do nada (acho que parte foi por conta dela ser organizada e ter uma paleta de coras fofinha e calma)


Componentes Bootstrap Utilizados

Para a construção e estilização da interface sem CSS próprio, foram utilizadas as seguintes classes e componentes utilitários do **Bootstrap 5.3.3**:

- **`container`:** Define um contêiner com largura máxima responsiva para centralizar e alinhar os elementos da página.
- **`row` & `col` (`col-md-4`, `col-sm-10`):** Sistema de *Grid* responsivo que organiza o layout em colunas ajustáveis conforme o tamanho da tela.
- **`navbar`:** Barra de navegação do topo da aplicação.
- **`card`:** Blocos visuais arredondados com sombra suave (`shadow-sm`) que contêm as informações de cada tarefa.
- **`badge`:** Rótulos coloridos para categorizar o estado atual das tarefas (*Pendente*, *Feito* e *A fazer*).
- **`btn` / `button`:** Botões estilizados no rodapé dos cards para simular uma ação de "Ver".
- **`alert`:** Caixa de destaque informativa sobre a utilização do Console.
- **`footer`:** Rodapé estrutural da página.

---

Conceitos de JavaScript Aplicados

1. Diferença entre `let`, `const` e `var`

- **`const` (Constante):** Utilizada para declarar variáveis cujo valor **não pode ser alterado** por reatribuição ao longo da execução do programa. Garante imutabilidade e previne modificações acidentais em dados fixos (ex: `const aluno = "Aluno";`).
- **`let`:** Utilizada para declarar variáveis de **escopo de bloco** cujo valor pode ser modificado ao longo do tempo (ex: `let tarefas = 3; tarefas = 4;`).
- **`var`:** Forma histórica e antiga de declaração de variáveis no JavaScript. Possui escopo global ou de função e sofre do efeito de *hoisting* (elevação), o que pode causar comportamentos imprevisíveis no código. Por boas práticas modernas, prefere-se o uso exclusivo de `let` e `const`.

2. Tipos de Dados Utilizados

No arquivo `script.js`, foram manipulados os quatro tipos de dados primitivos solicitados:

- **`String`:** Sequência de caracteres para textos (ex: `"Estudar JS"`).
- **`Number`:** Valores numéricos para contagens e cálculos (ex: `1`, `10`, `2.5`).
- **`Boolean`:** Valores lógicos que representam verdadeiro (`true`) ou falso (`false`) para controle de estado.
- **`Null`:** Representação explícita de ausência intencional de valor ou objeto (ex: `const obs = null;`).

3. Explicação da Condição Criada (`if` / `else`)

No projeto, foram criadas estruturas condicionais para tomada de decisão com base nos dados do painel:

```javascript
if (tarefas === 0) {
  console.log("Sem tarefas pendentes");
} else {
  console.log("Existem tarefas pendentes");
}