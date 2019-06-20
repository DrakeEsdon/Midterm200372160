const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        enum: ['Fighting', 'Sports', 'Sports', 'Strategy', 'Puzzle', 'Arcade', 'Platformer', 'Other'],
        default: 'Other'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ArcadeGame', GameSchema);