## Etapa 008-f26c8d03 — CARD: card da Aula 03 na vitrine dos alunos

**Tarefa:** CARD · **Pedido em:** 2026-10-15 10:10 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "AQUI, http://127.0.0.1:5502/projetos-alunos/index.html, ADICIONE MAIS 1 CARD COM
REDIRECIONAMENTO PRA ESTE ARQUIVO aulas\index.html"
**Objetivo:** a vitrine dos alunos ganha um card que leva à página `aulas/index.html`.

### CARD.1 — Adicionar o card de redirecionamento em `projetos-alunos`

**Próximo passo:** nenhum — entregue. O visual fica para o usuário conferir no navegador.

- **Nível:** LEVE — 2 arquivos, mudança pontual.
- **Descrição:** card-link (mesmo estilo dos cards) depois dos alunos, apontando para
- **JEV-AI-SUGGESTION:** NAO
  `../aulas/index.html`, na mesma aba.
- **Critérios de Aceitação:** card visível na grade; clique redireciona; teclado (Enter) funciona
  por ser `<a>`; segue o tema claro/escuro.
- **Entrega:** commit `feat(CARD.1)` · **Verificação:** `node --check js/app.js`; linhas ≤ 100; visual não aberto (regra: sem navegador).
- **Anotação:** nome do card definido pelo usuário: "Sugestão Testes Frontend".
