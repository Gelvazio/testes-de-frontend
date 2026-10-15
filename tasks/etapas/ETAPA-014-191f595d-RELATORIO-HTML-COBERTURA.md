## Etapa 014-191f595d — REL: relatório HTML dos testes com cobertura

**Tarefa:** REL · **Pedido em:** 2026-10-15 10:27 · **Criada por:** Claude Code (Opus 5.5) (local · main)
**Pedido:** "tem comando pra gerar relatorio de testes em html, com coverage?" → proposta no chat
(pacotes `@vitest/coverage-v8` e `@vitest/ui`, scripts `test:coverage` e `test:report`, pastas
geradas fora do Git, seção no README) → "sim".
**Objetivo:** gerar, por comando, o relatório de cobertura (`coverage/index.html`) e o relatório
dos testes em HTML (`html/index.html`) do `aulas/projeto-frontend-com-testes/`.

### REL.1 — Configurar os relatórios HTML de testes e de cobertura

**Próximo passo:** em execução por Claude Code (Opus 5.5) (local · main).

- **Nível:** MEDIO — dependências novas e scripts (2 a 4 arquivos).
- **Descrição:** instalar `@vitest/coverage-v8` e `@vitest/ui` na mesma versão do `vitest`;
  scripts `test:coverage` e `test:report`; cobertura de todos os `js/**/*.js` (mostra também os
  módulos ainda sem teste); `coverage/` e `html/` no `.gitignore`; seção no README.
- **Critérios de Aceitação:** os dois comandos rodam sem erro e geram `coverage/index.html` e
  `html/index.html`; nada gerado vai para o Git.
- **Entrega:** — · **Verificação:** —
