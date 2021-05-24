import mongoose from 'mongoose';

//define user schema (how user will be saved in mongodb database)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, //Name is required
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true, 
  }, //Email required, and cannot have duplicate emails.
  password: { type: String, required: true }, //password required.
  isAdmin: { type: Boolean, required: true, default: false }, //Admin default is set to false
});
//Create model for users
const userModel = mongoose.model('User', userSchema);

export default userModel;
