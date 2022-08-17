const router = require('express'). Router();
const apiRoutes = require('./api');

router.use('/api', apiRutes);

router.use((req,res) => {
    return res.sen('Wrong route!');
});

module.exports = router;
