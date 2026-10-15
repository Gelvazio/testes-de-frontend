import { renderizarMaterias } from "./cartoes.js";
import {
  ID_BOTAO_TEMA,
  ID_LISTA_MATERIAS,
  ID_MODELO_CARTAO,
  ID_TOTAL_MATERIAS,
} from "./constantes.js";
import { ativarBrilhoNosCartoes } from "./efeitos.js";
import { MATERIAS } from "./materias.js";
import { iniciarTema } from "./tema.js";

/**
 * Mostra no cabeçalho quantas matérias existem.
 * @param {number} quantidade - Total de matérias.
 * @returns {void}
 */
function exibirTotalMaterias(quantidade) {
  const total = document.getElementById(ID_TOTAL_MATERIAS);
  if (!total) return;

  total.textContent = String(quantidade);
}

/**
 * Obtém o localStorage; o simples acesso a ele pode falhar com o armazenamento bloqueado.
 * @returns {Storage|null} localStorage, ou null se estiver indisponível.
 */
function obterArmazenamento() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/**
 * Inicia o dashboard: tema, cartões das matérias e efeitos.
 * @returns {void}
 */
function iniciarDashboard() {
  iniciarTema({
    botao: document.getElementById(ID_BOTAO_TEMA),
    armazenamento: obterArmazenamento(),
  });

  const cartoes = renderizarMaterias({
    lista: document.getElementById(ID_LISTA_MATERIAS),
    modelo: document.getElementById(ID_MODELO_CARTAO),
    materias: MATERIAS,
  });
  exibirTotalMaterias(MATERIAS.length);
  ativarBrilhoNosCartoes(cartoes);
}

iniciarDashboard();
