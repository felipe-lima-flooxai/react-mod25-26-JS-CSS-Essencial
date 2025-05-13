//exemplo 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(numero => numero % 2 === 0);

console.log("Números pares:", pares);

//exemplo 2
const usuarios = [
  { nome: "Ana", ativo: true },
  { nome: "Bruno", ativo: false },
  { nome: "Carlos", ativo: true }
];

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);

console.log("Usuários ativos:", usuariosAtivos);

//exemplo 3
const palavras = ["sol", "lua", "universo", "céu", "estrela"];

const longas = palavras.filter(palavra => palavra.length > 3);

console.log("Palavras com mais de 3 letras:", longas);