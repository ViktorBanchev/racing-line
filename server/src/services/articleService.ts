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