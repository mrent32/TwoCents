import { Schema, model } from 'mongoose';
import reactionSchema from './Reaction.js';

const thoughtSchema = new Schema(
    {
        TwoCents: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdOn: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleDateString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const TwoCents = model('Thought', thoughtSchema)

export default TwoCents