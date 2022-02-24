const cliente = {
    nome: "André",
    idade: 36,
    cpf: "56479832185",
    email: "andre@email.com",
    fones:["55912345498", "5521988743124"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataDeNascimento: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)