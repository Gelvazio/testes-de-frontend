// Valores fixos do dashboard: seletores, tema e efeitos.

export const ID_LISTA_MATERIAS = "lista-materias";
export const ID_MODELO_CARTAO = "modelo-cartao";
export const ID_TOTAL_MATERIAS = "total-materias";
export const ID_BOTAO_TEMA = "botao-tema";

export const CHAVE_TEMA_SALVO = "testes-de-frontend:tema";
export const TEMA_CLARO = "claro";
export const TEMA_ESCURO = "escuro";
export const ATRIBUTO_TEMA = "data-tema";
export const CONSULTA_TEMA_ESCURO = "(prefers-color-scheme: dark)";
export const CLASSE_BOTAO_ESCURO = "botao-tema--escuro";

export const TEXTOS_BOTAO_TEMA = {
  [TEMA_CLARO]: { texto: "Tema escuro", rotulo: "Mudar para o tema escuro" },
  [TEMA_ESCURO]: { texto: "Tema claro", rotulo: "Mudar para o tema claro" },
};

export const PREFIXO_CLASSE_COR = "cartao-materia--";
export const CLASSE_TOPICO = "cartao-materia__topico";
export const ATRASO_ENTRADA_POR_CARTAO_MS = 90;
