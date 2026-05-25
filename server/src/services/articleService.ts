import type { HydratedDocument, Types } from "mongoose";
import Article, { type IArticle } from "../models/Article.js";
import type { ArticlePayload, ArticleQueryOptions } from "../types/article.types.js";

export async function getAllArticles(options: ArticleQueryOptions) {
    let query = Article.find();

    if (options.sortBy) {
        const [field, order] = options.sortBy.split(' ');
        query = query.sort({ [field as string]: order === 'desc' ? -1 : 1 });
    } else {
        query = query.sort({ createdAt: -1 })
    }

    if (options.pageSize) {
        query = query.limit(parseInt(options.pageSize));
    }

    if (options.load && options.load.includes('author')) {
        query = query.populate('author', 'username email image')
    }

    if (options.where) {
        const [field, rawValue] = options.where.split('=');
        const cleanValue = rawValue?.replace(/"/g, '');
        query = query.where({ [field as string]: cleanValue })
    }

    return await query;
}

export async function createArticle(data: ArticlePayload & { author: Types.ObjectId }): Promise<HydratedDocument<IArticle>> {
    const article = await Article.create(data);
    return article;
}

export async function getArticle(articleId: string, options: ArticleQueryOptions) {
    let query = Article.findById(articleId);

    if (options.load && options.load.includes('author')) {
        query = query.populate('author', 'username email image')
    }

    return await query;
}

export async function deleteArticle(articleId: string, userId: string, userRole: string) {
    const article = await Article.findById(articleId);
    if (!article) {
        throw new Error("Article not found!");
    }

    const isAuthor = article.author.toString() === userId.toString();
    const isAdmin = userRole === 'admin';

    if (!isAuthor && !isAdmin) {
        throw new Error("Unauthorized!");
    }

    await Article.findByIdAndDelete(articleId);
}

export async function updateArticle(articleId: string, userId: string, userRole: string, articleData: ArticlePayload) {
    const article = await Article.findById(articleId);
    if (!article) {
        throw new Error("Article not found!");
    }

    const isAuthor = article.author.toString() === userId.toString();
    const isAdmin = userRole === 'admin';

    if (!isAuthor && !isAdmin) {
        throw new Error("Unauthorized!");
    }

    const updatedArticle = await Article.findByIdAndUpdate(
        articleId,
        articleData,
        { new: true, runValidator: true }
    );

    return updatedArticle;
}