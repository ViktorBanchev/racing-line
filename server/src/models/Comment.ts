import {Schema, model, Types} from 'mongoose';

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    article: {
        type: Types.ObjectId,
        ref: 'Article',
        required: true
    }
}, {timestamps: true});

const Comment = model('Comment', commentSchema);
export default Comment;