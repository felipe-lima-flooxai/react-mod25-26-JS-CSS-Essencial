//1
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log("Soma:", soma);

//2
const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

const contagem = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});

console.log("Contagem de frutas:", contagem);

//3
const carrinho = [
  { nome: "Camisa", preco: 49.9 },
  { nome: "Calça", preco: 89.9 },
  { nome: "Tênis", preco: 149.9 }
];

const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);

console.log("Total da compra: R$", total.toFixed(2));