const Listing = require('../models/listing')
const Favorite = require('../models/favorite');

const ObjectID = require('mongoose').Types.ObjectId

module.exports = {
    getListings,
    // create,
    // edit: editListing,
    // delete: deleteOne,
    // show
}

// async function getListings(req, res) {
//     try {
//         const data = await Listing.find( req.body )
//         res.json(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

function getListings(req, res) {
    Listing.find(function(err, listings) {
        if (!err) {
            res.json(listings);
        } else {
            console.log(err);
        }
    });
};

// function create(req, res) {
//     const newListing = new Listing({
//         photo: req.body.photo,
//         price: req.body.price,
//         sqft: req.body.sqft,
//         bed: req.body.bed,
//         bath: req.body.bath,
//     })

//     newListing.save((err, listings) => {
//         if(!err) res.send(listings)
//         else console.log(err);
//     })
// }

// function show(req, res) {
//     const id = req.params.id;
//     Listing.findById(id, (err, listing) => {
//         res.json(listing);
//     })
// }

// function editListing(req, res) {
//     if (!ObjectID.isValid(req.params.id))
//         return res.status(400).send('No Record');

//     const updatedListing = {
//         photo: req.body.photo,
//         price: req.body.price,
//         sqft: req.body.sqft,
//         bed: req.body.bed,
//         bath: req.body.bath,
//     }

//     Listing.findByIdAndUpdate(req.params.id, { $set: updatedListing }, {new: true}, (err, listings) => {
//         if (!err) res.send(listings)
//         else console.log('Error while updating');
//     });
// };

// function deleteOne(req, res) {
//     if (!ObjectID.isValid(req.params.id))
//         return res.status(400).send('No Record');
    
//     Listing.findByIdAndRemove(req.params.id, (err, listings) => {
//         if (!err) res.send(listings)
//         else console.log('Error while deleting');
//     })
// }

// async function getListings(req, res) {
//     try {
//         const { data } = await axios.get(Listing)
//         res.json({ data });
//     } catch (error) {
        
//     }
// }

// async function addFavorite(req, res) {

// }