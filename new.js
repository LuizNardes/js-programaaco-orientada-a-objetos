/* function User (nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`
    }
} 
 */
/* const novoUser = new User('Luiz', 'l@l.com')
console.log(novoUser.exibirInfos()) */
/* 
function Admin(role) {
    User.call(this, 'Luiz', 'l@l.com')
    this.role = role || 'estudante'
}
 */
/* Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)
 */
const user = {
    init: function(nome,email) {
        this.nome = nome 
        this.email = email
    },
    
    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('luiz','luiz@.com')
console.log(novoUser.exibirInfos())

/* const novoUser = Object.create(user)
console.log(novoUser.exibirInfos('Luiz'))
console.log(user.isPrototypeOf(novoUser)) */