// schema and model form mongoose
const { Schema, model } = require('mongoose');
const { Thought } = require('./Thought');

const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        trim: true
    },
},
    {
        email: {
            type: String,
            required: true,
            unique: true,   
            validate: {
                validator: () => Promise.resolve(false),
                message: 'Email validation failed'
              }
            }
          },
          
    

// user.email = 'test@test.co';
// user.name = 'test';

// let error;
// try {
//    user.validate();
// } catch (err) {
//   error = err;
// }
// assert.ok(error);
// assert.equal(error.errors['name'].message, 'Oops!');
// assert.equal(error.errors['email'].message, 'Email validation failed');



       
    Thought: [Thought.schema],
        { 
            type: Schema.Types.ObjectId,
            ref: 'Thoughts',
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]




// set up  virtual for friendCount 
 friendCount: {
    type: Number,
    toJSON: {
      virtuals: true,
    },

    }
    id: false,
  


// set up model 
const User = model('user', userSchema);
// export model 
module.exports = User;

