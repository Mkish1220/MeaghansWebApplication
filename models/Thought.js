//  simmilar pattern to User 
const { Schema, model } = require('mongoose');
//  pull in the reactionSchema from Reaction model 
const Reaction = require('./Reaction');
//  create a new schema for Thoughts
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    userName: {
        type: String,
        required: true,
    },
    Reaction: [Reaction.schema],
    reactionCount: {
        type: Number,
        default: 0,
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
});




// have an array of reactionSchema 



// virtual for reactionCount

// set up model
const Thougth = model('Thought', thoughtSchema);
// export model
module.exports = Thought;

