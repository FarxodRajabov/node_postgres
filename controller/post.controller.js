class PostController {
    async createPost(req, res) {
        const {title, content,userId } = req.body
        const newPost = await db.query('INSERT INTO post (title, content, userID) values ($1,$2,$3) RETURNIG *', [title,content,userId])
        res.json(newPost)
    }
    async getPostByUser(req, res) {
        const id = req.query.id
        const posts = await db.query('SELECT * FROM post where user_id = $1', [id])
        res.json(posts.rows)

    }


}


module.exports = new PostController()