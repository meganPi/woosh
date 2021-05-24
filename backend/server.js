import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
//Import routes
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';
import uploadRoute from './routes/uploadRoute';


//get access to mongodb url
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
//middleware
app.use(bodyParser.json());
//use the route from uploadRoute
app.use('/api/uploads', uploadRoute);
//use the route from userRoute
app.use('/api/users', userRoute);
//use the route from productRoute
app.use('/api/products', productRoute);
//use the route from orderRoute
app.use('/api/orders', orderRoute);
//Get paypal client id from config.js file.
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
//All product images uploaded by admin to shop gets added to the uploads folder.
//The site then get the images from uploads and displays it on the index.html page.
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});


//const passport = require('passport');
//const cookieSession = require('cookie-session');
//require('./passport');

//Configure Session Storage
//app.use(cookieSession({
  //name: 'session-name',
  //keys: ['key1', 'key2']
//}))

//Configure Passport
//app.use(passport.initialize());
//app.use(passport.session());

//Unprotected Routes
//app.get('/', (req, res) => {
  //res.send('<h1>Home</h1>')
//});

//app.get('/failed', (req, res) => {
  //res.send('<h1>Log in Failed :(</h1>')
//});

// Middleware - Check user is Logged in
///const checkUserLoggedIn = (req, res, next) => {
  //req.user ? next(): res.sendStatus(401);
//}

//Protected Route.
//app.get('/profile', checkUserLoggedIn, (req, res) => {
  //res.send(`<h1>${req.user.displayName}'s Profile Page</h1>`)
//});

// Auth Routes
//app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

//app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  //function(req, res) {
    ///res.redirect('/profile');
  //}
//);

//Logout
//app.get('/logout', (req, res) => {
   // req.session = null;
   // req.logout();
   // res.redirect('/');
//})

//Listening on PORT 5000
app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});
