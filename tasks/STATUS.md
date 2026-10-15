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
| DASH | **Dashboard inicial das matérias com Vite** | 🟠 Alta | Nenhuma | 🔄 Em progresso | — (não reservável) | [ETAPA-002](etapas/ETAPA-002-64be35d7-DASHBOARD-MATERIAS.md) |
| DASH.2 | Criar o dashboard de matérias (cards, efeitos e tema claro/escuro) | 🟠 Alta | DASH.1 | ⬜ Pendente | — | [ETAPA-002](etapas/ETAPA-002-64be35d7-DASHBOARD-MATERIAS.md) |
| DASH.3 | Aceite do usuário | 🟠 Alta | DASH.2 | ⬜ Pendente | — | [ETAPA-002](etapas/ETAPA-002-64be35d7-DASHBOARD-MATERIAS.md) |

## Escopo do projeto

- **Entra:** projetos de frontend (HTML, CSS e JavaScript) das matérias do Técnico em
  Informática, e as regras, o quadro, as skills, os agentes e os hooks herdados do template.
- **Não entra:** a definir com o usuário a cada nova tarefa.

## 🗂️ Etapas

| Etapa | Assunto | Arquivo |
|---|---|---|
| 001-edb58c7f | SETUP: aplicar o template inicial de tarefas com IA | [ETAPA-001-edb58c7f-APLICAR-TEMPLATE.md](etapas/ETAPA-001-edb58c7f-APLICAR-TEMPLATE.md) |
| 002-64be35d7 | DASH: dashboard inicial das matérias com Vite | [ETAPA-002-64be35d7-DASHBOARD-MATERIAS.md](etapas/ETAPA-002-64be35d7-DASHBOARD-MATERIAS.md) |

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
