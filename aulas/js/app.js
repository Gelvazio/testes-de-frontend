/**
 * Carrega o Markdown da orientação, converte e monta a página com o índice.
 * Depende de converterMarkdown (js/markdown.js).
 */

const ARQUIVO_MARKDOWN = 'ORIENTACAO-AULA-03.md';
const TITULO_INDICE = 'Índice';
const NIVEL_TITULO_PRINCIPAL = 'H2';
const MSG_CARREGANDO = 'Carregando orientação...';
const MSG_ERRO =
  'Não foi possível ler o Markdown. Abra esta página por um servidor ' +
  '(ex.: npm run dev e acesse /aulas/), pois o navegador bloqueia a leitura de ' +
  'arquivos locais abertos direto do disco.';

/**
 * Busca o texto do arquivo Markdown.
 * @param {string} caminho - Caminho relativo do arquivo.
 * @returns {Promise<string>} Conteúdo do arquivo.
 * @throws {Error} Se a resposta HTTP não for bem-sucedida.
 */
async function carregarMarkdown(caminho) {
  const resposta = await fetch(caminho);
  if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
  return resposta.text();
}

/**
 * Cria o índice lateral a partir dos títulos H2 e H3 do documento.
 * @param {HTMLElement} documento - Elemento com o HTML convertido.
 * @param {HTMLElement} indice - Elemento <nav> do índice.
 */
function montarIndice(documento, indice) {
  const titulos = documento.querySelectorAll('h2, h3');
  if (titulos.length === 0) return;

  const lista = document.createElement('ul');
  lista.className = 'indice__lista';
  titulos.forEach((titulo) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    const eSubtitulo = titulo.tagName !== NIVEL_TITULO_PRINCIPAL;
    link.className = eSubtitulo ? 'indice__link indice__link--sub' : 'indice__link';
    link.href = `#${titulo.id}`;
    link.textContent = titulo.textContent;
    item.append(link);
    lista.append(item);
  });

  const cabecalho = document.createElement('p');
  cabecalho.className = 'indice__titulo';
  cabecalho.textContent = TITULO_INDICE;
  indice.replaceChildren(cabecalho, lista);
}

/**
 * Mostra uma mensagem de erro no lugar do documento.
 * @param {HTMLElement} documento - Elemento do documento.
 * @param {HTMLElement} indice - Elemento do índice (escondido no erro).
 */
function mostrarErro(documento, indice) {
  const mensagem = document.createElement('p');
  mensagem.className = 'estado estado--erro';
  mensagem.textContent = MSG_ERRO;
  documento.replaceChildren(mensagem);
  indice.hidden = true;
}

/**
 * Inicializa a página: lê o Markdown, converte e monta o índice.
 */
async function iniciarPagina() {
  const documento = document.querySelector('#documento');
  const indice = document.querySelector('#indice');
  if (!documento || !indice) return;

  documento.firstElementChild.textContent = MSG_CARREGANDO;
  try {
    const markdown = await carregarMarkdown(ARQUIVO_MARKDOWN);
    documento.innerHTML = converterMarkdown(markdown);
    montarIndice(documento, indice);
  } catch (erro) {
    mostrarErro(documento, indice);
  }
}

iniciarPagina();
