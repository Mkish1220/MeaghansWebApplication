// bring in your models

//  set up your controllers
// get all users 
// user.fing 
// activity 13 in server .js - reference 

// get single user by id
// User.findOne
// populate 'fiends' - to get friend data
// populate ' tthought' - to get thought data 

// creat a new user 
// User.create 

// update a user 
// User.findOneAnd Update
// $set- set the re.body 

// add friend to friend list 
// user.findOneAndUpdate
// $addTo Set- to add the new frined to the user's friend list 

// remoce friend from friend list 
// User.findOne And Update

// export.userControler
const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
    addFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.body.friendId } })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
    removeFriend(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.body.friendId } })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
    deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  }
  
};
