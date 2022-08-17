// bring in router from express 
//  bring in routes
// set up routes using router.use
// export 
const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;