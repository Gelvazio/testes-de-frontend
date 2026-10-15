/**
 * Conversor de Markdown para HTML, pequeno e sem dependências.
 * Cobre o que a orientação usa: títulos, tabelas, listas, código, citações,
 * linhas horizontais, negrito, itálico, código inline e links.
 */

const REGEX_CERCA = /^\s*```/;
const REGEX_TITULO = /^(#{1,6})\s+(.*)$/;
const REGEX_LINHA_TABELA = /^\s*\|.*\|\s*$/;
const REGEX_SEPARADOR_TABELA = /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/;
const REGEX_ITEM_LISTA = /^(\s*)([-*]|\d+\.)\s+(.*)$/;
const REGEX_HORIZONTAL = /^\s*(-{3,}|\*{3,})\s*$/;

/**
 * Escapa caracteres especiais do HTML.
 * @param {string} texto - Texto puro.
 * @returns {string} Texto seguro para inserir como HTML.
 */
function escaparHtml(texto) {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Converte a marcação em linha (código, negrito, itálico e links).
 * @param {string} texto - Texto de uma linha ou célula.
 * @returns {string} HTML da linha.
 */
function converterEmLinha(texto) {
  const codigos = [];
  let html = escaparHtml(texto).replace(/`([^`]+)`/g, (_, codigo) => {
    codigos.push(`<code>${codigo}</code>`);
    return `\u0000${codigos.length - 1}\u0000`;
  });
  html = html
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
  return html.replace(/\u0000(\d+)\u0000/g, (_, indice) => codigos[Number(indice)]);
}

/**
 * Gera um identificador (âncora) a partir do texto de um título.
 * @param {string} texto - Texto do título.
 * @returns {string} Identificador em minúsculas, sem acentos nem símbolos.
 */
function gerarIdentificador(texto) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Divide uma linha de tabela em células.
 * @param {string} linha - Linha no formato `| a | b |`.
 * @returns {string[]} Conteúdo de cada célula.
 */
function dividirCelulas(linha) {
  const semBordas = linha.trim().replace(/^\|/, '').replace(/\|$/, '');
  return semBordas.split(/(?<!\\)\|/).map((celula) => celula.replace(/\\\|/g, '|').trim());
}

/**
 * Converte um bloco de linhas de tabela em HTML.
 * @param {string[]} linhas - Cabeçalho, separador e linhas de dados.
 * @returns {string} HTML da tabela.
 */
function converterTabela(linhas) {
  const [cabecalho, , ...corpo] = linhas;
  const titulos = dividirCelulas(cabecalho).map((c) => `<th>${converterEmLinha(c)}</th>`);
  const linhasHtml = corpo.map((linha) => {
    const celulas = dividirCelulas(linha).map((c) => `<td>${converterEmLinha(c)}</td>`);
    return `<tr>${celulas.join('')}</tr>`;
  });
  return (
    '<div class="tabela-rolagem"><table>' +
    `<thead><tr>${titulos.join('')}</tr></thead>` +
    `<tbody>${linhasHtml.join('')}</tbody></table></div>`
  );
}

/**
 * Converte uma sequência de itens de lista (um nível) em HTML.
 * @param {string[]} linhas - Linhas consecutivas de lista.
 * @returns {string} HTML da lista.
 */
function converterLista(linhas) {
  const ordenada = /^\s*\d+\./.test(linhas[0]);
  const textos = [];
  linhas.forEach((linha) => {
    const item = linha.match(REGEX_ITEM_LISTA);
    if (item) textos.push(item[3]);
    else textos[textos.length - 1] += ` ${linha.trim()}`;
  });
  const itens = textos.map((texto) => `<li>${converterEmLinha(texto)}</li>`);
  if (!ordenada) return `<ul>${itens.join('')}</ul>`;
  const inicio = parseInt(linhas[0].trim(), 10);
  return `<ol start="${inicio}">${itens.join('')}</ol>`;
}

/**
 * Converte um título em HTML com âncora.
 * @param {string} marcas - Sequência de `#`.
 * @param {string} texto - Texto do título.
 * @returns {string} HTML do título.
 */
function converterTitulo(marcas, texto) {
  const nivel = marcas.length;
  const identificador = gerarIdentificador(texto);
  return `<h${nivel} id="${identificador}">${converterEmLinha(texto)}</h${nivel}>`;
}

/**
 * Lê as linhas seguintes enquanto a condição for verdadeira.
 * @param {string[]} linhas - Todas as linhas do documento.
 * @param {number} inicio - Índice da primeira linha do bloco.
 * @param {(linha: string) => boolean} pertence - Regra de pertencimento ao bloco.
 * @returns {string[]} Linhas do bloco.
 */
function coletarBloco(linhas, inicio, pertence) {
  const bloco = [];
  for (let i = inicio; i < linhas.length && pertence(linhas[i]); i += 1) bloco.push(linhas[i]);
  return bloco;
}

/**
 * Converte um bloco de código cercado por ``` em HTML.
 * @param {string[]} linhas - Todas as linhas do documento.
 * @param {number} inicio - Índice da linha de abertura da cerca.
 * @returns {{html: string, consumidas: number}} HTML e total de linhas usadas.
 */
function converterCodigo(linhas, inicio) {
  const recuo = linhas[inicio].match(/^\s*/)[0].length;
  const corpo = [];
  let i = inicio + 1;
  while (i < linhas.length && !REGEX_CERCA.test(linhas[i])) {
    corpo.push(linhas[i].slice(Math.min(recuo, linhas[i].length)));
    i += 1;
  }
  const html = `<pre><code>${escaparHtml(corpo.join('\n'))}</code></pre>`;
  return { html, consumidas: i - inicio + 1 };
}

/**
 * Converte um parágrafo ou citação a partir de linhas consecutivas.
 * @param {string[]} bloco - Linhas do bloco.
 * @param {boolean} eCitacao - Se o bloco é uma citação (`>`).
 * @returns {string} HTML do bloco.
 */
function converterTexto(bloco, eCitacao) {
  const limpas = bloco.map((linha) => (eCitacao ? linha.replace(/^>\s?/, '') : linha));
  const html = converterEmLinha(limpas.join(' ').trim());
  return eCitacao ? `<blockquote><p>${html}</p></blockquote>` : `<p>${html}</p>`;
}

/**
 * Descobre o bloco que começa na linha informada e o converte.
 * @param {string[]} linhas - Todas as linhas do documento.
 * @param {number} i - Índice da linha atual.
 * @returns {{html: string, consumidas: number}} HTML e total de linhas usadas.
 */
function converterBloco(linhas, i) {
  const linha = linhas[i];
  const titulo = linha.match(REGEX_TITULO);
  if (REGEX_CERCA.test(linha)) return converterCodigo(linhas, i);
  if (titulo) return { html: converterTitulo(titulo[1], titulo[2]), consumidas: 1 };
  if (REGEX_HORIZONTAL.test(linha)) return { html: '<hr />', consumidas: 1 };

  const separador = linhas[i + 1] || '';
  const eTabela = REGEX_LINHA_TABELA.test(linha) && REGEX_SEPARADOR_TABELA.test(separador);
  if (eTabela) {
    const bloco = coletarBloco(linhas, i, (l) => REGEX_LINHA_TABELA.test(l));
    return { html: converterTabela(bloco), consumidas: bloco.length };
  }
  if (REGEX_ITEM_LISTA.test(linha)) {
    const eContinuacao = (l) => /^\s+\S/.test(l) && !REGEX_CERCA.test(l);
    const bloco = coletarBloco(linhas, i, (l) => REGEX_ITEM_LISTA.test(l) || eContinuacao(l));
    return { html: converterLista(bloco), consumidas: bloco.length };
  }
  const eCitacao = linha.startsWith('>');
  const pertenceAoTexto = (l) =>
    l.trim() !== '' && l.startsWith('>') === eCitacao && !REGEX_ITEM_LISTA.test(l);
  const bloco = coletarBloco(linhas, i, pertenceAoTexto);
  return { html: converterTexto(bloco, eCitacao), consumidas: Math.max(bloco.length, 1) };
}

/**
 * Converte um documento Markdown inteiro em HTML.
 * @param {string} markdown - Texto em Markdown.
 * @returns {string} HTML correspondente.
 */
function converterMarkdown(markdown) {
  const linhas = markdown.replace(/\r\n/g, '\n').split('\n');
  const partes = [];
  let i = 0;
  while (i < linhas.length) {
    if (linhas[i].trim() === '') {
      i += 1;
      continue;
    }
    const { html, consumidas } = converterBloco(linhas, i);
    partes.push(html);
    i += consumidas;
  }
  return partes.join('\n');
}
