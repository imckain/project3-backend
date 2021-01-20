const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    userId: String,
    listingId: Number,
}, {timestamps: true});

module.exports = mongoose.model('Favorite', favoriteSchema);