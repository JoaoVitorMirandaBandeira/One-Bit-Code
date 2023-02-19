const Author = require("./author");




const joao = new Author('João')
const post = joao.newPost("Promoção","Frango pifpaf R$10,00 kg")
post.addComment('Lucas','Exelente promoção')
post.addComment('Maria','No outro mercado ta mais barato')

const newPost = joao.newPost("Leve 2 pague 1","Picanha da maturata R$100,00 kg")
newPost.addComment('Luiz',"Ta cara mas vale apena")
console.log(joao.post)
