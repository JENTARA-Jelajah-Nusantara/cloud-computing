const axios = require('axios');
const { googleMapsApiKey } = require('../utils/mapsConfig');

exports.search = async (req, res) => {
  const { query } = req.query;

  try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json`, {
          params: {
            query,
            key: googleMapsApiKey
          }
      });
      res.json(response.data);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
