import { Router, type Request, type Response } from "express";
import { createArticle, getAllArticles, getArticle } from '../services/articleService.js'
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import type { ArticlePayload, ArticleQueryOptions } from "../types/article.types.js";

const articleController = Router();

articleController.get('/', async (req: Request, res: Response) => {
    try {
        const queryOptions: ArticleQueryOptions = {
            sortBy: req.query.sortBy as string,
            pageSize: req.query.pageSize as string,
            load: req.query.load as string,
            where: req.query.where as string,
        };

        const articles = await getAllArticles(queryOptions);
        res.status(200).json({ results: articles.length, data: articles })
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Server error!"
        })
    }
});

articleController.post('/', isAuth, isAdmin, async (req: Request, res: Response) => {
    const { title, content, image, category }: ArticlePayload = req.body;
    const currentUser = req.user!;
    try {
        const article = await createArticle({ title, content, image, category, author: currentUser._id })
        res.status(201).json({
            message: 'Article created.',
            data: article
        })
    } catch (error: any) {
        res.status(400).json({
            message: error.message || 'Something went wrong during creation.'
        })
    }
})

articleController.get('/:id', async (req: Request, res: Response) => {
    try {
        const articleId = req.params.id;

        const queryOptions: ArticleQueryOptions = {
            load: req.query.load as string
        };

        const article = await getArticle(articleId as string, queryOptions)
        res.status(200).json({
            message: 'Article fetched',
            data: article
        })
    } catch (error: any) {
        res.status(500).json({
            message: error.message || 'Server error.'
        })
    }
})

export default articleController;