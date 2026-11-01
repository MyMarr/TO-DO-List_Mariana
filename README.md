- Nome do Repositório:TO-DO List_Mariana
- Nome do Projeto: TO-DO List_Mariana
- Tema: TO-DO List de atividades 

---
**Descrição do Projeto**

O projeto consiste em uma interface web estática para acompanhamento de tarefas de um estudante, integrada a rotinas em JavaScript que executam validações, cálculos e exibições no Console do navegador. 

A aplicação foi estruturada do modo mais leve e direto possível, utilizando **Bootstrap 5.3.8 via CDN** para estilização responsiva sem a necessidade de arquivos CSS adicionais, e **JavaScript moderno (ES6)** para o processamento dos dados.

---

**Explicação da Interface Criada**

A interface foi projetada com um layout centralizado, utilizando uma paleta de cores inspirada na personagem Mitsuri Kanroji de Kimetsu no Yaiba(com tons de roxo escuro, rosa e verde claro). A ideia de uma TO-DO List com esse tema foi por causa dos tons bonitos e calmos da personagem.


**Componentes Bootstrap:**
Para a construção e estilização da interface sem CSS próprio, foram utilizadas as seguintes classes e componentes utilitários do Bootstrap 5 (versão JS 5.3.8 com CSS 5.3.8):

`Site`: https://getbootstrap.com/docs/5.3/getting-started/introduction/
`modelos`: `CSS`--	https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css
           `JS` --	https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js

- **`container`**: Define um contêiner com largura máxima responsiva para centralizar e alinhar o conteúdo da página.

- **`row & col (col-md-4, col-sm-10, col-md-8)`**: Sistema de Grid responsivo com espaçamento g-4 que organiza o layout em colunas ajustáveis.

- **`navbar`**: Barra de navegação fixa no topo da aplicação.

- **`card`**: Blocos visuais com sombra suave (`shadow-sm`), bordas arredondadas (`rounded-3`) e altura total (`h-100`) para conter as informações de cada tarefa.

- **`badge`**: Rótulos coloridos com cantos arredondados para indicar o estado atual das tarefas (Pendente, Feito e A fazer).

- **`btn`**: Botões estilizados (`btn-sm, w-100`) para a ação de visualização dos cards.

- **`alert`**: Caixa de aviso informativa estilizada (`rounded-3, shadow-sm`) com borda nula (`b order-0`) sobre o Console.

- **`min-vh-100 / d-flex / flex-column`**: Utilitários de Flexbox aplicados no body para garantir que o contêiner ocupe a altura total da tela e mantenha o footer no final da página.

- **`footer`**: Rodapé estrutural posicionado automaticamente na base da página com a classe mt-auto.

---

**Componentes JavaScript:**

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