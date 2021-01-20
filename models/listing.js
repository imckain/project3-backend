const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    photo: String,
    price: String,
    sqft: String,
    bed: String,
    bath: String,
})

module.exports = mongoose.model('Listing', listingSchema);