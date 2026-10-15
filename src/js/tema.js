import {
  ATRIBUTO_TEMA,
  CHAVE_TEMA_SALVO,
  CLASSE_BOTAO_ESCURO,
  CONSULTA_TEMA_ESCURO,
  TEMA_CLARO,
  TEMA_ESCURO,
  TEXTOS_BOTAO_TEMA,
} from "./constantes.js";

/**
 * Lê o tema escolhido antes; o armazenamento pode estar bloqueado (aba anônima etc.).
 * @param {Storage} armazenamento - Onde o tema fica salvo (ex.: localStorage).
 * @returns {string|null} Tema salvo, ou null se não houver ou não der para ler.
 */
function lerTemaSalvo(armazenamento) {
  try {
    const tema = armazenamento.getItem(CHAVE_TEMA_SALVO);
    const temaValido = tema === TEMA_CLARO || tema === TEMA_ESCURO;
    if (!temaValido) return null;

    return tema;
  } catch {
    return null;
  }
}

/**
 * Salva o tema escolhido; se o armazenamento falhar, o tema vale só nesta visita.
 * @param {Storage} armazenamento - Onde o tema fica salvo.
 * @param {string} tema - Tema escolhido.
 * @returns {void}
 */
function salvarTema(armazenamento, tema) {
  try {
    armazenamento.setItem(CHAVE_TEMA_SALVO, tema);
  } catch {
    // Sem armazenamento disponível: a troca continua funcionando sem ser lembrada.
  }
}

/**
 * Descobre o tema em uso: o salvo ou, sem escolha, o do sistema.
 * @param {Storage} armazenamento - Onde o tema fica salvo.
 * @returns {string} TEMA_CLARO ou TEMA_ESCURO.
 */
function obterTemaAtual(armazenamento) {
  const temaSalvo = lerTemaSalvo(armazenamento);
  if (temaSalvo) return temaSalvo;

  const sistemaEscuro = window.matchMedia(CONSULTA_TEMA_ESCURO).matches;
  if (sistemaEscuro) return TEMA_ESCURO;
  return TEMA_CLARO;
}

/**
 * Aplica o tema na página e atualiza o texto e o ícone do botão.
 * @param {string} tema - TEMA_CLARO ou TEMA_ESCURO.
 * @param {HTMLButtonElement} botao - Botão de troca de tema.
 * @returns {void}
 */
function aplicarTema(tema, botao) {
  document.documentElement.setAttribute(ATRIBUTO_TEMA, tema);

  const textos = TEXTOS_BOTAO_TEMA[tema];
  botao.classList.toggle(CLASSE_BOTAO_ESCURO, tema === TEMA_ESCURO);
  botao.setAttribute("aria-label", textos.rotulo);
  const textoBotao = botao.querySelector(".botao-tema__texto");
  if (textoBotao) textoBotao.textContent = textos.texto;
}

/**
 * Liga o botão de tema: aplica o tema inicial e alterna claro/escuro a cada clique.
 * @param {{botao: HTMLButtonElement, armazenamento: Storage}} opcoes
 * @returns {void}
 */
export function iniciarTema({ botao, armazenamento }) {
  if (!botao) return;

  aplicarTema(obterTemaAtual(armazenamento), botao);
  botao.addEventListener("click", () => {
    const temaAtual = document.documentElement.getAttribute(ATRIBUTO_TEMA);
    let novoTema = TEMA_ESCURO;
    if (temaAtual === TEMA_ESCURO) novoTema = TEMA_CLARO;

    aplicarTema(novoTema, botao);
    salvarTema(armazenamento, novoTema);
  });
}
