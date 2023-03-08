const App = require("./app");

App.createUser('João', 'joao@gmail.com')
App.createUser('Emanuel', 'emanuel@gmail.com')

console.table(App.getUser())

App.deposit('joao@gmail.com', 1000)
App.deposit('emanuel@gmail.com', 1000)

App.transfer('joao@gmail.com','emanuel@gmail.com',500)

App.loan('joao@gmail.com',10000,10)

console.log(App.findUser('joao@gmail.com').account.balance)
console.table(App.findUser('joao@gmail.com').account.loan)
console.log(App.findUser('emanuel@gmail.com').account.balance)