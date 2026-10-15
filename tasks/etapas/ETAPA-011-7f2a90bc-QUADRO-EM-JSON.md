## Etapa 011-7f2a90bc — JSON: quadro de tarefas em JSON (status.json) com STATUS.md gerado

**Tarefa:** JSON · **Pedido em:** 2026-10-15 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "crie 1 plano detalhado disso, mas nao execute, apenas publique no quadro, e os status
devem ser numericos, 1-ABERTO, 2-ANDAMENTO, 3-CONCLUIDO, 4-CANCELADO, MESMA COISA PRA PRIORIDADE,
1-BAIXA, 2-MEDIA, 3-ALTA, 4-ALTISSIMA" · "AS TAREFAS TAMBEM DEVE SER DO TIPO: TASK-01, TASK-02,
TASK-03, E DENTRO DE CADA TAREFA, SUAS SUB TASKS ASSIM, SUB-TASK-01.1, SUB-TASK-01.2,
SUB-TASK-01.3, ETC"
**Objetivo:** trocar a fonte única do quadro (hoje tabelas em `tasks/STATUS.md`) por um arquivo
JSON com status e prioridade numéricos e códigos `TASK-NN` / `SUB-TASK-NN.N`, para que IA e
scripts leiam e atualizem sem mexer em tabela Markdown. O `STATUS.md` passa a ser **gerado**
(somente leitura) para as pessoas.

> ⛔ **Esta etapa só PUBLICA o plano.** Nada abaixo foi executado. Execução só depois da
> aprovação explícita do usuário (tarefa grande, `ciclo-da-task.md`).

### Escopo

- **Entra:** `tasks/status.json` (fonte única); script gerador do `STATUS.md` e do
  `task_complete.md`; script de operações (reservar, concluir, mudar status); adaptação dos
  hooks, skills, agentes e do visualizador que leem `STATUS.md`; atualização das regras em
  `.claude/rules/tasks/`; migração das 11 tarefas existentes para o novo formato de código.
- **Não entra:** mudar o formato das **etapas** (continuam em Markdown: pedido, plano, decisões,
  anotações); mudar a regra "tudo na `main`"; abrir navegador; escrever testes (regra do projeto).

### Decisões já tomadas pelo usuário (valem para o plano)

| Tema | Decisão |
|---|---|
| Status | Número: **1** ABERTO · **2** ANDAMENTO · **3** CONCLUIDO · **4** CANCELADO |
| Prioridade | Número: **1** BAIXA · **2** MEDIA · **3** ALTA · **4** ALTISSIMA |
| Código da tarefa | `TASK-01`, `TASK-02`, `TASK-03`… (2 dígitos, sequencial) |
| Código da subtarefa | `SUB-TASK-01.1`, `SUB-TASK-01.2`… (`TASK` sem zero à esquerda no `.N`) |

### Modelo do `tasks/status.json` (proposto)

```json
{
  "versao": 1,
  "atualizadoEm": "2026-10-15T11:30:00-03:00",
  "dicionarios": {
    "status": { "1": "ABERTO", "2": "ANDAMENTO", "3": "CONCLUIDO", "4": "CANCELADO" },
    "prioridade": { "1": "BAIXA", "2": "MEDIA", "3": "ALTA", "4": "ALTISSIMA" }
  },
  "tarefas": [
    {
      "codigo": "TASK-11",
      "titulo": "Quadro de tarefas em JSON",
      "status": 1,
      "prioridade": 2,
      "etapa": "ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md",
      "legado": "JSON",
      "subtarefas": [
        {
          "codigo": "SUB-TASK-11.1",
          "titulo": "Aprovar o plano",
          "status": 1,
          "prioridade": 2,
          "dependeDe": [],
          "emUsoPor": null,
          "reservadoEm": null,
          "bloqueado": false,
          "motivoBloqueio": null,
          "aguardaUsuario": true,
          "nivel": "LEVE"
        }
      ]
    }
  ]
}
```

- **`status`/`prioridade`** são números; os textos vêm só do dicionário (um lugar).
- **`bloqueado`** e **`aguardaUsuario`** existem porque o status numérico não tem "⛔ Bloqueado"
  nem "👀 Aguardando o usuário". Eles **não** são status: uma subtarefa `2 ANDAMENTO` ou
  `1 ABERTO` pode estar bloqueada ou aguardando o usuário.
- **`emUsoPor`** = nome da frente (ex.: `Claude Code (Sonnet 5.5) (local · main)`); `null` = livre.
  Reservar = `status 2` + `emUsoPor` + `reservadoEm`.
- **`legado`**: código antigo (`DASH`, `PROJ.2`…) para achar o histórico em commits e etapas.
- Tarefas concluídas ou canceladas (`3`/`4`) **ficam no mesmo JSON** (não há mais "mover para o
  `task_complete.md`"); o `task_complete.md` passa a ser gerado só com as de status `3`.

### Regras do novo formato

1. **Sequência:** o próximo código é `maior TASK-NN + 1`; nunca reutilizar número, mesmo de
   tarefa cancelada.
2. **Mãe sem reserva:** a tarefa-mãe não tem `emUsoPor`; o status dela é **derivado** pelo script
   (todas as subtarefas `3` → `3`; alguma `2` → `2`; todas `4` → `4`; senão `1`).
3. **Reserva:** só subtarefa `status 1`, `emUsoPor null`, `dependeDe` todas `3`, e não
   `bloqueado`. Uma subtarefa `2` por frente.
4. **Conflito de git:** o JSON é formatado com **uma subtarefa por bloco fixo** (chaves em ordem
   fixa, 2 espaços) para o `git` mesclar linhas independentes; o script sempre regrava ordenado.
5. **Fim de linha:** arquivos gerados em `LF` (evita o problema de CRLF visto no `STATUS.md`).

### Riscos

| Risco | Chance | Impacto | Plano B |
|---|---|---|---|
| Hook `exigir-reserva.mjs` e skills quebram ao tirar a tabela do `STATUS.md` | Alta | Edição barrada ou fila errada | Adaptar o hook para ler o JSON **antes** de gerar o novo `STATUS.md`; manter o `STATUS.md` gerado com o mesmo texto `🔄 Em execução` durante a transição |
| Duas IAs editam `status.json` ao mesmo tempo | Média | Conflito no push | Script único de operações com `fetch`+`pull --rebase` antes e commit curto; reserva continua por commit `lock:` |
| IA edita o `STATUS.md` gerado à mão | Média | Mudança perdida na próxima geração | Cabeçalho "ARQUIVO GERADO — não editar" + hook `pre-commit` que regenera e recusa divergência |
| Perder o histórico dos códigos antigos | Baixa | Rastreio ruim | Campo `legado` + tabela de migração nesta etapa |
| Visualizador (`index.html`) deixa de mostrar o quadro | Média | Perda de uma tela | Adaptar `leitor-tarefas.js` para ler o JSON (mais simples que parsear tabela) |

### Mapa da migração (códigos antigos → novos)

| Antigo | Novo | Título | Status final | Prioridade |
|---|---|---|---|---|
| SETUP | TASK-01 | Aplicar o template inicial de tarefas com IA | 3 | — (definir) |
| DASH | TASK-02 | Dashboard inicial das matérias com Vite | 3 | 3 ALTA |
| ALUN | TASK-03 | Vitrine dos projetos dos alunos (GitHub) | 3 | 2 MEDIA |
| BAIX | TASK-04 | Baixar os projetos dos alunos | 3 | 2 MEDIA |
| LOCAL | TASK-05 | Botão Acessar Localmente no modal | 3 | 2 MEDIA |
| ORIE | TASK-06 | Orientação da Aula 03 (testes com Vitest) | 3 | 2 MEDIA |
| AULAS | TASK-07 | Página index.html das aulas (neon) | 3 | 2 MEDIA |
| CARD | TASK-08 | Card da Aula 03 na vitrine dos alunos | 3 | 2 MEDIA |
| LEGI | TASK-09 | Legibilidade dos títulos da página das aulas | 3 | 2 MEDIA |
| PROJ | TASK-10 | Projeto frontend com testes (mescla dos alunos) | 2 | 2 MEDIA |
| JSON | TASK-11 | Quadro de tarefas em JSON (esta etapa) | 1 | 2 MEDIA |

Subtarefas migram como `SUB-TASK-<mãe>.<n>` na mesma ordem (ex.: `DASH.2` → `SUB-TASK-02.2`,
`PROJ.4` → `SUB-TASK-10.4`). Conversão de status/prioridade antigos:
`⬜`→1 · `🔄`→2 · `✅`→3 · `⛔`→mantém o status anterior com `bloqueado: true` ·
`👀`→1 ou 2 com `aguardaUsuario: true` · cancelado (novo) →4 ·
prioridade `🟢`→1 · `🟡`→2 · `🟠`→3 · `🔴`→4.

### Plano de execução (subtarefas de TASK-11, após aprovação)

> No quadro atual (formato antigo) as linhas se chamam `JSON.1`…`JSON.9`; cada uma corresponde
> a `SUB-TASK-11.1`…`SUB-TASK-11.9` abaixo. Após a migração só existirá o código novo.

#### SUB-TASK-11.1 — Aprovar o plano

- **Nível:** LEVE · **Quem:** usuário
- **Descrição:** ler este plano e responder "sim" (ou pedir ajustes). Pontos a confirmar:
  (a) manter `bloqueado`/`aguardaUsuario` como campos à parte; (b) status da tarefa-mãe
  derivado; (c) `STATUS.md` e `task_complete.md` passam a ser gerados; (d) prioridade do
  `SETUP` (TASK-01).
- **Critério:** aprovação registrada nas Decisões desta etapa.

#### SUB-TASK-11.2 — Definir o esquema e criar `tasks/status.json`

- **Nível:** MEDIO · **Depende de:** 11.1
- **Descrição:** fechar o esquema (campos acima), criar `tasks/status.json` com as 11 tarefas
  migradas pelo mapa, e `tasks/status.schema.json` (validação por `node`, sem biblioteca).
- **Critério:** JSON válido; contagem de tarefas e subtarefas igual à do `STATUS.md` +
  `task_complete.md` atuais; nenhum status/prioridade fora de 1–4.

#### SUB-TASK-11.3 — Script de operações `scripts/quadro.mjs`

- **Nível:** MEDIO · **Depende de:** 11.2
- **Descrição:** comandos: `reservar <SUB-TASK> <frente>`, `liberar`, `concluir <SUB-TASK>`,
  `cancelar`, `status <SUB-TASK> <1-4>`, `criar-tarefa`, `criar-subtarefa`, `proxima`
  (respeita prioridade 4→1, dependências e reserva). Valida o que o `ciclo-da-task.md` exige
  (1 reserva por frente, dependências `3`, trava especial). Regrava o JSON ordenado em `LF`.
- **Critério:** cada comando falha com mensagem clara em caso inválido; reservar duas vezes a
  mesma subtarefa é recusado.

#### SUB-TASK-11.4 — Gerador de `STATUS.md` e `task_complete.md`

- **Nível:** MEDIO · **Depende de:** 11.2
- **Descrição:** `scripts/gerar-quadro.mjs` (também `npm run quadro:gerar`) lê o JSON e gera as
  tabelas atuais com os textos dos dicionários e os mesmos emojis, mais cabeçalho "ARQUIVO
  GERADO". Mantém as demais seções do `STATUS.md` (escopo, riscos, decisões, pendências) vindas
  de `tasks/status-secoes.md` para não perder o conteúdo escrito à mão.
- **Critério:** rodar duas vezes não muda nada (idempotente); diff com o `STATUS.md` atual só
  nos códigos, status e prioridade numéricos/novos.

#### SUB-TASK-11.5 — Adaptar hooks e hook de git

- **Nível:** PESADO · **Depende de:** 11.3, 11.4
- **Descrição:** `exigir-reserva.mjs` e `lembrar-task.mjs` (em `.claude/hooks/` e
  `.codex/hooks/`) passam a ler `tasks/status.json`; `.githooks/pre-commit` regenera o
  `STATUS.md` quando `status.json` muda e `.githooks/pre-push` recusa `STATUS.md` divergente.
  Erro do hook continua liberando a edição (regra atual).
- **Critério:** com reserva no JSON a edição passa; sem reserva é barrada; erro do hook libera.

#### SUB-TASK-11.6 — Adaptar skills, agentes e visualizador

- **Nível:** MEDIO · **Depende de:** 11.3
- **Descrição:** atualizar a fonte única em `.agents/` (skills `proxima-task`,
  `classificar-tarefa`, `liderar-equipe` e agentes executores/classificador) para usar
  `scripts/quadro.mjs`; rodar `npm run sync:agentes`; adaptar
  `.claude/rules/visualizador/leitor-tarefas.js` e `aba-tasks.js` para ler o JSON; `guia/`.
- **Critério:** `npm run check:agentes` sem divergência; nenhuma skill cita "linha da tabela".

#### SUB-TASK-11.7 — Atualizar as regras (`.claude/rules/tasks/` e `AGENTS.md`)

- **Nível:** MEDIO · **Depende de:** 11.3
- **Descrição:** reescrever `quadro.md`, `ciclo-da-task.md`, `frentes-e-reserva.md` e as
  referências em `essentials.md`, `git-quick.md`, `multiplas-ias.md`, `INDEX.md`, `AGENTS.md` e
  `README.md`: novo vocabulário (1–4), códigos `TASK-NN`/`SUB-TASK-NN.N`, fluxo por script,
  `STATUS.md` gerado. Registrar a mudança no "Registro de decisões".
- **Critério:** nenhuma regra manda editar a tabela à mão; cada regra continua em um arquivo só.

#### SUB-TASK-11.8 — Migrar etapas e referências

- **Nível:** LEVE · **Depende de:** 11.2
- **Descrição:** nas 10 etapas existentes, acrescentar a linha `**Código:** TASK-NN (antigo XXX)`
  e renomear os títulos de subtarefa para `SUB-TASK-NN.N`, sem apagar o histórico. Nome do
  arquivo da etapa **não muda** (links do histórico continuam válidos).
- **Critério:** busca por código antigo nas etapas ainda acha o `legado`.

#### SUB-TASK-11.9 — Verificação ponta a ponta e aceite

- **Nível:** MEDIO · **Depende de:** 11.5, 11.6, 11.7, 11.8
- **Descrição:** simular o ciclo completo com uma tarefa de teste (criar → reservar → concluir
  → cancelar) **e depois removê-la com cancelamento**; conferir hooks, `proxima-task` e o
  visualizador. Sem navegador (regra): checagem por `node` e por leitura.
- **Critério:** ciclo completo sem editar tabela à mão; aceite do usuário (👀) registrado.

### Ordem e dependências

```
11.1 (aprovar) → 11.2 (JSON) ─┬→ 11.3 (quadro.mjs) ─┬→ 11.5 (hooks) ─┐
                              │                      ├→ 11.6 (skills) ┼→ 11.9 (aceite)
                              ├→ 11.4 (gerador) ─────┘ 11.7 (regras) ─┤
                              └→ 11.8 (etapas) ────────────────────────┘
```

### Decisões

| Data | Decisão | Quem |
|---|---|---|
| 2026-10-15 | Pedido de plano **sem execução**; status e prioridade numéricos; códigos `TASK-NN`/`SUB-TASK-NN.N` | Gelvazio |
| 2026-10-15 | Aguardando aprovação do plano (SUB-TASK-11.1) | Gelvazio |
