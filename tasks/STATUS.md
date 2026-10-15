# STATUS — Testes de Frontend

**Objetivo:** projetos de frontend, organizados pelo quadro de tarefas com IA.
**Partes interessadas:** Gelvazio (decide, aprova e usa) · agentes de IA executam pelo quadro.
**Links:** [Regras](../AGENTS.md) · [Etapas](etapas/) · [Concluídas](task_complete.md) · [Recados](RECADOS.md)

Legenda: ⬜ Pendente · 🔄 Em progresso · ✅ Concluído · ⛔ Bloqueado · 👀 Aguardando o usuário ·
Prioridade: 🔴 Máxima · 🟠 Alta · 🟡 Média · 🟢 Baixa

## 📌 Tarefas

Cada **subtarefa** é uma linha própria e pode ser reservada por **qualquer IA** (coluna "Em uso por"). A linha em
**negrito** é a tarefa-mãe: não se reserva; ela fecha quando todas as subtarefas estiverem ✅. Aqui só ficam
tarefas **abertas ou em andamento**: linha que vira ✅ é movida para o [`task_complete.md`](task_complete.md).

| Tarefa | Título | Prioridade | Depende de | Status | Em uso por | Etapa |
|---|---|---|---|---|---|---|
| **BAIX** | **Baixar os projetos dos alunos** | 🟡 Média | Nenhuma | 🔄 Em progresso | — (não reservável) | [ETAPA-004](etapas/ETAPA-004-a8f31c7e-BAIXAR-PROJETOS-ALUNOS.md) |
| BAIX.1 | Baixar os repositórios dos alunos (sem forks, sem .git) | 🟡 Média | Nenhuma | 🔄 Em execução | Claude Code (Sonnet 5.5) (local · main) (desde 2026-10-15 08:50) | [ETAPA-004](etapas/ETAPA-004-a8f31c7e-BAIXAR-PROJETOS-ALUNOS.md) |

## Escopo do projeto

- **Entra:** projetos de frontend (HTML, CSS e JavaScript) das matérias do Técnico em
  Informática, e as regras, o quadro, as skills, os agentes e os hooks herdados do template.
- **Não entra:** a definir com o usuário a cada nova tarefa.

## 🗂️ Etapas

| Etapa | Assunto | Arquivo |
|---|---|---|
| 001-edb58c7f | SETUP: aplicar o template inicial de tarefas com IA | [ETAPA-001-edb58c7f-APLICAR-TEMPLATE.md](etapas/ETAPA-001-edb58c7f-APLICAR-TEMPLATE.md) |
| 002-64be35d7 | DASH: dashboard inicial das matérias com Vite | [ETAPA-002-64be35d7-DASHBOARD-MATERIAS.md](etapas/ETAPA-002-64be35d7-DASHBOARD-MATERIAS.md) |
| 003-88f3b2a5 | ALUN: vitrine dos projetos dos alunos (GitHub) | [ETAPA-003-88f3b2a5-PROJETOS-ALUNOS.md](etapas/ETAPA-003-88f3b2a5-PROJETOS-ALUNOS.md) |
| 004-a8f31c7e | BAIX: baixar os projetos dos alunos | [ETAPA-004-a8f31c7e-BAIXAR-PROJETOS-ALUNOS.md](etapas/ETAPA-004-a8f31c7e-BAIXAR-PROJETOS-ALUNOS.md) |

## Riscos

| Risco | Chance | Impacto | Plano B | Situação |
|---|---|---|---|---|
| Duas frentes editarem o `STATUS.md` ao mesmo tempo | Média | Conflito no push | Cada frente mexe só nas próprias linhas; sincronizar e reler antes do push | Acompanhando |

## Bloqueios gerais (sem tarefa)

| Data | Motivo | O que destrava | Resolvido em |
|---|---|---|---|

## Registro de decisões

| Data | Decisão | Quem | Por quê |
|---|---|---|---|
| 2026-10-15 | Projeto montado a partir do `template-inicial-tasks-ia` (sem o histórico do template); README e LICENSE do repositório mantidos | Gelvazio | Pedido no chat: "leia C:\fontes\template-inicial-tasks-ia, e aplique o template aqui" |

## Pendências (ficou para depois)

| Data | Pendência | Motivo |
|---|---|---|

## Lições aprendidas

| Data | Lição | Regra criada |
|---|---|---|
