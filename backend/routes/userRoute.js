import express from 'express';
import User from '../models/userModel';
import { getToken, isAuth } from '../util';

const router = express.Router();

router.put('/:id', isAuth, async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: getToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
});
//Create router for signing in
//use post as it is more secure.
router.post('/signin', async (req, res) => {
  //send query to database
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  //If sign in user exists, email and password is correct
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
      //Send back token to identify that We can recognise that next request is 
      //authenticated or not.
    });
  } else {
    //if user does not exist, send invalid message
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});
//Create router for registering.
//use post as it is more secure.
router.post('/register', async (req, res) => {
  //create new user.
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  //save new user.
  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser),
      //Send back token to identify that We can recognise that next request is 
      //authenticated or not.
    });
  } else {
    //if user does not exist, send invalid message
    res.status(401).send({ message: 'Invalid User Data.' });
  }
});
//Create router for admin user
router.get('/createadmin', async (req, res) => {
  try {
    const user = new User({
      name: 'Admin',
      email: 'admin@example.com',
      password: '12345',
      isAdmin: true,
    });
    //User comes from the User model.
    //save new User
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
    //If error, send error to server.
  }
});

export default router;
