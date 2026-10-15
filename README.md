# testes-de-frontend

Projetos de Frontend.

> Estrutura criada a partir do template `template-inicial-tasks-ia` (descrito abaixo).

Esqueleto inicial para **qualquer projeto com IA**: regras únicas para todas as IAs (Claude Code,
Gemini, Grok, Codex, Cursor, Copilot, Antigravity, DeepSeek…) e um **quadro de tarefas em
Markdown**. Se a sessão cair, ou outra IA assumir, o trabalho continua exatamente de onde parou.

## Como usar num projeto novo

1. Copie o conteúdo deste repositório para o projeto (ou use-o como *template* no GitHub).
2. Instale os hooks do Git (uma vez por clone):

   ```bash
   npm run hooks:instalar
   ```

3. Em `tasks/STATUS.md`, troque o título, o objetivo, as partes interessadas e o escopo pelos do
   projeto. Para começar o histórico do zero, esvazie `tasks/task_complete.md` e `tasks/etapas/` e
   tire a linha da etapa 001.
4. No `.claude/rules/visualizador/fonte.js`, troque o `REPOSITORIO` pelo `<dono>/<repositório>`
   do projeto.
5. Ajuste à realidade do projeto a matriz ferramenta × modelo da skill
   [`classificar-tarefa`](.agents/skills/classificar-tarefa/SKILL.md) e os comandos de validação
   em [`testes-validacao.md`](.claude/rules/testes-validacao.md).

## Estrutura

```
AGENTS.md                  porta de entrada das regras (todas as IAs)
CLAUDE.md · GEMINI.md      só importam o AGENTS.md
.claude/rules/             uma regra por arquivo (índice: INDEX.md)
  tasks/                   regras do quadro, reutilizáveis em qualquer projeto
  index.html + visualizador/   página que mostra regras e tarefas lendo os .md
.claude/hooks/             hooks do Claude Code (sincronizar, lembrar, exigir reserva)
.claude/settings.json      liga os hooks e as permissões do Claude Code
.agents/skills/            FONTE ÚNICA das skills (proxima-task, classificar-tarefa, liderar-equipe)
.agents/agents/            FONTE ÚNICA dos agentes (classificador e executores)
.claude/ .grok/ .gemini/ .codex/   cópias geradas por npm run sync:agentes (não editar)
.githooks/                 hooks do Git (pre-push, pre-commit, pre-merge-commit, post-checkout)
scripts/sincronizar-agentes.mjs    gera as cópias por IA
tasks/
  STATUS.md                quadro: só tarefas abertas ou em andamento
  task_complete.md         linhas concluídas (movidas do STATUS.md)
  etapas/                  uma etapa por tarefa-mãe: pedido, plano, subtarefas, próximo passo
  RECADOS.md               recados entre sessões/IAs
```

## Como o quadro funciona (resumo)

- Todo pedido que **muda** arquivo, banco ou configuração vira **tarefa** antes de executar; toda
  tarefa-mãe tem pelo menos 1 **subtarefa**, e o trabalho é sempre numa subtarefa.
- A IA **reserva** a subtarefa escrevendo o nome da sua **frente** em "Em uso por" (commit `lock:`
  + push) e só então trabalha. Uma subtarefa por vez por frente.
- O **próximo passo** de cada subtarefa fica na etapa: é o que se lê ao retomar.
- Tarefa **grande** (banco, segurança, várias partes, mudança em massa) tem o plano na própria etapa
  e só começa com a **aprovação** do usuário.
- Entregou → linha ✅ movida para o `task_complete.md`, 1 commit por subtarefa.

Detalhes: [`quadro.md`](.claude/rules/tasks/quadro.md),
[`ciclo-da-task.md`](.claude/rules/tasks/ciclo-da-task.md) e
[`frentes-e-reserva.md`](.claude/rules/tasks/frentes-e-reserva.md).

### Comandos (skills) em cada IA

A fonte única das skills é [`.agents/skills/`](.agents/skills/) (padrão aberto `SKILL.md`). Para
criar ou mudar uma skill ou agente, edite só em `.agents/`: o `pre-commit` roda o
`npm run sync:agentes` e o `pre-push` recusa o push se as cópias estiverem desatualizadas.

| Ferramenta | Onde lê | Como chamar |
|---|---|---|
| Codex | `.agents/skills/` (fonte) · agentes em `.codex/agents/` (gerados) | `$proxima-task` ou `/skills` |
| Google Antigravity | `.agents/skills/` (fonte) | `/proxima-task` |
| Cursor | `.agents/skills/` (fonte) | `/proxima-task` |
| GitHub Copilot (VS Code) | `.agents/skills/` (fonte) | `/proxima-task` |
| Claude Code | `.claude/skills/` e `.claude/agents/` (cópias) | `/proxima-task` |
| Grok Build | `.grok/skills/` (cópia) | `/proxima-task` |
| Gemini CLI | `.gemini/commands/<skill>.toml` (gerado) | `/proxima-task` |
| Outras (DeepSeek, Devin, OpenRouter) | sem formato de comando | "siga a skill `proxima-task`" |

## Hooks do Claude Code

- **Ao abrir a sessão:** traz a `main` (`fetch` + `pull --rebase`) quando é seguro.
- **A cada pedido:** lembra que mudança vira tarefa no quadro.
- **Antes de editar:** barra a edição fora de `tasks/` se não houver subtarefa `🔄 Em execução`
  de Claude Code no `tasks/STATUS.md`. Escape (só com pedido do usuário): `IA_SEM_TRAVA=1`.
