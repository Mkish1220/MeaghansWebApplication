//  bring in your models

// set up your controllers

// get all thoughts
// thought.find

// get single thought by id 
// Thought.findOne

// create a thought 
// thought.create

// update a thought
// thought.findOneAndUpdate

// delete a thought-also need to do a findOneAndUpdate on the user to remove 
// the thought from the user's thoughts array 
// thought.findOneAndRemove
// also need User.findOneAndUpdat- use $pull to pull the thought from usrs thoughts array 

// add a rection to a thought 
// thought.findOneAndUpdate
// use $addToSet

// remove a reaction from a thought
// thought.findOneAndUpdate
// use $pull to pull reaction from thought reaction array 

// export your thought controller

const Thought  = require('../models');

module.exports = {
  getThoughts(req, res) {
   Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
    updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
    deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  }
  
};
