const router = require("express").Router();
const listingsCtrl = require('../../controllers/listings');

router.get('/', listingsCtrl.getListings);
router.post('/', listingsCtrl.create)
router.get('/:id', listingsCtrl.show)
router.put('/edit/:id', listingsCtrl.edit);
router.delete('/:id', listingsCtrl.delete)

module.exports = router;