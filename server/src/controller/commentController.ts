import { Router, type Request, type Response } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import { createComment, getCommentByArticle } from "../services/commentService.js";

const commentController = Router();

commentController.post('/:articleId', isAuth, async (req: Request, res: Response) => {
    try {
        const articleId = req.params.articleId as string;
        const userId = req.user!.id;
        const { content } = req.body;

        if (!content) {
            return res.status(400).json({ message: 'Comment content is required!' });
        }

        const comment = await createComment(articleId, userId, content);
        res.status(201).json({
            message: 'Comment added.',
            data: comment
        })
    } catch (error: any) {
        res.status(400).json({ message: error.message || 'Failed to add comment!' })
    }
})

commentController.get('/:articleId', async (req: Request, res: Response) => {
    try {
        const articleId = req.params.articleId as string;
        const comments = await getCommentByArticle(articleId);
        
        res.status(200).json({
            data: comments
        })
    } catch(error: any) {
        res.status(400).json({ message: error.message || 'Failed to fetch comments!'})
    }
});

export default commentController;