import {
  ATRASO_ENTRADA_POR_CARTAO_MS,
  CLASSE_TOPICO,
  PREFIXO_CLASSE_COR,
} from "./constantes.js";

/**
 * Preenche um elemento do cartão com texto, se ele existir no modelo.
 * @param {Element} cartao - Cartão clonado do modelo.
 * @param {string} seletor - Seletor do elemento dentro do cartão.
 * @param {string} texto - Texto a exibir.
 * @returns {void}
 */
function preencherTexto(cartao, seletor, texto) {
  const elemento = cartao.querySelector(seletor);
  if (!elemento) return;

  elemento.textContent = texto;
}

/**
 * Monta a lista de tópicos (pílulas) da matéria.
 * @param {Element} cartao - Cartão clonado do modelo.
 * @param {string[]} topicos - Tópicos da matéria.
 * @returns {void}
 */
function preencherTopicos(cartao, topicos) {
  const lista = cartao.querySelector(".cartao-materia__topicos");
  if (!lista) return;

  const itens = topicos.map((topico) => {
    const item = document.createElement("li");
    item.className = CLASSE_TOPICO;
    item.textContent = topico;
    return item;
  });
  lista.replaceChildren(...itens);
}

/**
 * Cria o cartão de uma matéria a partir do <template> da página.
 * @param {HTMLTemplateElement} modelo - Modelo do cartão.
 * @param {{sigla: string, nome: string, descricao: string, topicos: string[],
 *   situacao: string, cor: string}} materia - Matéria a exibir.
 * @param {number} posicao - Posição na lista (define o atraso da animação de entrada).
 * @returns {HTMLElement} Item <li> do cartão.
 */
export function criarCartaoMateria(modelo, materia, posicao) {
  const cartao = modelo.content.firstElementChild.cloneNode(true);

  cartao.classList.add(PREFIXO_CLASSE_COR + materia.cor);
  cartao.style.setProperty("--atraso-entrada", `${posicao * ATRASO_ENTRADA_POR_CARTAO_MS}ms`);
  preencherTexto(cartao, ".cartao-materia__sigla", materia.sigla);
  preencherTexto(cartao, ".cartao-materia__situacao", materia.situacao);
  preencherTexto(cartao, ".cartao-materia__nome", materia.nome);
  preencherTexto(cartao, ".cartao-materia__descricao", materia.descricao);
  preencherTopicos(cartao, materia.topicos);
  return cartao;
}

/**
 * Exibe todas as matérias na lista, substituindo o conteúdo anterior.
 * @param {{lista: Element, modelo: HTMLTemplateElement, materias: object[]}} opcoes
 * @returns {HTMLElement[]} Cartões criados.
 * @throws {Error} Se a lista ou o modelo não existirem na página.
 */
export function renderizarMaterias({ lista, modelo, materias }) {
  if (!lista || !modelo) throw new Error("Lista de matérias ou modelo do cartão não encontrado.");

  const cartoes = materias.map((materia, posicao) => criarCartaoMateria(modelo, materia, posicao));
  lista.replaceChildren(...cartoes);
  return cartoes;
}
