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
| **PROJ** | **Projeto frontend com testes (mescla dos alunos)** | 🟡 Média | Nenhuma | 🔄 Em progresso | — (não reservável) | [ETAPA-010](etapas/ETAPA-010-c58e1f92-PROJETO-FRONTEND-COM-TESTES.md) |
| PROJ.4 | Aceite do usuário | 🟡 Média | PROJ.3 | 👀 Aguardando o usuário | — | [ETAPA-010](etapas/ETAPA-010-c58e1f92-PROJETO-FRONTEND-COM-TESTES.md) |
| **JSON** | **Quadro de tarefas em JSON (status.json) com STATUS.md gerado — SÓ PLANO, não executar** | 🟡 Média | Nenhuma | ⬜ Pendente | — (não reservável) | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| JSON.1 | Aprovar o plano (TASK-11 / SUB-TASK-11.1) | 🟡 Média | Nenhuma | 👀 Aguardando o usuário | — | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| JSON.2 | Esquema e tasks/status.json (SUB-TASK-11.2) | 🟡 Média | JSON.1 | ⬜ Pendente | — | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| JSON.3 | Script de operações scripts/quadro.mjs (SUB-TASK-11.3) | 🟡 Média | JSON.2 | ⬜ Pendente | — | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| JSON.4 | Gerador de STATUS.md e task_complete.md (SUB-TASK-11.4) | 🟡 Média | JSON.2 | ⬜ Pendente | — | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| JSON.5 | Adaptar hooks e hooks de git (SUB-TASK-11.5) | 🟡 Média | JSON.3, JSON.4 | ⬜ Pendente | — | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| JSON.6 | Adaptar skills, agentes e visualizador (SUB-TASK-11.6) | 🟡 Média | JSON.3 | ⬜ Pendente | — | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| JSON.7 | Atualizar as regras e o AGENTS.md (SUB-TASK-11.7) | 🟡 Média | JSON.3 | ⬜ Pendente | — | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| JSON.8 | Migrar etapas e referências (SUB-TASK-11.8) | 🟡 Média | JSON.2 | ⬜ Pendente | — | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| JSON.9 | Verificação ponta a ponta e aceite (SUB-TASK-11.9) | 🟡 Média | JSON.5, JSON.6, JSON.7, JSON.8 | ⬜ Pendente | — | [ETAPA-011](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| **ES6** | **Projeto frontend com testes em ES6 sem módulos** | 🟡 Média | Nenhuma | 🔄 Em progresso | — (não reservável) | [ETAPA-012](etapas/ETAPA-012-88990f9e-ES6-SEM-MODULOS.md) |
| ES6.3 | Aceite do usuário | 🟡 Média | ES6.2 | 👀 Aguardando o usuário | — | [ETAPA-012](etapas/ETAPA-012-88990f9e-ES6-SEM-MODULOS.md) |
| **TEST** | **Testes da Aula 03 por conceito (imc.js)** | 🟡 Média | Nenhuma | 🔄 Em progresso | — (não reservável) | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.7 | toBeCloseTo(): números decimais | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.8 | toBeNull(): entrada inválida | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.9 | toBeDefined(): valor inicializado | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.10 | toBeGreaterThan(): limites numéricos | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.11 | toEqual(): comparação profunda e a armadilha da referência | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.12 | toContain(): item numa lista | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.13 | beforeEach() e afterEach(): testes isolados | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.14 | vi.fn(): função simulada | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.15 | vi.spyOn() e vi.restoreAllMocks() | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.16 | Criar a função assíncrona obterImcDaPessoa (código novo) | 🟡 Média | TEST.1 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.17 | Mock de função assíncrona: obterImcDaPessoa | 🟡 Média | TEST.1, TEST.16 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |
| TEST.18 | Aceite do usuário | 🟡 Média | TEST.2 a TEST.17 | ⬜ Pendente | — | [ETAPA-013](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |

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
| 005-c41e9d27 | LOCAL: botão Acessar Localmente no modal | [ETAPA-005-c41e9d27-ACESSAR-LOCALMENTE.md](etapas/ETAPA-005-c41e9d27-ACESSAR-LOCALMENTE.md) |
| 006-d7b25e41 | ORIE: orientação da Aula 03 (testes com Vitest) | [ETAPA-006-d7b25e41-ORIENTACAO-AULA-03.md](etapas/ETAPA-006-d7b25e41-ORIENTACAO-AULA-03.md) |
| 007-e93a6b15 | AULAS: index.html futurista que lê a orientação | [ETAPA-007-e93a6b15-INDEX-AULAS.md](etapas/ETAPA-007-e93a6b15-INDEX-AULAS.md) |
| 008-f26c8d03 | CARD: card da Aula 03 na vitrine dos alunos | [ETAPA-008-f26c8d03-CARD-AULA.md](etapas/ETAPA-008-f26c8d03-CARD-AULA.md) |
| 009-b17d4e60 | LEGI: legibilidade dos títulos da página das aulas | [ETAPA-009-b17d4e60-LEGIBILIDADE-TITULOS.md](etapas/ETAPA-009-b17d4e60-LEGIBILIDADE-TITULOS.md) |
| 010-c58e1f92 | PROJ: projeto-frontend-com-testes (mescla dos alunos) | [ETAPA-010-c58e1f92-PROJETO-FRONTEND-COM-TESTES.md](etapas/ETAPA-010-c58e1f92-PROJETO-FRONTEND-COM-TESTES.md) |
| 011-7f2a90bc | JSON: quadro de tarefas em JSON (plano, não executar) | [ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md](etapas/ETAPA-011-7f2a90bc-QUADRO-EM-JSON.md) |
| 012-88990f9e | ES6: projeto-frontend-com-testes em ES6 sem módulos | [ETAPA-012-88990f9e-ES6-SEM-MODULOS.md](etapas/ETAPA-012-88990f9e-ES6-SEM-MODULOS.md) |
| 013-94bbd520 | TEST: testes da Aula 03 por conceito | [ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md](etapas/ETAPA-013-94bbd520-TESTES-AULA-03-POR-CONCEITO.md) |

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
