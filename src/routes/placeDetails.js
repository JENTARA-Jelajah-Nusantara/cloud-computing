const express = require('express');
const { getPlaceDetails } = require('../handlers/placeDetailsHandler');

const router = express.Router();

router.get('/place-details', getPlaceDetails);

module.exports = router;
