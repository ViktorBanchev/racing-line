import Article from "../models/Article.js";

export async function getAllArticles() {
    return await Article.find();
}