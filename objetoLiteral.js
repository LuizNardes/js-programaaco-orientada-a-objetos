const user = {
    nome: "Luiz",
    email: "l@n.com",
    nascimento: "23/03/1997",
    role: "admin",
    ativo: true,
    exibirInfos() {
        console.log(this.nome, this.email);
    }
}

/* user.exibirInfos();
const exibir = user.exibirInfos;
exibir(); */

const exibir = function() {
    console.log(this.nome);
}

const exibirNome = exibir.bind(user);
exibirNome();
exibir();