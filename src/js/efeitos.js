/**
 * Atualiza a posição do brilho do cartão conforme o cursor (variáveis CSS --mouse-x/--mouse-y).
 * @param {HTMLElement} cartao - Cartão que recebeu o movimento.
 * @param {PointerEvent} evento - Evento de movimento do ponteiro.
 * @returns {void}
 */
function moverBrilho(cartao, evento) {
  const area = cartao.getBoundingClientRect();
  const posicaoX = evento.clientX - area.left;
  const posicaoY = evento.clientY - area.top;

  cartao.style.setProperty("--mouse-x", `${posicaoX}px`);
  cartao.style.setProperty("--mouse-y", `${posicaoY}px`);
}

/**
 * Liga o efeito de brilho que acompanha o cursor em cada cartão.
 * @param {HTMLElement[]} cartoes - Cartões das matérias.
 * @returns {void}
 */
export function ativarBrilhoNosCartoes(cartoes) {
  cartoes.forEach((cartao) => {
    cartao.addEventListener("pointermove", (evento) => moverBrilho(cartao, evento));
  });
}
