const Listing = require('../models/listing')
const Favorite = require('../models/favorite');

const ObjectID = require('mongoose').Types.ObjectId

module.exports = {
    getListings,
    create,
    edit: editListing,
    delete: deleteOne,
    show
};

async function getListings(req, res) {
    try {
        const data = await Listing.find()
        res.json(data);
    } catch (error) {
        console.log(error);
    };
};

async function show(req, res) {
    try {
        const data = await Listing.findById(req.params.id)
        res.json(data);
    } catch (error) {
        console.log(error);
    };
};

function create(req, res) {
    const newListing = new Listing({
        photo: req.body.photo,
        address: {
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
        },
        price: req.body.price,
        sqft: req.body.sqft,
        bed: req.body.bed,
        bath: req.body.bath,
        additionalDetails: {
            ac: req.body.ac,
            laundry: req.body.laundry,
            garage: req.body.garage,
            offStreetParking: req.body.offStreetParking,
            fireplace: req.body.fireplace,
            pool: req.body.pool,
            hardwoodFloors: req.body.hardwoodFloors,
            sewer: req.body.sewer,
            schoolsNearby: req.body.schoolsNearby,
            parksNearby: req.body.parksNearby,
        }
    });

    newListing.save((err, listings) => {
        if(!err) res.send(listings)
        else console.log(err);
    });
    getListings();
};

function editListing(req, res) {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No Record');

    const updatedListing = {
        photo: req.body.photo,
        address: {
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
        },
        price: req.body.price,
        sqft: req.body.sqft,
        bed: req.body.bed,
        bath: req.body.bath,
        additionalDetails: {
            ac: req.body.ac,
            laundry: req.body.laundry,
            garage: req.body.garage,
            offStreetParking: req.body.offStreetParking,
            fireplace: req.body.fireplace,
            pool: req.body.pool,
            hardwoodFloors: req.body.hardwoodFloors,
            sewer: req.body.sewer,
            schoolsNearby: req.body.schoolsNearby,
            parksNearby: req.body.parksNearby,
        }
    };

    Listing.findByIdAndUpdate(req.params.id, updatedListing, {overwrite: true}, (err, listings) => {
        if (!err) res.send(listings)
        else console.log('Error while updating');
    });
};

function deleteOne(req, res) {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('No Record');
    
    Listing.findOneAndDelete({ _id: req.params.id }, (err, listing) => {
        if (!err) res.send(listing)
        else console.log('Error while deleting ', err);
    });
};


// async function addFavorite(req, res) {

// }