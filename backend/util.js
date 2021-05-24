import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) => {
  //First payload is user.
  //Second payload is a secret key to encrypt the payload.
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    config.JWT_SECRET,
    //JWT secret key for JWT authentication
    {
      expiresIn: '48h',
    }
  );
};
//Authenticate users
const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  //get the token.
  //if token exist, get rid of barrier.
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: 'Invalid Token' });
        //return error if token not valid.
      }
      req.user = decode;
      //save the decoded data into the user.
      next();
      return;
    });
  } else {
    return res.status(401).send({ message: 'Token is not supplied.' });
    //return error if token does not exist
  }
};
//Authenticate admin.
const isAdmin = (req, res, next) => {
  console.log(req.user);
  //if user exists and isAdmin is true, then accept the request.
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ message: 'Admin Token is not valid.' });
  //return error if token is not valid and user is not admin.
};

export { getToken, isAuth, isAdmin };
