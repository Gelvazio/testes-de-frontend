## Etapa 007-e93a6b15 — AULAS: index.html futurista que lê a orientação da aula

**Tarefa:** AULAS · **Pedido em:** 2026-10-15 09:40 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "CRIE 1 INDEX.HTML NESTA PASTA aulas, QUE DEVE LER O MARKDOWN
ORIENTACAO-AULA-03.md, USE CSS E ESTILIZACAO FUTURISTA COM NEON"
**Objetivo:** página em `aulas/` que carrega `ORIENTACAO-AULA-03.md` e o mostra formatado, com
visual futurista neon.

### AULAS.1 — Criar `aulas/index.html` com CSS e JS separados

**Próximo passo:** nenhum — entregue. O visual fica para o usuário conferir no navegador (por servidor).

- **Nível:** MEDIO — conversor de Markdown próprio + estilo, 4 arquivos.
- **Descrição:** `fetch` do `.md` e conversão para HTML por um conversor pequeno (sem CDN):
- **JEV-AI-SUGGESTION:** NAO
  títulos, tabelas, listas, código, citações, negrito, código inline e links.
- **Critérios de Aceitação:** HTML sem `style=`/`onclick`; tokens neon em `:root`; mensagem
  clara se o `fetch` falhar (abrir por `file://`); nenhum teste criado.
- **Entrega:** commit `feat(AULAS.1)` · **Verificação:** `node --check` nos JS; linhas ≤ 100; conversor rodado em Node contra `ORIENTACAO-AULA-03.md` (4 tabelas, 1 bloco de código, 7 h2, sem marcação sobrando). Visual não aberto (regra: sem navegador). Precisa de servidor (`npm run dev` → `/aulas/`): por `file://` o `fetch` é bloqueado e a página mostra aviso.
