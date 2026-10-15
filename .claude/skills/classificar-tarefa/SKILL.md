---
name: classificar-tarefa
description: Classifica uma subtarefa do quadro (tasks/STATUS.md + etapa) no nível LEVE (fácil), MEDIO (média) ou PESADO (difícil) pelos sinais desta skill, e diz qual ferramenta e modelo de IA pode pegá-la (matriz ferramenta × modelo × nível). Use ao criar ou dividir subtarefa, quando perguntarem "qual o nível desta tarefa?", "quem pode pegar?", "esta tarefa é para mim?" ou "/classificar-tarefa".
---

# Classificar tarefa (classificar-tarefa)

Fonte das regras do quadro: `AGENTS.md` → `.claude/rules/tasks/`. Esta skill só **define o nível** e
**quem pode pegar**; reservar continua sendo pela `frentes-e-reserva.md`.

> Fonte única desta skill: `.agents/skills/classificar-tarefa/SKILL.md`. As cópias em `.claude/`,
> `.grok/` e `.gemini/commands/` são geradas no commit — **não editar as cópias**.

## Níveis

| Nível | Em palavras simples | Sinais concretos |
|---|---|---|
| `PESADO` | tarefa difícil | banco de dados, SQL, RLS, login/papéis/permissões, **chaves ou segredos**, migração, segurança, arquitetura, mais de 3 arquivos ligados, mudança em massa, apagar dados |
| `MEDIO` | tarefa média | código com lógica (telas, serviços, API, scripts, workflows), de 1 a 3 arquivos |
| `LEVE` | tarefa fácil | só `.md`, mover linhas do quadro, textos, formatação, configuração simples sem lógica |

## Ordem de decisão

1. **A regra mais restritiva vence:** basta um sinal de `PESADO`
   ("1 arquivo, mas é SQL" = `PESADO`).
2. **Na dúvida, sobe o nível** (`LEVE` → `MEDIO` → `PESADO`).
3. Se dois critérios discordarem (ex.: quantidade de arquivos × assunto), **vale o nível mais
   alto**.

## Matriz ferramenta × modelo × nível

Ponto de partida — **ajuste ao projeto** (o usuário decide; registre a mudança no "Registro de
decisões" do `tasks/STATUS.md`). `⛔` = não pega.

| Ferramenta | `LEVE` | `MEDIO` | `PESADO` |
|---|---|---|---|
| **Claude Code** (local ou nuvem) | Haiku | Sonnet | **Opus 5.5 ou superior, ou Fable** |
| **Gemini CLI** | modelo Flash | modelo Pro | ⛔ |
| **Antigravity** | Gemini Flash | ⛔ | ⛔ |
| **Grok** | modelo rápido | modelo principal | ⛔ |
| **DeepSeek** | modelo Flash | modelo de raciocínio | ⛔ |
| **Codex** | ✅ | ✅ | ⛔ |
| **Cursor** | ✅ | ✅ | ⛔ |
| **Devin** | ✅ | ⛔ | ⛔ |

- **`PESADO` é só do Claude Code com Opus 5.5 ou superior, ou Fable.** Nenhuma outra ferramenta
  pega.
- Cada agente se identifica como **ferramenta + modelo** (o nome da frente) e só pega subtarefa com
  nível **igual ou abaixo** do máximo da sua linha.
- Modelo forte pega subtarefa mais leve **só se** não houver nenhuma livre do seu nível (a fila não
  para, mas o trabalho difícil não espera).
- Tarefa de banco: depende de a sessão ter acesso ao banco (`.claude/rules/multiplas-ias.md`).

## Exemplos

| Subtarefa | Nível | Por quê |
|---|---|---|
| Criar o script `database/02_tabela_clientes.sql` | `PESADO` | SQL |
| Guardar a chave da API num segredo do workflow | `PESADO` | segurança e segredo |
| Tela de cadastro com validação (1 componente) | `MEDIO` | 1 arquivo com lógica, sem banco direto |
| Função que formata datas num módulo de utilidades | `MEDIO` | lógica em 1 arquivo |
| Documentar a instalação no `README.md` | `LEVE` | só `.md` |
| Acrescentar uma linha no `.gitignore` | `LEVE` | configuração simples sem lógica |

## Formato de saída

Na **seção da subtarefa** dentro da etapa (`tasks/etapas/…`), como primeiro item da lista (a
prioridade fica na linha do `STATUS.md`):

```markdown
- **Nível:** MEDIO — código com lógica em 1 arquivo de `src/`, sem chave
```

A justificativa é curta: o sinal que decidiu. Gravar o nível segue o ciclo normal (commit com o
quadro; `docs(board): …` se for só classificar).

## Proibido

- ⛔ Mudar a **prioridade** (é do usuário).
- ⛔ Reclassificar subtarefa **reservada por outra frente** ou sob **🔒 trava especial**.
- ⛔ Baixar o nível para caber na sua ferramenta: se não cabe, deixe para quem pode.
