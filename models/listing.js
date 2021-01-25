const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    photo: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
    },
    price: String,
    sqft: String,
    bed: String,
    bath: String,
    additionalDetails: {
        ac: Boolean,
        laundry: Boolean,
        garage: Boolean,
        offStreetParking: Boolean,
        fireplace: Boolean,
        pool: Boolean,
        hardwoodFloors: Boolean,
        sewer: Boolean,
        schoolsNearby: Boolean,
        parksNearby: Boolean,
    }
})

module.exports = mongoose.model('Listing', listingSchema);