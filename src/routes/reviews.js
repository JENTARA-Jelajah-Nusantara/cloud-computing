const express = require('express');
const { getReviews } = require('../handlers/reviewHandler');

const router = express.Router();

router.get('/reviews', getReviews);

module.exports = router;
