const cliente = {
    nome: "André",
    idade: 36,
    cpf: "56479832185",
    email: "andre@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos de idade`)

console.log(`Os três primeiros dígitos do meu CPF são ${cliente.cpf.substring(0,3)}`)