/**
 * Máquina de estados da lâmpada (lógica pura, sem DOM).
 * Origem: lampada de carlosdanielramosleandro43-ctrl e JavaScript de marcosxz447l.
 */

export const ESTADO_APAGADA = 'apagada';
export const ESTADO_ACESA = 'acesa';
export const ESTADO_QUEBRADA = 'quebrada';

export const EVENTO_LIGAR = 'ligar';
export const EVENTO_DESLIGAR = 'desligar';
export const EVENTO_MOUSE_ENTRAR = 'mouse-entrar';
export const EVENTO_MOUSE_SAIR = 'mouse-sair';
export const EVENTO_DUPLO_CLIQUE = 'duplo-clique';

/** Eventos de mouse invertem o estado (comportamento do projeto original). */
const EVENTOS_QUE_INVERTEM = [EVENTO_MOUSE_ENTRAR, EVENTO_MOUSE_SAIR];

/**
 * Inverte entre acesa e apagada.
 * @param {string} estado - Estado atual (apagada ou acesa).
 * @returns {string} Estado oposto.
 */
function inverterEstado(estado) {
  return estado === ESTADO_ACESA ? ESTADO_APAGADA : ESTADO_ACESA;
}

/**
 * Calcula o estado seguinte da lâmpada.
 * @param {string} estadoAtual - apagada, acesa ou quebrada.
 * @param {string} evento - Um dos EVENTO_* exportados.
 * @returns {string} Novo estado. Uma lâmpada quebrada nunca muda.
 */
export function proximoEstadoLampada(estadoAtual, evento) {
  if (estadoAtual === ESTADO_QUEBRADA) return ESTADO_QUEBRADA;
  if (evento === EVENTO_DUPLO_CLIQUE) return ESTADO_QUEBRADA;
  if (evento === EVENTO_LIGAR) return ESTADO_ACESA;
  if (evento === EVENTO_DESLIGAR) return ESTADO_APAGADA;
  if (EVENTOS_QUE_INVERTEM.includes(evento)) return inverterEstado(estadoAtual);

  return estadoAtual;
}
