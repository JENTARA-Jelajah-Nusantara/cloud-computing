const axios = require('axios');
const { googleMapsApiKey } = require('../utils/mapsConfig');

exports.getOptimalRoute = async (req, res) => {
  const { origin, destinations } = req.body;

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
      params: {
        origin,
        destination: origin,
        waypoints: `optimize:true|${destinations.join('|')}`,
        key: googleMapsApiKey
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
