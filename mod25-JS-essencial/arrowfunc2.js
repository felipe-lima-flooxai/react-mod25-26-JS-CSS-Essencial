const pessoa = {
  nome: "João",
  idade: 25,

  // Função tradicional
  falarComum: function () {
    console.log("falarComum -> this.nome:", this.nome); // "João"

    setTimeout(function () {
      console.log("setTimeout (comum) -> this.nome:", this.nome); // undefined ou erro, pois o 'this' aqui mudou!
    }, 1000);
  },

  // Função arrow
  falarArrow: function () {
    console.log("falarArrow -> this.nome:", this.nome); // "João"

    setTimeout(() => {
      console.log("setTimeout (arrow) -> this.nome:", this.nome); // "João", porque a arrow mantém o this da função acima
    }, 1000);
  }
};

pessoa.falarComum();  // 'this' muda dentro de setTimeout (função comum)
pessoa.falarArrow();  // 'this' continua o mesmo dentro de setTimeout (arrow function)