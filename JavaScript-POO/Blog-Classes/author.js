const Post = require("./post")

class Author{
    constructor(name){
        this.name = name
        this.post = []
    }
    newPost(title,content){
        let newPost = new Post(title,content, this)
        this.post.push(newPost)
        return newPost
    }
}

module.exports = Author