const axios = require('axios');
const { googleMapsApiKey } = require('../utils/mapsConfig');

exports.getReviews = async (req, res) => {
  const { place_id } = req.query;

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
      params: {
        place_id,
        fields: 'reviews',
        key: googleMapsApiKey
      }
    });
    res.json(response.data.result.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
