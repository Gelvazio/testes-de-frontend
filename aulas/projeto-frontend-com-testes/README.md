# projeto-frontend-com-testes

Projeto único que mescla os projetos dos alunos (IMC, lâmpada, modo escuro e loja com
carrinho). Detalhes da mescla: [`../SUGESTAO-PROJETO.md`](../SUGESTAO-PROJETO.md).

## Como abrir

Os JavaScript são módulos (`import`/`export`), então a página precisa de um servidor:

```bash
npm run dev
```

e acesse `/aulas/projeto-frontend-com-testes/`. Também funciona com o Live Server.

## Onde ficam os testes (para a Aula 03)

Este projeto **não traz arquivos de teste**; eles serão escritos ao vivo na aula. A lógica está
pronta para isso, em funções puras e exportadas, sem `document` nem `alert`:

| Arquivo | Funções |
|---|---|
| `js/imc.js` | `calcularImc`, `classificarImc` |
| `js/lampada.js` | `proximoEstadoLampada` |
| `js/carrinho.js` | `adicionarAoCarrinho`, `removerDoCarrinho`, `calcularTotal`, `contarItens` |
| `js/carrinho.js` | `filtrarProdutos`, `formatarPreco` |
| `js/tema.js` | `alternarTema`, `rotuloBotaoTema` |

Convenção (slide 13): `imc.test.js` ao lado de `imc.js`. `js/app.js` é a única parte que toca
a tela.
