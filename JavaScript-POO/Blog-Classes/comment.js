class Comment{
    constructor(username,comment){
        this.username = username
        this.comment = comment
        this.createDate = new Date()
    }
}

module.exports = Comment