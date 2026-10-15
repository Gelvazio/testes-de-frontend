## Etapa 007-e93a6b15 — AULAS: index.html futurista que lê a orientação da aula

**Tarefa:** AULAS · **Pedido em:** 2026-10-15 09:40 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "CRIE 1 INDEX.HTML NESTA PASTA aulas, QUE DEVE LER O MARKDOWN
ORIENTACAO-AULA-03.md, USE CSS E ESTILIZACAO FUTURISTA COM NEON"
**Objetivo:** página em `aulas/` que carrega `ORIENTACAO-AULA-03.md` e o mostra formatado, com
visual futurista neon.

### AULAS.1 — Criar `aulas/index.html` com CSS e JS separados

**Próximo passo:** criar `index.html`, `css/estilo.css`, `js/markdown.js` e `js/app.js`.

- **Nível:** MEDIO — conversor de Markdown próprio + estilo, 4 arquivos.
- **Descrição:** `fetch` do `.md` e conversão para HTML por um conversor pequeno (sem CDN):
  títulos, tabelas, listas, código, citações, negrito, código inline e links.
- **Critérios de Aceitação:** HTML sem `style=`/`onclick`; tokens neon em `:root`; mensagem
  clara se o `fetch` falhar (abrir por `file://`); nenhum teste criado.
- **Entrega:** a preencher · **Verificação:** a preencher
