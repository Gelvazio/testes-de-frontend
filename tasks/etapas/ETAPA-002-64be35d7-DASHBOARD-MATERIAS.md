## Etapa 002-64be35d7 — DASH: Dashboard inicial das matérias com Vite

**Tarefa:** DASH · **Pedido em:** 2026-10-15 08:30 · **Criada por:** Claude Code (Opus 5.5) (local · main)
**Pedido:** "crie um dashboard inicial com cards e efeitos e com tema dark e light, de nome
index.html, e com varios cards, tendo cada 1 deles 1 materia de TECNICO EM INFORMATICA E
INICIALMENTE COM A MATERIA, TESTES DE FRONTEND, CODIFICACAO PARA FRONTEND, PROJETO DE FRONTEND"
· "USE VITE NO PROJETO COM INDEX.HTML"
**Objetivo:** página inicial do projeto (`index.html`, servida pelo Vite) com um card por matéria
do Técnico em Informática, para depois ligar cada card ao conteúdo da matéria.

### Escopo

- **Entra:** Vite no projeto (`package.json`, `vite.config.js`); `index.html` do dashboard com
  CSS e JS separados em `src/`; tema claro e escuro (botão + preferência do sistema, lembrado no
  navegador); cards com efeitos (entrada animada, elevação e brilho ao passar o mouse); 3 matérias
  iniciais: Testes de Frontend, Codificação para Frontend e Projeto de Frontend; lista de matérias
  num arquivo só, para incluir outras sem mexer no resto do código.
- **Não entra:** conteúdo das matérias (aulas, atividades), páginas internas dos cards, deploy,
  testes automatizados.
- **Mudança na estrutura:** o `index.html` atual (guia do template) vai para `guia/index.html`,
  com os links ajustados, e continua no build do Vite.

### Critério de pronto

`npm install` e `npm run build` sem erro; HTML semântico sem `style=`/`onclick`; cores em tokens no
`:root` (claro e escuro); linhas ≤ 100 caracteres, funções ≤ 45 linhas e documentadas; visual
conferido pelo usuário no navegador (`npm run dev`).

### Riscos

| Risco | Plano B |
|---|---|
| Link antigo para o guia na raiz quebra | Card/link "Guia do projeto" no rodapé do dashboard apontando para `guia/` |
| Visual não pode ser conferido pela IA (regra: sem navegador) | Aceite do usuário (DASH.3) com `npm run dev` |

### Decisões

| Data | Decisão | Quem | Por quê |
|---|---|---|---|
| 2026-10-15 08:33 | Plano aprovado como está (inclui mover o guia para `guia/index.html`) | Gelvazio | Resposta no chat: "Sim, aprovo o plano da DASH. Pode executar." |

### DASH.1 — Configurar o Vite e mover o guia para `guia/index.html`

**Próximo passo:** nenhum — concluída.

- **Descrição:** `vite` como devDependency; scripts `dev`, `build` e `preview`; `vite.config.js`
  com as entradas `index.html` e `guia/index.html`; guia movido com links ajustados.
- **Critérios de Aceitação:** `npm run build` gera `dist/` com as duas páginas.
- **Entrega:** commit `feat(DASH.1)` (Vite 8.3.4, `vite.config.js`, guia em `guia/`, `index.html`
  provisório que a DASH.2 preenche) · **Verificação:** `npm run build` sem erro, gerando
  `dist/index.html` e `dist/guia/index.html`.

### DASH.2 — Criar o dashboard de matérias (cards, efeitos e tema claro/escuro)

**Próximo passo:** nenhum — concluída.

- **Descrição:** `index.html` + `src/estilos/` (tokens, base, cards) + `src/js/` (lista de
  matérias, montagem dos cards, troca de tema).
- **Critérios de Aceitação:** os 3 cards aparecem; botão alterna o tema e a escolha fica salva;
  sem preferência salva, segue o tema do sistema; respeita `prefers-reduced-motion`.
- **Entrega:** commit `feat(DASH.2)` — `index.html` (cards montados por `<template>`),
  `src/estilos/` (`tokens.css` com `light-dark()`, `base.css`, `cabecalho.css`, `cartoes.css`) e
  `src/js/` (`materias.js` = lista única das matérias, `cartoes.js`, `tema.js`, `efeitos.js`,
  `principal.js`, `constantes.js`). Efeitos: entrada escalonada, elevação e borda colorida no
  hover, brilho que segue o cursor, ícone sol/lua em CSS. · **Verificação:** `npm run build` sem
  erro; `node --check` nos 6 scripts; nenhuma linha acima de 100 caracteres; sem `style=`/
  `onclick` no HTML; visual não conferido no navegador (regra do projeto) — fica para a DASH.3.

### DASH.3 — Aceite do usuário

**Próximo passo:** o usuário roda `npm run dev`, abre o endereço mostrado e confere os cards e a
troca de tema.

- **Descrição:** o usuário roda `npm run dev` e confere o visual e os temas.
- **Entrega:** — · **Verificação:** —
