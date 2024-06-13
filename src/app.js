const express = require('express');
const config = require('./utils/mapsConfig');

const authRoutes = require('./routes/auth');
const searchRoutes = require('./routes/search');
const placeDetailsRoutes = require('./routes/placeDetails');
const optimalRouteRoutes = require('./routes/routes');
const reviewsRoutes = require('./routes/reviews');

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/services', searchRoutes);
app.use('/api/services', placeDetailsRoutes);
app.use('/api/services', optimalRouteRoutes);
app.use('/api/services', reviewsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
