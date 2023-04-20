class Comment {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.createdAt = new Date();
  }
}

module.exports = Comment;
