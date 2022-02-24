 const clientes = [
    {
        nome: "André",
        idade: 36,
        cpf: "56479832185",
        email: "andre@email.com",
        fones:["55912345498", "5521988743124"],
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataDeNascimento: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "filha",
            dataDeNascimento: "04/02/2014"
        }],
    },
    {
        nome: "Juliana",
        cpf: "46587925835",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataDeNascimento: "30/08/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)
console.table(clientes)




 