const router = require('express').Router();

const apiRoutes = require('./api');
//const userRoutes = require('./api/userRoutes');
//const dashboardRoutes = require('./dashboardRoutes');

//router.use('/', homeRoutes);
//router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;