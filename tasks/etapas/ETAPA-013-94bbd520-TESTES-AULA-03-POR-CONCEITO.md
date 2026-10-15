## Etapa 013-94bbd520 — TEST: testes da Aula 03 por conceito

**Tarefa:** TEST · **Pedido em:** 2026-10-15 10:09 · **Criada por:** Claude Code (Sonnet 5.5) (local · main)
**Pedido:** "crie 1 tarefa pra cada conceito do markdown, e deixe esperando aqui, PRA EU IR
EXECUTANDO 1 POR VEZ" (markdown: `AULA-03-SLIDES.md`; todos os conceitos aplicados ao `imc.js`;
mock assíncrono pela "opção A": função nova `obterImcDaPessoa`).
**Objetivo:** ir montando, uma subtarefa por vez, o `imc.test.js`, cada passo comentando um
conceito da Aula 03 (Vitest).

### Escopo

- **Entra:** `js/imc.test.js`; instalação do Vitest e scripts (TEST.1); arquivo novo
  `js/imc-servico.js` com `obterImcDaPessoa` (TEST.16), só para o conceito de mock assíncrono.
- **Não entra:** testes de `lampada.js`, `carrinho.js`, `tema.js` e `app.js`; cobertura;
  testes de integração; mudar `app.js`/`index.html` para usar a função nova.

### Riscos

| Risco | Plano B |
|---|---|
| Projeto em ES6 sem módulos e Vitest importa por `import` | TEST.1 confere se o `import` do `module.exports` funciona e ajusta |
| `imc.tests.js` não é detectado pelo Vitest | Usar `imc.test.js` (convenção do slide 13) |
| `vi.fn`/`vi.spyOn` ficam artificiais no IMC (sem dependência real) | Explicar no comentário que o objetivo é ensinar a ferramenta |

### Decisões

| Data | Decisão | Quem |
|---|---|---|
| 2026-10-15 | Exceção à regra "nunca escrever testes": autorizada pelo usuário para esta etapa (aula didática), uma subtarefa por vez, só quando ele mandar executar | Gelvazio |
| 2026-10-15 | Mock assíncrono pela opção A: função nova `obterImcDaPessoa` em `js/imc-servico.js` | Gelvazio |
| 2026-10-15 | Antiga subtarefa ES6.4 (arquivo único) substituída por esta etapa; o `imc.test.js` já escrito foi descartado | Gelvazio |

### TEST.1 — Configurar o Vitest (instalar, scripts test e test:run)

**Próximo passo:** nenhum — entregue.

- **Nível:** MEDIO — configuração do projeto.
- **Descrição:** Instalar `vitest` como dependência de desenvolvimento, criar os scripts `test` (watch) e `test:run` (uma vez, para CI) e deixar os testes importarem `imc.js`. Explicar cada passo.
- **Origem:** slide(s) 11 e 12 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit `feat(TEST.1)` · **Verificação:** `npx vitest --version` = 5.0.4; teste-sonda temporário com `import` de `imc.js` passou (apagado depois)

### TEST.2 — describe(): agrupar as suites do IMC

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — um conceito por vez.
- **Descrição:** Criar `js/imc.test.js` com `describe('calcularImc')` e `describe('classificarImc')`, explicando o que é uma suite.
- **Origem:** slide(s) 14 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.2) · **Verificação:** npm run test:run sem falhas (casos it.todo listados)

### TEST.3 — it() e test() com BDD Given/When/Then

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — um conceito por vez.
- **Descrição:** Escrever os casos de `calcularImc` como `it`, ligados a Given/When/Then, explicando `it` × `test`.
- **Origem:** slide(s) 6 e 14 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.3) · **Verificação:** npm run test:run: 2 testes passam

### TEST.4 — expect(): a asserção

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — um conceito por vez.
- **Descrição:** Usar `expect()` em cada caso e explicar o diff mostrado quando o teste falha.
- **Origem:** slide(s) 15 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.4) · **Verificação:** npm run test:run: 3 testes passam

### TEST.5 — Padrão AAA: Arrange, Act, Assert

**Próximo passo:** nenhum — entregue.

- **Nível:** MEDIO — um conceito por vez.
- **Descrição:** Separar as 3 fases nos casos de `calcularImc`, com a fase Act em uma linha.
- **Origem:** slide(s) 16 a 19 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.5) · **Verificação:** npm run test:run: 5 testes passam

### TEST.6 — toBe(): igualdade estrita

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — um conceito por vez.
- **Descrição:** `classificarImc(17)` devolve `'Abaixo do peso'`; `calcularImc(100, 2)` devolve `25`.
- **Origem:** slide(s) 20 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.6) · **Verificação:** npm run test:run: 8 testes passam

### TEST.7 — toBeCloseTo(): números decimais

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — um conceito por vez.
- **Descrição:** `calcularImc(70, 1.75)` ≈ `22.86`; explicar por que `toBe` falha em decimais.
- **Origem:** slide(s) 20 e 22 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.7) · **Verificação:** npm run test:run: 10 testes passam

### TEST.8 — toBeNull(): entrada inválida

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — um conceito por vez.
- **Descrição:** `calcularImc` e `classificarImc` com zero, negativo e `NaN` devolvem `null`.
- **Origem:** slide(s) 22 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.8) · **Verificação:** npm run test:run: 14 testes passam

### TEST.9 — toBeDefined(): valor inicializado

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — um conceito por vez.
- **Descrição:** Conferir que as constantes de limite e o retorno de `classificarImc` estão definidos.
- **Origem:** slide(s) 22 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.9) · **Verificação:** npm run test:run: 16 testes passam

### TEST.10 — toBeGreaterThan(): limites numéricos

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — um conceito por vez.
- **Descrição:** Um IMC de 100 kg e 1,70 m é maior que `IMC_LIMITE_OBESIDADE_II`; os limites estão em ordem crescente.
- **Origem:** slide(s) 22 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.10) · **Verificação:** npm run test:run: 18 testes passam

### TEST.11 — toEqual(): comparação profunda e a armadilha da referência

**Próximo passo:** nenhum — entregue.

- **Nível:** MEDIO — um conceito por vez.
- **Descrição:** `[17, 22, 27].map(classificarImc)` é igual a `['Abaixo do peso', 'Peso normal', 'Sobrepeso']`; mostrar por que `toBe` falharia.
- **Origem:** slide(s) 20 e 21 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.11) · **Verificação:** npm run test:run: 21 testes passam

### TEST.12 — toContain(): item numa lista

**Próximo passo:** nenhum — entregue.

- **Nível:** LEVE — um conceito por vez.
- **Descrição:** A lista de rótulos gerada com `map(classificarImc)` contém `'Peso normal'`.
- **Origem:** slide(s) 22 e 23 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.12) · **Verificação:** npm run test:run: 24 testes passam

### TEST.13 — beforeEach() e afterEach(): testes isolados

**Próximo passo:** nenhum — entregue.

- **Nível:** MEDIO — um conceito por vez.
- **Descrição:** Recriar `{ peso, altura }` a cada teste e demonstrar a independência entre eles.
- **Origem:** slide(s) 34 a 37 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.13) · **Verificação:** npm run test:run: 27 testes passam

### TEST.14 — vi.fn(): função simulada

**Próximo passo:** nenhum — entregue.

- **Nível:** MEDIO — um conceito por vez.
- **Descrição:** `const espiao = vi.fn(classificarImc)`, chamar e conferir `toHaveBeenCalled` e `toHaveBeenCalledWith(22.86)`.
- **Origem:** slide(s) 26 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.14) · **Verificação:** npm run test:run: 30 testes passam

### TEST.15 — vi.spyOn() e vi.restoreAllMocks()

**Próximo passo:** nenhum — entregue.

- **Nível:** MEDIO — um conceito por vez.
- **Descrição:** Espiar `Number.isFinite` (usado por `calcularImc`), forçar `false` para provocar `null` e restaurar depois de cada teste.
- **Origem:** slide(s) 27 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** commit feat(TEST.15) · **Verificação:** npm run test:run: 33 testes passam

### TEST.16 — Criar a função assíncrona obterImcDaPessoa (código novo)

**Próximo passo:** nenhum — entregue.

- **Nível:** MEDIO — um conceito por vez.
- **Descrição:** Criar `js/imc-servico.js` com `async function obterImcDaPessoa(buscarPessoa, id)`: busca `{ peso, altura }` pela dependência injetada, calcula com `calcularImc` e lança erro se a pessoa não existir. ES6 sem módulos, `module.exports` condicional, JSDoc, sem rede. Não entra no `index.html`.
- **Origem:** slide(s) 32 e 33 (preparação) de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** a função existe, está documentada e funciona no Node.
- **Entrega:** commit feat(TEST.16) · **Verificação:** node --check; no Node devolveu 25, erro de pessoa nao encontrada e TypeError; teste-sonda no Vitest passou (apagado)

### TEST.17 — Mock de função assíncrona: obterImcDaPessoa

**Próximo passo:** em execução por Claude Code (Opus 5.5) (local · main).

- **Nível:** PESADO — um conceito por vez.
- **Descrição:** Testar `obterImcDaPessoa` com `vi.fn()` e `mockResolvedValue` (caminho feliz) e `mockRejectedValue` (servidor recusa), conferindo o erro com `rejects`. Nenhuma chamada de rede.
- **Origem:** slide(s) 32 e 33 de `AULA-03-SLIDES.md`.
- **Critérios de Aceitação:** o teste comenta o conceito em linguagem simples e passa.
- **Entrega:** — · **Verificação:** —

### TEST.18 — Aceite do usuário

**Próximo passo:** aguardando todas as subtarefas anteriores.

- **Nível:** LEVE — aceite.
- **Descrição:** usuário roda `npm run test:run` e confirma que os testes passam e os comentários estão claros.
- **Entrega:** — · **Verificação:** —
