import type { IArticle } from "../models/Article.js";

export type ArticlePayload = Pick<IArticle, 'title' | 'category' | 'image' | 'content'>

export type ArticleQueryOptions = {
    sortBy?: string;
    pageSize?: string;
    load?: string; 
}