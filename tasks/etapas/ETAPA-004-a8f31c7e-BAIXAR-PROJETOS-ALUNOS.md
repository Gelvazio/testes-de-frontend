## Etapa 004-a8f31c7e — BAIX: Baixar os projetos dos alunos

**Tarefa:** BAIX · **Pedido em:** 2026-10-15 08:50 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "tem como baixar os projetos destes alunos aqui na pasta projetos-alunos?" · respostas:
"1-remova o .git ao final; 2-nao faca clone, pule ele; 3-sim, prossiga criando a tarefa"
**Objetivo:** ter, em `projetos-alunos/repositorios/<usuario>/<projeto>/`, o código dos
repositórios listados em `projetos-alunos/js/dados-alunos.js`.

### BAIX.1 — Baixar os repositórios dos alunos (sem forks, sem .git)

**Próximo passo:** nenhum — entregue. Para atualizar, rodar o download de novo (apaga e baixa).

- **Nível:** MEDIO — vários downloads e conferência do resultado, sem banco nem segurança.
- **Descrição:** `git clone --depth 1` de cada repositório de `dados-alunos.js`, em
- **JEV-AI-SUGGESTION:** NAO
  `projetos-alunos/repositorios/<usuario>/<projeto>/`; ao final, remover o `.git` de cada um.
- **Critérios de Aceitação:** forks (`eFork: true`) são **pulados** (decisão do usuário);
  repositórios vazios (`estaVazio: true`) não têm o que baixar; nenhuma pasta `.git` sobra.
- **Entrega:** commit `feat(BAIX.1)` · **Verificação:** 32 repositórios em `projetos-alunos/repositorios/` (338 arquivos, 16 MB); nenhuma pasta `.git`; 3 forks e 9 vazios pulados.
- **Anotação:** forks pulados por decisão do usuário: `meu-primeiro-site` (marialmmarcelino-blip) e `front_e_upload` (carlosdanielramosleandro43-ctrl).
