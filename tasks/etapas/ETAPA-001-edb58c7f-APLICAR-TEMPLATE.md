## Etapa 001-edb58c7f — SETUP: Aplicar o template inicial de tarefas com IA

**Tarefa:** SETUP · **Pedido em:** 2026-10-15 · **Criada por:** Claude Code (Opus 5.5) (local · main)
**Pedido:** "leia C:\fontes\template-inicial-tasks-ia, e aplique o template aqui"
**Objetivo:** deixar o repositório pronto para trabalhar pelo quadro de tarefas com IA.

### SETUP.1 — Copiar o template e adaptar nome, quadro e visualizador ao projeto

**Próximo passo:** nenhum — concluída.

- **Nível:** MEDIO — cópia de estrutura, sem banco nem segredo
- **Descrição:** cópia de regras, quadro, skills, agentes, hooks, visualizador e guia; histórico
- **JEV-AI-SUGGESTION:** NAO
  do template zerado; `STATUS.md`, `task_complete.md`, `package.json`, `README.md` e
  `fonte.js` (`REPOSITORIO`) adaptados ao projeto; hooks do Git instalados.
- **Critérios de Aceitação:** estrutura igual à do template; nenhuma referência ao repositório
  do template no visualizador; LICENSE do repositório mantida.
- **Entrega:** commit `feat(SETUP.1)` · **Verificação:** `npm run check:agentes` sem
  diferenças; `git config core.hooksPath` = `.githooks`.
