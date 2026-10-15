// Matérias do Técnico em Informática exibidas no dashboard.
// Para incluir uma matéria nova, basta acrescentar um objeto nesta lista.
// cor: azul | violeta | verde | laranja (modificadores em src/estilos/cartoes.css).

export const MATERIAS = [
  {
    sigla: "TF",
    nome: "Testes de Frontend",
    descricao: "Garantir que as interfaces funcionam como esperado, do componente à tela inteira.",
    topicos: ["Testes unitários", "Testes de componentes", "Testes ponta a ponta"],
    situacao: "Em andamento",
    cor: "azul",
  },
  {
    sigla: "CF",
    nome: "Codificação para Frontend",
    descricao: "Construir páginas com HTML semântico, CSS responsivo e JavaScript moderno.",
    topicos: ["HTML semântico", "CSS responsivo", "JavaScript"],
    situacao: "Em andamento",
    cor: "violeta",
  },
  {
    sigla: "PF",
    nome: "Projeto de Frontend",
    descricao: "Planejar e entregar uma aplicação web completa, do protótipo à publicação.",
    topicos: ["Prototipação", "Acessibilidade", "Publicação"],
    situacao: "Em andamento",
    cor: "verde",
  },
];
