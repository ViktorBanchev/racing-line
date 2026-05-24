import { Schema, Types, model } from 'mongoose';

export interface IArticle extends Document {
    title: string;
    category: string;
    image: string;
    likedBy: Types.ObjectId[];
    content: string;
    author: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    _id: string;
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
        ref: 'User',
    }],
    content: {
        type: String,
        required: true
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

const Article = model<IArticle>('Article', articleSchema);
export default Article;