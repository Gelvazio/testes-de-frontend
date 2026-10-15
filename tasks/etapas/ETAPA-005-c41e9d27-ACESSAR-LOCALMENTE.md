## Etapa 005-c41e9d27 — LOCAL: Botão "Acessar Localmente" no modal

**Tarefa:** LOCAL · **Pedido em:** 2026-10-15 09:05 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "no modal ao lado de Repositorio, crie 1 botao de nome Acessar Localmente, que deve
abrir em nova pagina a pasta do repositorio referente"
**Objetivo:** cada projeto do modal ganha um botão que abre, em nova aba, a pasta baixada em
`projetos-alunos/repositorios/<usuario>/<projeto>/`.

### LOCAL.1 — Criar o botão "Acessar Localmente" em `js/app.js`

**Próximo passo:** nenhum — entregue. O clique fica para o usuário conferir no navegador.

- **Nível:** LEVE — 1 arquivo, mudança pontual.
- **Descrição:** botão ao lado de "Repositório", link relativo `repositorios/<usuario>/<projeto>/`
  com `target="_blank"`. Só aparece para projetos baixados (sem fork e sem `estaVazio`).
- **Critérios de Aceitação:** botão com o texto "Acessar Localmente"; abre a pasta em nova aba;
  não aparece em fork nem em vazio (a pasta não existe).
- **Entrega:** commit `feat(LOCAL.1)` · **Verificação:** `node --check js/app.js`; linhas ≤ 100; clique fica para o usuário conferir (regra: não abrir navegador). Em `file://` a pasta abre como listagem; em servidor, abre o `index.html` dela se existir.
