const express = require('express');
const { search } = require('../handlers/searchHandler');

const router = express.Router();

router.get('/search', search);

module.exports = router;
