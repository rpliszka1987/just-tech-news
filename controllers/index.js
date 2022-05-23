const router = require('express').Router();
// Adds controller user-facing routes
const homeRoutes = require('./home-routes.js');

const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(400).end();
});

module.exports = router;