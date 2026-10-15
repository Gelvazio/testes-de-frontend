/**
 * Regras do tema claro/escuro (lógica pura, sem DOM).
 * Origem: darkmode de carlosdanielramosleandro43-ctrl e marcosxz447l.
 */

export const TEMA_CLARO = 'claro';
export const TEMA_ESCURO = 'escuro';
export const ROTULO_IR_PARA_CLARO = 'Light Mode';
export const ROTULO_IR_PARA_ESCURO = 'Dark Mode';

/**
 * Alterna entre o tema claro e o escuro.
 * @param {string} temaAtual - claro ou escuro.
 * @returns {string} O tema oposto.
 */
export function alternarTema(temaAtual) {
  return temaAtual === TEMA_ESCURO ? TEMA_CLARO : TEMA_ESCURO;
}

/**
 * Devolve o texto do botão que leva ao outro tema.
 * @param {string} temaAtual - claro ou escuro.
 * @returns {string} "Light Mode" quando está escuro, "Dark Mode" quando está claro.
 */
export function rotuloBotaoTema(temaAtual) {
  return temaAtual === TEMA_ESCURO ? ROTULO_IR_PARA_CLARO : ROTULO_IR_PARA_ESCURO;
}
