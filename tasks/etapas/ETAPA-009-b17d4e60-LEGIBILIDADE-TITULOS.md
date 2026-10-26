## Etapa 009-b17d4e60 — LEGI: legibilidade dos títulos da página das aulas

**Tarefa:** LEGI · **Pedido em:** 2026-10-15 10:25 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "esta cor de texto esta ruim, mude, nao da de ver direito" (título "3. Preparar o
ambiente" em magenta com brilho, em `aulas/index.html`)
**Objetivo:** títulos legíveis, mantendo o estilo neon.

### LEGI.1 — Trocar a cor/brilho dos títulos H2 em `aulas/css/estilo.css`

**Próximo passo:** nenhum — entregue. O visual fica para o usuário conferir.

- **Nível:** LEVE — 1 arquivo, só CSS.
- **Descrição:** o brilho (`text-shadow`) magenta borra o texto; trocar por cor clara de alto
- **JEV-AI-SUGGESTION:** NAO
  contraste e deixar o neon só na borda inferior.
- **Critérios de Aceitação:** texto do H2 nítido sobre o fundo escuro; contraste ≥ 7:1.
- **Entrega:** commit `fix(LEGI.1)` · **Verificação:** H2 passa a `#ffe3fa` sem `text-shadow` (contraste ≈ 15:1 sobre o fundo `#0b0f24`); visual não aberto (regra: sem navegador).
