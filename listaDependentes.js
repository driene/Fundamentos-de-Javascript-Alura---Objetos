const cliente = {
    nome: "André",
    idade: 36,
    cpf: "56479832185",
    email: "andre@email.com",
    fones:["55912345498", "5521988743124"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataDeNascimento: "20/03/2011"
    }] 
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataDeNascimento: "04/01/2014"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataDeNascimento==="04/01/2014")

console.log(filhaMaisNova[0].nome)
console.log(filhaMaisNova)