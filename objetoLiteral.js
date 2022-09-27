const user = {
    nome: "Luiz",
    email: "l@n.com",
    nascimento: "23/03/1997",
    role: "estudante",
    ativo: true,
    exibirInfos() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome:"Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log('ccurso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()