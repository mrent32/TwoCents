import { Schema, model, Types } from 'mongoose';

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique, true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique, true,
            validate: {
                validator: function(v) {
                    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
                }
            }
        },

        friends: [
            { 
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
// uses a virtual to get the number of friends 
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
// Creates the User model via the userSchema
const User = model('User', userSchema)

export default User;
