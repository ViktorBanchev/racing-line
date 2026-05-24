import { Router, type Request, type Response } from "express";
import { getAllArticles } from '../services/articleService.js'

const articleController = Router();

articleController.get('/', async (req: Request, res: Response) => {
    try {
        const articles = await getAllArticles();
        res.status(200).json({ data: articles })
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Server error!"
        })
    }
});

export default articleController;