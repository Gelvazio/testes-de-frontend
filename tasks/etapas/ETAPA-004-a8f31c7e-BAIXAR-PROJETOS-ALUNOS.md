## Etapa 004-a8f31c7e — BAIX: Baixar os projetos dos alunos

**Tarefa:** BAIX · **Pedido em:** 2026-10-15 08:50 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "tem como baixar os projetos destes alunos aqui na pasta projetos-alunos?" · respostas:
"1-remova o .git ao final; 2-nao faca clone, pule ele; 3-sim, prossiga criando a tarefa"
**Objetivo:** ter, em `projetos-alunos/repositorios/<usuario>/<projeto>/`, o código dos
repositórios listados em `projetos-alunos/js/dados-alunos.js`.

### BAIX.1 — Baixar os repositórios dos alunos (sem forks, sem .git)

**Próximo passo:** clonar cada repositório (raso), apagar a pasta `.git` e conferir o resultado.

- **Nível:** MEDIO — vários downloads e conferência do resultado, sem banco nem segurança.
- **Descrição:** `git clone --depth 1` de cada repositório de `dados-alunos.js`, em
  `projetos-alunos/repositorios/<usuario>/<projeto>/`; ao final, remover o `.git` de cada um.
- **Critérios de Aceitação:** forks (`eFork: true`) são **pulados** (decisão do usuário);
  repositórios vazios (`estaVazio: true`) não têm o que baixar; nenhuma pasta `.git` sobra.
- **Entrega:** a preencher · **Verificação:** a preencher
