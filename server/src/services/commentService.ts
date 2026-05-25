import Comment from "../models/Comment.js";

export async function createComment(articleId: string, userId: string, content: string) {
    const newComment = await Comment.create({
        content,
        author: userId,
        article: articleId
    });

    return newComment.populate('author', 'username image');
}

export async function getCommentByArticle(articleId: string) {
    return await Comment.find({ article: articleId })
        .populate('author', 'username image')
        .sort({ createdAt: -1 })
}