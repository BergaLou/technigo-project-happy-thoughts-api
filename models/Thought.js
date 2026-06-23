import mongoose from "mongoose";

const thoughtSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 140,
        trim: true
    },
    hearts: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: ['Random', 'Friends', 'Family'],
        default: 'Random'
    },
    name: {
        type: String,
        default: 'Anonymous'
    }
});

export const Thought = mongoose.model('Thought', thoughtSchema);