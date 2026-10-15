# Sugestão de projeto — `projeto-frontend-com-testes`

Proposta de **um único projeto** que reúne as ideias dos projetos dos alunos, com a lógica
separada da tela para servir de base à [Aula 03 (Vitest)](ORIENTACAO-AULA-03.md). A pasta
pronta está em [`projeto-frontend-com-testes/`](projeto-frontend-com-testes/index.html).

> Os testes **não vêm prontos**: o projeto só deixa a lógica em funções puras e exportadas, para
> que o professor e a turma escrevam os testes ao vivo (regra do projeto: testes só em bug).

---

## 1. O que cada aluno contribui

| Módulo do projeto | Origem (aluno / arquivo) | O que foi aproveitado | O que foi corrigido |
|---|---|---|---|
| **Calculadora de IMC** | carlosdanielramosleandro43-ctrl · `calculadoraIMC` (referência); mesma ideia em marialmmarcelino-blip, marcosvpaz-svg, marcosxz447l, jhoinymarlizardi-sudo | Fórmula, validação de valores e 6 faixas de classificação | Faixas fora de ordem (marcosxz447l e jhoinymarlizardi-sudo), `.volue` e `ariaValueMax` no lugar de `.value` |
| **Lâmpada** | carlosdanielramosleandro43-ctrl · `repository_html/lampada`; marcosxz447l · `JavaScript` | Estados acesa / apagada / quebrada e a regra "quebrada não muda mais" | Lógica de estado separada do `src` da imagem |
| **Modo escuro** | carlosdanielramosleandro43-ctrl · `repository_html/JS`; marcosxz447l · `DarkMode` | Alternar classe `dark` e o texto do botão | Erros `getElementByAll` e `Btn` indefinido; passa a lembrar a escolha |
| **Loja com carrinho** | marcosvpaz-svg · `assets/assets/script.js` | Lista de produtos, filtro por categoria e busca, adicionar e remover do carrinho, total | Cálculo sem `alert` e sem DOM; produtos sem imagens externas |

Projetos só de HTML/CSS (`grid-landing-page`, `petshop`, `news-homepage-main`…) inspiram o
**layout** (grade de cartões, tema, tipografia), mas não têm lógica para testar.

---

## 2. Estrutura proposta

```
projeto-frontend-com-testes/
├── index.html            # estrutura: 4 seções (IMC, Lâmpada, Loja, Tema)
├── css/estilo.css        # tokens claro/escuro e componentes
├── js/
│   ├── imc.js            # lógica pura: calcularImc, classificarImc
│   ├── lampada.js        # lógica pura: proximoEstadoLampada
│   ├── carrinho.js       # lógica pura: adicionar, remover, total, filtrar
│   ├── tema.js           # lógica pura: alternarTema
│   ├── dados-produtos.js # lista de produtos
│   └── app.js            # única parte que toca o DOM
└── README.md             # como rodar e onde escrever os testes
```

Regra de ouro: **`imc.js`, `lampada.js`, `carrinho.js` e `tema.js` não usam `document`,
`window` nem `alert`**. Só `app.js` lê e escreve na tela.

---

## 3. Funções que a turma vai testar

| Arquivo | Função | Casos para a aula |
|---|---|---|
| `imc.js` | `calcularImc(peso, altura)` | 70 kg e 1,75 m → 22,9; peso ou altura ≤ 0 → `null` |
| `imc.js` | `classificarImc(imc)` | bordas 18,5 · 25 · 30 · 35 · 40 e `null` |
| `lampada.js` | `proximoEstadoLampada(estado, evento)` | quebrada continua quebrada; duplo clique quebra |
| `carrinho.js` | `adicionarAoCarrinho(carrinho, produto)` | item novo e item repetido (soma quantidade) |
| `carrinho.js` | `removerDoCarrinho(carrinho, id)` | remove só o item; id inexistente não muda nada |
| `carrinho.js` | `calcularTotal(carrinho)` | vazio = 0; vários itens e quantidades |
| `carrinho.js` | `filtrarProdutos(produtos, filtro)` | categoria, busca sem diferenciar maiúsculas, os dois juntos |
| `tema.js` | `alternarTema(temaAtual)` | `claro` ↔ `escuro` |

Ligação com a aula: `toBe` (texto da faixa), `toEqual` (carrinho é lista de objetos), `toContain`,
`toBeNull` (entrada inválida) e `vi.fn()` para conferir que `app.js` chama a função certa.

---

## 4. Como evoluir depois

1. Instalar o Vitest no projeto raiz e criar os `*.test.js` ao lado dos módulos.
2. Acrescentar `vi.spyOn` em `localStorage` para o tema.
3. Trocar a lista de produtos por uma chamada `fetch` e simulá-la com `vi.fn()` (slides 32–33).
