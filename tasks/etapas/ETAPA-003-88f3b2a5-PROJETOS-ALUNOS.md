## Etapa 003-88f3b2a5 — ALUN: Vitrine dos projetos dos alunos (GitHub)

**Tarefa:** ALUN · **Pedido em:** 2026-10-15 08:35 · **Criada por:** Claude Code (Opus 5.5) (local · main · projetos-alunos)
**Pedido:** "na pasta projetos-alunos, leia os github dos alunos abaixo, crie 1 index.html,
separando cada aluno em 1 card, e ao clicar no card,deve abrir um modal,explicando os projetos do
aluno" · alunos: marialmmarcelino-blip, marcosvpaz-svg, carlosdanielramosleandro43-ctrl,
marcosxz447I, jhoinymarlizardi-sudo
**Objetivo:** página em `projetos-alunos/` com um card por aluno; o clique abre um modal que
explica cada projeto publicado no GitHub do aluno.

### ALUN.1 — Criar `projetos-alunos/index.html` com cards e modal

**Próximo passo:** nenhum — entregue. O visual fica para o usuário conferir abrindo `projetos-alunos/index.html` no navegador.

- **Descrição:** ler perfis e repositórios dos 5 alunos (API do GitHub via `gh`), resumir o que
- **JEV-AI-SUGGESTION:** NAO
  cada projeto faz e montar a página estática: `index.html` (estrutura), `css/estilo.css`
  (tokens claro/escuro), `js/dados-alunos.js` (dados dos alunos e projetos, fonte única) e
  `js/app.js` (cards e modal). Abre direto no navegador, sem servidor.
- **Critérios de Aceitação:** 1 card por aluno com nome de usuário, total de projetos e linguagens;
  clique (ou Enter) abre modal com a lista de projetos, explicação, link do repositório e do site
  (GitHub Pages) quando existir; fecha por botão, Esc ou clique fora; HTML sem `style=`/`onclick`.
- **Entrega:** commit `feat(ALUN.1)` · **Verificação:** `node --check` nos JS; dados conferidos
  com a API do GitHub em 2026-10-15; visual fica para o usuário (regra: não abrir navegador).
- **Anotação:** o usuário `marcosxz447I` (com "I" maiúsculo) não existe no GitHub; o correto é
  `marcosxz447l` (com "L" minúsculo) — foi esse o usado. Repositórios vazios aparecem no modal
  marcados como "vazio".

### ALUN.2 — Tema claro e escuro com botão

**Próximo passo:** nenhum — entregue. O visual fica para o usuário conferir no navegador.

- **Pedido:** "deve ter tema claro e escuro tambem" (2026-10-15 08:41).
- **Descrição:** botão no cabeçalho alterna entre claro e escuro; começa pela preferência do
- **JEV-AI-SUGGESTION:** NAO
  sistema e lembra a escolha no navegador (`localStorage`). Script próprio `js/tema.js`.
- **Critérios de Aceitação:** botão acessível (rótulo muda conforme o tema); cores só por tokens
  no `:root`; modal e cards seguem o tema escolhido.
- **Entrega:** commit `feat(ALUN.2)` · **Verificação:** `node --check js/tema.js`; linhas ≤ 100;
  troca visual fica para o usuário conferir (regra: não abrir navegador).
