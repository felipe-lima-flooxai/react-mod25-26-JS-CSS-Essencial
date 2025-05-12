const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }

}

pessoa.falar()

//da problema por causa do escopo do this
const falar = pessoa.falar
falar()
//professor falou que é conflito entre funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()