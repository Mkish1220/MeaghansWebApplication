// router from express 
const router = require('express').Router();

const {
    // all of your user controllers
    getUsers,
    createUser,
    updateThought,
    deleteThought,
    getUserThoughts,

    
} = require('../../controllers/thought-controller');

// set up routes 
router.route('/').get(getUsers).post(createUser)
router.route('/:id/thoughts').get(getUserThoughts)
router.route('/:id/thoughts/:thoughtId').put(updateThought).delete(deleteThought)


// export
module.exports = router;