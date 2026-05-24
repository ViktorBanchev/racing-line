import { Schema, Types, model } from 'mongoose';

interface IArticle extends Document {
    title: string;
    category: string;
    image: string;
    likedBy: Types.ObjectId[];
    content: string;
    author: Types.ObjectId;
}

const articleSchema = new Schema<IArticle>({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    likedBy: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    content: {
        type: String,
        required: true
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Article = model<IArticle>('Article', articleSchema);
export default Article;