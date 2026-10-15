# Orientação — Aula 03: Testes Unitários no Frontend com Vitest

Guia para conduzir a aula descrita em [`AULA-03-SLIDES.md`](AULA-03-SLIDES.md) usando como
material os projetos reais dos alunos, já baixados em
[`projetos-alunos/repositorios/`](../projetos-alunos/repositorios/).

> ⚠️ Este documento é só orientação. Pela regra do projeto (`testes-validacao.md`), a IA **não
> cria arquivos de teste**; os testes abaixo são escritos **ao vivo, na aula**, pelo professor e
> pelos alunos, em uma pasta de demonstração.

---

## 1. Ideia central: o problema dos projetos dos alunos

Quase toda a lógica dos alunos está **dentro de um `addEventListener`**, lendo valores do DOM e
escrevendo no HTML. Isso **não é testável** como unidade (slide 4: "isolamento"). A aula ganha
força mostrando exatamente isso:

| Antes (código do aluno) | Depois (testável) |
|---|---|
| Cálculo + leitura do DOM + escrita no HTML no mesmo bloco | Função pura `classificarImc(peso, altura)` que só recebe números e devolve texto |
| Só dá para conferir abrindo o navegador e digitando | `npm test` confere em milissegundos (slide 9) |

Roteiro: **mostrar o código → extrair a função → testar** (padrão AAA, slide 16).

---

## 2. Roteiro da aula (slides → ações)

| Bloco | Slides | O que fazer | Tempo sugerido |
|---|---|---|---|
| Abertura | 1–4 | Desafio do "código invisível": alterar o IMC de um aluno sem abrir o navegador | 10 min |
| Revisão | 5–8 | Verificação × validação, BDD (Given/When/Then); fazer o quiz | 10 min |
| Vitest | 9–13 | Instalar e configurar na pasta de demonstração (seção 3) | 15 min |
| Sintaxe | 14–19 | `describe`/`it`/`expect` e AAA com a função de IMC | 20 min |
| Matchers | 20–24 | `toBe` × `toEqual`, `toContain`, `toBeNull` (seção 4) | 15 min |
| Mocks | 25–27, 32–33 | `vi.fn()` e `vi.spyOn()` (seção 5) | 20 min |
| Prática | 29–31 | Atividade 1 com as funções utilitárias do slide 29 | 25 min |
| Fechamento | 34–41 | Armadilhas, isolamento, debate "quanto mockar?" | 15 min |

---

## 3. Preparar o ambiente (slides 11–13)

O projeto raiz **ainda não tem Vitest** (`package.json` só tem Vite). Opções:

1. **Recomendado:** instalar no próprio projeto, pois já usa Vite (slide 9: Vitest "usa o mesmo
   pipeline"):

   ```bash
   npm install -D vitest
   ```

   e acrescentar em `scripts`: `"test": "vitest"` e `"test:ci": "vitest run"` (slide 12).
2. Pasta isolada `aulas/demo-vitest/` com seu próprio `package.json` (slide 11, passo a passo),
   se preferir não tocar no projeto.

Convenção de nomes (slide 13): `arquivo.test.js` ao lado de `arquivo.js`.

> Esta preparação (instalar Vitest, criar `package.json`/`vite.config`) deve virar uma
> **subtarefa própria** no quadro antes da aula.

---

## 4. Projetos candidatos (do mais simples ao mais avançado)

### ⭐ Candidato 1 — Calculadora de IMC (melhor para a aula)

Seis alunos fizeram a mesma calculadora, com **a mesma regra de negócio**, o que permite
comparar versões e mostrar que **o teste revela erros**.

| Aluno | Arquivo | Situação |
|---|---|---|
| carlosdanielramosleandro43-ctrl | `calculadoraIMC/script.js` | ✅ **Referência**: classes corretas (6 faixas) e validação `altura <= 0 \|\| peso <= 0` |
| marialmmarcelino-blip | `cal/calculadora/script.js` | ✅ Boa: função `calcular()`, 4 faixas, valida campos vazios |
| marcosvpaz-svg | `calculadora-imc/script.js` | ⚠️ Faixas corretas, mas lê o nome com `ariaValueMax` (deveria ser `value`) |
| marialmmarcelino-blip | `calculadora-imc/script.js` | ❌ Usa `.volue` (erro de digitação): `NaN` sempre |
| marcosxz447l | `Calculadora-IMC/script.js` | ❌ Faixas fora de ordem: IMC 27 vira "Obesidade grau III"; IMC 35 vira "Sobrepeso" |
| jhoinymarlizardi-sudo | `Calculadora-IMC/script.js` | ❌ Mesmo erro de faixas do anterior |

**Como demonstrar:**

1. Extrair `classificarImc(peso, altura)` da versão do **carlos** (a correta) para um arquivo
   `imc.js` com `export`.
2. Escrever os testes em AAA (slide 17), por faixa, com casos de **borda** (slide 29):
   18.4 / 18.5 / 24.9 / 25 / 29.9 / 30 / 39.9 / 40.
3. Mostrar uma entrada inválida (`peso = 0`, `altura = 0`, `NaN`): `toBeNull()` ou texto de erro.
4. **Efeito de impacto:** rodar os **mesmos testes** contra a lógica do marcosxz447l / jhoiny —
   o Vitest mostra o diff exato no terminal (slide 15) e os alunos veem o bug sem abrir o
   navegador. É a resposta concreta ao slide 2.

Matchers que aparecem: `toBe` (texto da faixa e valor do IMC), `toBeCloseTo` (IMC em decimal),
`toBeNull`/`toThrow` (entrada inválida).

### Candidato 2 — Lâmpada (máquina de estados)

`carlosdanielramosleandro43-ctrl/repository_html/lampada/script.js` (mesma lógica em
`repository.html/lampada/`) e `marcosxz447l/JavaScript/script.js`.

- Regra clara: estados `apagada`, `acesa`, `quebrada`; **depois de quebrada, nada muda**.
- Extrair `proximoEstado(estadoAtual, evento)` → `'acesa' | 'apagada' | 'quebrada'`.
- Bom para `describe` com vários `it` (slide 14) e para BDD:
  *Given* lâmpada quebrada, *When* clicar em ligar, *Then* continua quebrada.
- Mostra que `mouseover` e `mouseout` invertem o estado (comportamento curioso para discutir).

### Candidato 3 — Dark mode (introduz o DOM)

`carlosdanielramosleandro43-ctrl/repository_html/JS/script.js` — alterna a classe `dark` e o
texto do botão ("Light Mode"/"Dark Mode").

- Mais avançado: precisa de ambiente de DOM (`jsdom`/`happy-dom`) e `vi.spyOn`.
- Útil para o slide 27: observar `document.body.classList.toggle` com `vi.spyOn`.
- Em `marcosxz447l/DarkMode/DarckMode/script.js` o código tem erros (`getElementByAll`, `Btn`
  indefinido): bom exemplo de "o que o teste teria apanhado".

### Candidato 4 — Carrinho da loja (só para turma avançada)

`marcosvpaz-svg/assets/assets/script.js` (454 linhas, mesma cópia em `assets/projetoFE2/`).

Funções com boa lógica de negócio: `addToCart`, `removeFromCart`, `clearCart` e o filtro
`products.filter` de `renderProducts` (categoria + busca).

- Problema: tudo mistura DOM e `alert(...)` → ótimo para **`vi.fn()`/`vi.spyOn(window,'alert')`**
  (slides 25–27) ao mostrar por que isolar.
- Extrair para funções puras: `adicionarAoCarrinho(carrinho, produto)`,
  `calcularTotal(carrinho)`, `filtrarProdutos(produtos, categoria, termo)`.
- Matchers: `toEqual` (carrinho é array de objetos — armadilha do slide 21), `toContain`,
  `toHaveLength`.

### Fora de escopo (por enquanto)

Projetos só de HTML/CSS: `grid-landing-page`, `news-homepage-main`, `petshop`, `meu-site`,
`Enchente-em-riodosul`, etc. Não têm lógica JavaScript para testar unitariamente.

---

## 5. Mapa: conceito da aula → exemplo dos alunos

| Conceito (slide) | Onde demonstrar |
|---|---|
| `describe` / `it` / AAA (14–17) | `classificarImc` — uma `describe`, um `it` por faixa |
| `toBe` × `toEqual` (20–21) | `toBe` no texto da faixa; `toEqual` no objeto `{ imc, classificacao }` |
| `toContain` / `toBeNull` (22) | `toContain` em lista de classes; `toBeNull` para entrada inválida |
| `vi.fn()` (26) | Passar um `exibirResultado = vi.fn()` para a função do IMC e conferir a chamada |
| `vi.spyOn()` (27) | `vi.spyOn(window, 'alert')` no carrinho (`addToCart`) |
| Mock de API (32–33) | Não há `fetch` nos projetos dos alunos: usar o exemplo do slide 32 (usuário via API) |
| `beforeEach` (35) | Recriar o carrinho vazio antes de cada teste |
| Debate sobre mocks (40–41) | Comparar teste com `alert` mockado × função pura sem mock |

---

## 6. Armadilhas para avisar a turma

- **`type: "module"`** no `package.json` é necessário para `import`/`export` (slide 12).
- Os `script.js` dos alunos **não têm `export`** e dependem do `document`: é preciso
  **extrair** a função, não apenas importar o arquivo.
- Não "consertar" o aluno em silêncio: a lição é mostrar o bug pelo teste.
- Nome de arquivo `repository.html` e `site.html` são **pastas/arquivos com ponto**: cuidado ao
  digitar caminhos.
- Os projetos são de alunos reais: usar o código para ensino, sem expor nome na turma se
  houver constrangimento.

---

## 7. Sugestão de encadeamento no quadro

1. Instalar e configurar o Vitest (scripts `test` e `test:ci`).
2. Pasta de demonstração `aulas/demo-vitest/` com `imc.js` extraído da versão do carlos.
3. Aula ao vivo: escrever os testes de IMC e rodar contra as versões com erro.
4. (Opcional) Lâmpada e carrinho como atividade extra.

**Pergunta para decidir antes da aula:** os testes de demonstração ficam em `aulas/demo-vitest/`
(isolado) ou dentro de `projetos-alunos/` (junto do código dos alunos)? A orientação acima
assume a pasta isolada.
