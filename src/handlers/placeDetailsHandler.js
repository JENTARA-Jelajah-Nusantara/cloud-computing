const axios = require('axios');
const { googleMapsApiKey } = require('../utils/mapsConfig');

exports.getPlaceDetails = async (req, res) => {
  const { place_id } = req.query;

  try {
	const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
	  params: {
        place_id,
        key: googleMapsApiKey
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
