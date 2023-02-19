const Comment = require("./comment.js")
class Post{
    constructor(title,content, author){
        this.title = title
        this.content = content
        this.author = author
        this.comment = []
        this.crateDate = new Date()
    }
    addComment(username,comment){
        let newComment = new Comment(username,comment)
        this.comment.push(newComment)
    }
}

module.exports = Post