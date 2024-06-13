const express = require('express');
const { getOptimalRoute } = require('../handlers/routeHandler');

const router = express.Router();

router.post('/optimal-route', getOptimalRoute);

module.exports = router;
