import {Schema, Types } from 'mongoose';

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdOn: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toDateString()
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

export default reactionSchema