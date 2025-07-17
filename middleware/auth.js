async function authentication(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  res.redirect('/user/auth')
}
async function authorization(req) {
    if(!req.session & !req.session.user){
     return  res.status(401).json({ message: 'Unauthorized. Please log in to access this resource.' });
    }

    return req.session.user;
}
module.exports = {
    authentication,
    authorization
}