## Etapa 012-88990f9e — ES6: projeto-frontend-com-testes em ES6 sem módulos

**Tarefa:** ES6 · **Pedido em:** 2026-10-15 09:45 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "leia este projeto e deixe no padrao do ECMASCRIPT 4" → esclarecido no chat: o ES4 não
existe; o padrão dos repositórios dos alunos é ES6 sem módulos ("ES6 SEM MODULOS").
**Objetivo:** deixar `aulas/projeto-frontend-com-testes/` no mesmo padrão dos projetos dos alunos:
JavaScript ES6 (`let`/`const`, arrow, template string) carregado por `<script>` comum, sem
`import`/`export`.

### Escopo

- **Entra:** `index.html`, `js/*.js` e `README.md` do projeto.
- **Não entra:** CSS; reescrita para ES5; arquivos de teste; os repositórios dos alunos.

### Riscos

| Risco | Plano B |
|---|---|
| Sem `export`, a Aula 03 (Vitest) não importa as funções | Fim de cada arquivo com `module.exports` condicional (`typeof module`), que não afeta o navegador |
| Recurso pós-ES6 escapar (spread de objeto, `Array.includes`, vírgula final em chamada) | Conferir por busca no fim |

### Decisões

| Data | Decisão | Quem |
|---|---|---|
| 2026-10-15 | Padrão = ES6 sem módulos ("ES6 SEM MODULOS", confirmado duas vezes no chat) | Gelvazio |

### ES6.1 — Converter `index.html` e `js/*.js`

**Próximo passo:** nenhum — entregue.

- **Nível:** MEDIO — 7 arquivos pequenos, lógica existente.
- **Descrição:** sem módulos; globais por `<script>`; ES6 puro; `module.exports` condicional no fim.
- **Critérios de Aceitação:** nenhum `import`/`export`; `node --check` passa; scripts em ordem.
- **Entrega:** commit `feat(ES6.1)` · **Verificação:** `node --check` nos 6 JS; `require` das funções no Node (IMC, carrinho, lâmpada) devolveu os valores esperados; sem `import`/`export`, sem spread de objeto, sem `Array.includes`, sem vírgula final em chamada. Acrescentado `package.json` (commonjs) na pasta do projeto por causa do `type: module` da raiz.

### ES6.2 — Atualizar o `README.md`

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — só `.md`.
- **Descrição:** sem servidor obrigatório; como os testes acessam as funções.
- **Entrega:** commit `docs(ES6.2)` · **Verificação:** README relido; descreve ES6 sem módulos, abertura sem servidor e `require` nos testes.

### ES6.3 — Aceite do usuário

**Próximo passo:** usuário abre `aulas/projeto-frontend-com-testes/index.html` e confirma.

- **Nível:** LEVE — aceite.
- **Descrição:** usuário abre a página e confirma que IMC, lâmpada, tema e loja funcionam.
- **Entrega:** — · **Verificação:** —
