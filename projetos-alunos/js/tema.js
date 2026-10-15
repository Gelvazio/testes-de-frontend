/**
 * Alterna o tema claro/escuro da página e lembra a escolha no navegador.
 * Sem escolha salva, a página segue a preferência do sistema (CSS).
 */

const CHAVE_TEMA = 'projetos-alunos:tema';
const TEMA_CLARO = 'claro';
const TEMA_ESCURO = 'escuro';
const CONSULTA_TEMA_ESCURO = '(prefers-color-scheme: dark)';
const ROTULOS_BOTAO = {
  [TEMA_CLARO]: { icone: '🌙', texto: 'Ativar tema escuro' },
  [TEMA_ESCURO]: { icone: '☀️', texto: 'Ativar tema claro' },
};

/**
 * Lê o tema salvo; o armazenamento pode estar bloqueado (aba anônima).
 * @returns {string|null} Tema salvo ou null se não houver.
 */
function lerTemaSalvo() {
  try {
    return localStorage.getItem(CHAVE_TEMA);
  } catch {
    return null;
  }
}

/**
 * Salva o tema escolhido, ignorando falha do armazenamento.
 * @param {string} tema - Tema a salvar.
 */
function salvarTema(tema) {
  try {
    localStorage.setItem(CHAVE_TEMA, tema);
  } catch {
    // Sem armazenamento a troca vale só até recarregar a página.
  }
}

/**
 * Descobre o tema em uso: o salvo ou, sem ele, o do sistema.
 * @returns {string} TEMA_CLARO ou TEMA_ESCURO.
 */
function obterTemaAtual() {
  const temaSalvo = lerTemaSalvo();
  const temaSalvoValido = temaSalvo === TEMA_CLARO || temaSalvo === TEMA_ESCURO;
  if (temaSalvoValido) return temaSalvo;

  const sistemaEscuro = window.matchMedia(CONSULTA_TEMA_ESCURO).matches;
  if (sistemaEscuro) return TEMA_ESCURO;
  return TEMA_CLARO;
}

/**
 * Aplica o tema na página e atualiza o botão.
 * @param {string} tema - TEMA_CLARO ou TEMA_ESCURO.
 * @param {HTMLButtonElement} botao - Botão de troca de tema.
 */
function aplicarTema(tema, botao) {
  document.documentElement.dataset.tema = tema;
  const rotulo = ROTULOS_BOTAO[tema];
  botao.textContent = rotulo.icone;
  botao.setAttribute('aria-label', rotulo.texto);
  botao.title = rotulo.texto;
}

/**
 * Liga o botão de tema: aplica o tema inicial e alterna a cada clique.
 * @param {HTMLButtonElement|null} botao - Botão de troca de tema.
 */
function iniciarTema(botao) {
  if (!botao) return;

  aplicarTema(obterTemaAtual(), botao);
  botao.addEventListener('click', () => {
    const estaEscuro = document.documentElement.dataset.tema === TEMA_ESCURO;
    const novoTema = estaEscuro ? TEMA_CLARO : TEMA_ESCURO;
    salvarTema(novoTema);
    aplicarTema(novoTema, botao);
  });
}

iniciarTema(document.querySelector('#botao-tema'));
