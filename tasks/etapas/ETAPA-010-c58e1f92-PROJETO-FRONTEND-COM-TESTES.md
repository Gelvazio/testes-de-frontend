## Etapa 010-c58e1f92 — PROJ: projeto-frontend-com-testes (mescla dos projetos dos alunos)

**Tarefa:** PROJ · **Pedido em:** 2026-10-15 10:40 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "com base nos projetos dos alunos, crie 1 arquivo de nome SUGESTAO-PROJETO, e nele
tente mesclar os projetos dos alunos, num projeto so, de nome projeto-frontend-com-testes,
coloque esta pasta em aulas, e crie no principal, 1 card acessando ela, onde deve estar 1
projeto completo que mescla os projetos dos alunos"
**Objetivo:** um projeto único em `aulas/projeto-frontend-com-testes/` que reúne as ideias dos
projetos dos alunos, com a lógica em funções puras (prontas para a aula de Vitest), mais o
documento `aulas/SUGESTAO-PROJETO.md` e um card na vitrine `projetos-alunos/index.html`.

### Escopo

- **Entra:** documento `SUGESTAO-PROJETO.md`; projeto HTML/CSS/JS sem build (abre por servidor
  estático), com 4 módulos mesclados: Calculadora de IMC (carlos, versão correta), Lâmpada
  (carlos/marcosxz), Modo escuro (carlos) e Loja com carrinho (marcosvpaz); card na vitrine.
- **Não entra:** arquivos de teste (regra do projeto: só em correção de bug); instalar Vitest;
  copiar código com erros dos alunos (usa-se a versão correta); alterar os repositórios baixados.

### Riscos

| Risco | Plano B |
|---|---|
| "com testes" sugere ter arquivos `*.test.js` | Projeto já nasce com lógica pura exportada e `README` dizendo onde escrever os testes na aula; testes ficam para o professor/alunos |
| Misturar estilos dos 4 projetos fica desigual | Um único CSS com tokens (tema claro/escuro) |
| Imagens da loja do aluno não existem | Produtos com emoji/cor, sem imagens externas |

### Decisões

| Data | Decisão | Quem |
|---|---|---|
| 2026-10-15 | Plano aprovado ("Sim, aprovado... sem arquivos de teste") às 10:50 | Gelvazio |

### PROJ.1 — Escrever `aulas/SUGESTAO-PROJETO.md`

**Próximo passo:** aguardando aprovação.

- **Nível:** LEVE — 1 documento.
- **Descrição:** mapa "aluno → módulo do projeto", o que foi aproveitado e o que foi corrigido.
- **Entrega:** a preencher · **Verificação:** a preencher

### PROJ.2 — Criar `aulas/projeto-frontend-com-testes/`

**Próximo passo:** aguardando aprovação.

- **Nível:** MEDIO — vários arquivos pequenos, sem banco nem segurança.
- **Descrição:** `index.html`, `css/estilo.css`, `js/imc.js`, `js/lampada.js`, `js/tema.js`,
  `js/carrinho.js`, `js/dados-produtos.js`, `js/app.js` (liga o DOM), `README.md`. Funções puras
  exportadas (ES modules) para a Aula 03.
- **Critérios de Aceitação:** os 4 módulos funcionam na mesma página; lógica separada do DOM;
  nenhum arquivo de teste; `node --check` em todos os JS.
- **Entrega:** a preencher · **Verificação:** a preencher

### PROJ.3 — Card na vitrine `projetos-alunos/index.html`

**Próximo passo:** aguardando PROJ.2.

- **Nível:** LEVE — reaproveita o card de sugestão.
- **Entrega:** a preencher · **Verificação:** a preencher

### PROJ.4 — Aceite do usuário

**Próximo passo:** 👀 o usuário confere o projeto no navegador.
